export const getProtocol = (): string =>
  process.env.NODE_ENV === "production" ? "https" : "http";
