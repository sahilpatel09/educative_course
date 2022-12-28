// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        // Private keys are only available on the server
        privateVar: process.env.NUXT3_PRIVATE_VAR,
        // Public keys that are exposed to the client
        public: {
            publicVar: process.env.NUXT3_PUBLIC_VAR
        }
      }
})
