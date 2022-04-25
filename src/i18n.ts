import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n.use(HttpApi)
	.use(initReactI18next)
	.init({
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		},
		lng: 'en',
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
		debug: import.meta.env.DEV,
	});

export default i18n;
