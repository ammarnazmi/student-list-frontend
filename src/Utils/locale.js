import { createI18n } from 'vue-i18n';
import enLocale from '@/utils/lang/en.json';

const messages = {
  en: enLocale,
};

export default createI18n({
  locale: 'en',
  messages,
});
