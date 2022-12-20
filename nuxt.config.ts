// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/main.scss" as *;',
				},
			},
		},
	},
	css: ["bootstrap/dist/css/bootstrap.min.css"],
	plugins: [
  ],
	modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.json',
        name: "English",
      },
      {
        code: 'fr',
        file: 'fr.json',
        name: "Français",
      }
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en'
  },
});
