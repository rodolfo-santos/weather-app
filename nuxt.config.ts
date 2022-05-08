import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  publicRuntimeConfig: {
    WEATHER_APP_SECRET: process.env.WEATHER_APP_SECRET,
  },
  privateRuntimeConfig: {
    HELLO: "world in the server not the client",
  },
  css: ["~/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
