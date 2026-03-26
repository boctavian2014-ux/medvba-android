/**
 * AI Provider abstraction layer
 * Supports multiple AI providers: openai, rork
 */

export type AIProvider = 'openai' | 'rork';

export interface AIProviderConfig {
  provider: AIProvider;
  apiKey?: string;
  baseUrl?: string;
  model?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface GenerateTextOptions {
  messages: ChatMessage[];
  model?: string;
  temperature?: number;
  maxTokens?: number;
}

// Get provider from environment
function getProviderConfig(): AIProviderConfig {
  const provider = (process.env.EXPO_PUBLIC_AI_PROVIDER || 'openai') as AIProvider;
  return {
    provider,
    apiKey: process.env.EXPO_PUBLIC_AI_API_KEY,
    baseUrl: process.env.EXPO_PUBLIC_AI_BASE_URL,
    model: process.env.EXPO_PUBLIC_AI_MODEL || 'gpt-4o-mini',
  };
}

// OpenAI compatible API call
async function callOpenAI(options: GenerateTextOptions, config: AIProviderConfig): Promise<string> {
  const { messages, model, temperature = 0.7, maxTokens = 2000 } = options;
  
  const apiKey = config.apiKey || process.env.OPENAI_API_KEY;
  const baseUrl = config.baseUrl || 'https://api.openai.com/v1';
  
  if (!apiKey) {
    throw new Error('OpenAI API key not configured. Set EXPO_PUBLIC_AI_API_KEY in .env');
  }
  
  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: model || config.model || 'gpt-4o-mini',
      messages,
      temperature,
      max_tokens: maxTokens,
    }),
  });
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`OpenAI API error: ${response.status} - ${error}`);
  }
  
  const data = await response.json();
  return data.choices[0]?.message?.content || '';
}

// Rork API call
async function callRork(options: GenerateTextOptions, config: AIProviderConfig): Promise<string> {
  const baseUrl = config.baseUrl || process.env.EXPO_PUBLIC_RORK_API_BASE_URL;
  
  if (!baseUrl) {
    throw new Error('Rork API base URL not configured. Set EXPO_PUBLIC_RORK_API_BASE_URL in .env');
  }
  
  try {
    // Dynamic import for @rork-ai/toolkit-sdk
    const { generateText } = await import('@rork-ai/toolkit-sdk');
    
    // Convert messages to Rork format (filter out system messages)
    const rorkMessages = options.messages
      .filter(m => m.role !== 'system')
      .map(m => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      }));
    
    const response = await generateText({
      messages: rorkMessages as any,
    });
    
    return response;
  } catch (error) {
    throw new Error(`Rork API error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Main generateText function that routes to the configured provider
export async function generateText(options: GenerateTextOptions): Promise<string> {
  const config = getProviderConfig();
  
  switch (config.provider) {
    case 'openai':
      return callOpenAI(options, config);
    case 'rork':
      return callRork(options, config);
    default:
      throw new Error(`Unknown AI provider: ${config.provider}`);
  }
}

export const SYSTEM_PROMPT = `You are an expert AI tutor helping students prepare for medical exams (USMLE, MBBS, anatomy exams, etc.).

Your role:
- Explain complex medical concepts clearly and accurately
- Use clinical correlations and mnemonics when helpful
- Structure answers with clear headings and bullet points
- Provide mechanism-based explanations
- Reference relevant anatomy, physiology, pathology, and pharmacology
- Be encouraging and supportive

Formatting guidelines:
- Use **bold** for important terms and headings
- Use bullet points (•) for lists
- Keep explanations concise but comprehensive
- End with a follow-up question or offer to explain more

Topics you cover: Anatomy, Physiology, Pathology, Pharmacology, Biochemistry, Microbiology, Immunology, Histology, Embryology, and clinical medicine.`;
