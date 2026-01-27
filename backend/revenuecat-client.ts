import createClient from 'openapi-fetch';

import type { paths } from './revenuecat-schema';

const REVENUECAT_BASE_URL = 'https://api.revenuecat.com/v2';

export function createRevenueCatClient(apiKey: string) {
  return createClient<paths>({
    baseUrl: REVENUECAT_BASE_URL,
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
}
