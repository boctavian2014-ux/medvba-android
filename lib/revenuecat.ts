import { Platform } from 'react-native';
import Purchases from 'react-native-purchases';
import { presentPaywallUI } from 'react-native-purchases-ui';

export enum PAYWALL_RESULT {
  PURCHASED = 'PURCHASED',
  RESTORED = 'RESTORED',
  CANCELLED = 'CANCELLED',
  ERROR = 'ERROR',
}

/**
 * Present the RevenueCat Paywall UI
 * Only works on native platforms (iOS/Android) with a development build
 */
export async function presentPaywall(): Promise<PAYWALL_RESULT> {
  // Check if we're on a native platform
  if (Platform.OS !== 'ios' && Platform.OS !== 'android') {
    console.warn('[RevenueCat] Paywall not available on web');
    return PAYWALL_RESULT.ERROR;
  }

  try {
    // Present the paywall UI
    const result = await presentPaywallUI();
    
    // The result is a CustomerInfo object if purchase/restore succeeded
    if (result) {
      console.log('[RevenueCat] Paywall presented successfully');
      return PAYWALL_RESULT.PURCHASED;
    }
    
    return PAYWALL_RESULT.CANCELLED;
  } catch (error: any) {
    // User cancelled
    if (error?.userCancelled === true) {
      console.log('[RevenueCat] User cancelled paywall');
      return PAYWALL_RESULT.CANCELLED;
    }
    
    console.error('[RevenueCat] Paywall error:', error);
    return PAYWALL_RESULT.ERROR;
  }
}
