export const ENV = {
  IS_DEV: (process.env.NODE_ENV || '') !== 'production',
  IS_PRODUCTION: process.env.IS_PRODUCTION || false,
  I18NEXUS_API_KEY: process.env.I18NEXUS_API_KEY || '',
};
