/**
 * This file is used to define the Cloudflare environment variables and bindings.
 * It is automatically included in the build process.
 */

interface CloudflareEnv {
  // Add your Cloudflare bindings here
  // KV: KVNamespace;
  // DB: D1Database;
  // BUCKET: R2Bucket;
}

declare global {
  interface CloudflareEnv extends CloudflareEnv {}
}
