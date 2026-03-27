export const FREE_DAILY_QUIZ_LIMIT = 10;

/** Entitlement identifier in RevenueCat dashboard - "Dev AI LTD. EOOD Pro" */
export const ENTITLEMENT_ID = 'pro';

/** Package identifiers for Monthly and Yearly products */
export const PACKAGE_MONTHLY = 'monthly';
export const PACKAGE_YEARLY = 'yearly';

export const PREMIUM_FEATURE_KEYS = [
  'premium.feature1',
  'premium.feature2',
  'premium.feature3',
  'premium.feature4',
  'premium.feature5',
  'premium.feature6',
  'premium.feature7',
  'premium.feature8',
];

export const PRICING = {
  monthly: {
    price: '50 RON',
    priceValue: 50,
    period: 'lună',
    description: 'Facturat lunar',
  },
  yearly: {
    price: '500 RON',
    priceValue: 500,
    period: 'an',
    description: 'Facturat anual',
    savings: '17%',
    savingsText: 'Economisești 17% (100 RON/an)',
  },
};

// TODO: Replace hardcoded English strings with i18n keys (e.g. t('subscription.free.questions'))
// and resolve via the i18n system before this array is rendered in localised UI.
export const FREE_FEATURES = [
  '10 free questions per day',
  'Access to all 30,000+ questions',
  'Basic statistics',
  'Learning community',
];
