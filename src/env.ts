export const ENV = {
  IS_DEV: (process.env.NODE_ENV || '') !== 'production',
  IS_PRODUCTION: process.env.IS_PRODUCTION || false,
};
