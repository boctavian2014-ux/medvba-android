/**
 * RevenueCat UI helpers for Paywall and Customer Center.
 * Uses react-native-purchases-ui for native paywalls and subscription management.
 */
import { Platform } from 'react-native';
import RevenueCatUI, { PAYWALL_RESULT } from 'react-native-purchases-ui';
import Purchases from 'react-native-purchases';
import { ENTITLEMENT_ID } from '@/constants/subscription';

const IS_NATIVE = Platform.OS === 'ios' || Platform.OS === 'android';

/**
 * Present the RevenueCat Paywall modal.
 * Only works on native (iOS/Android). On web, returns NOT_PRESENTED.
 */
export async function presentPaywall(): Promise<PAYWALL_RESULT> {
  if (!IS_NATIVE) {
    return PAYWALL_RESULT.NOT_PRESENTED;
  }
  try {
    return await RevenueCatUI.presentPaywall({displayCloseButton: true});
  } catch (error) {
    console.error('[RevenueCat] presentPaywall error:', error);
    return PAYWALL_RESULT.ERROR;
  }
}

/**
 * Present the paywall only if the user does not have the required entitlement.
 * Useful for access-gating (e.g. before starting a premium feature).
 */
export async function presentPaywallIfNeeded(): Promise<PAYWALL_RESULT> {
  if (!IS_NATIVE) {
    return PAYWALL_RESULT.NOT_PRESENTED;
  }
  try {
    return await RevenueCatUI.presentPaywallIfNeeded({
      requiredEntitlementIdentifier: ENTITLEMENT_ID,
      displayCloseButton: true,
    });
  } catch (error) {
    console.error('[RevenueCat] presentPaywallIfNeeded error:', error);
    return PAYWALL_RESULT.ERROR;
  }
}

/**
 * Present the RevenueCat Customer Center for subscription management.
 * Allows users to view subscription, change plans, cancel, restore, request refunds (iOS).
 */
export async function presentCustomerCenter(): Promise<void> {
  if (!IS_NATIVE) {
    console.warn('[RevenueCat] Customer Center is not available on web');
    return;
  }
  try {
    await RevenueCatUI.presentCustomerCenter({
      callbacks: {
        onRestoreCompleted: ({ customerInfo }) => {
          console.log('[RevenueCat] Restore completed:', customerInfo.originalAppUserId);
        },
        onRestoreFailed: ({ error }) => {
          console.error('[RevenueCat] Restore failed:', error.message);
        },
      },
    });
  } catch (error) {
    console.error('[RevenueCat] presentCustomerCenter error:', error);
  }
}

/**
 * Check if the current customer has the Pro entitlement.
 */
export async function checkEntitlement(): Promise<boolean> {
  if (!IS_NATIVE) return false;
  try {
    const customerInfo = await Purchases.getCustomerInfo();
    return customerInfo.entitlements.active[ENTITLEMENT_ID] != null;
  } catch (error) {
    console.error('[RevenueCat] checkEntitlement error:', error);
    return false;
  }
}

export { PAYWALL_RESULT };
