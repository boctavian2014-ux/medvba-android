const mockAuthenticationType = {
  FINGERPRINT: 1,
  FACIAL_RECOGNITION: 2,
  IRIS: 3,
};

module.exports = {
  authenticateAsync: jest.fn().mockResolvedValue({ success: false }),
  hasHardwareAsync: jest.fn().mockResolvedValue(false),
  isEnrolledAsync: jest.fn().mockResolvedValue(false),
  supportedAuthenticationTypesAsync: jest.fn().mockResolvedValue([]),
  AuthenticationType: mockAuthenticationType,
  AuthenticationType: mockAuthenticationType,
};
