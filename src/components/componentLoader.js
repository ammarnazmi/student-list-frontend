import BaseCard from "./UI/BaseCard.vue";
import BaseButton from "./UI/BaseButton.vue";
import BaseTable from "./UI/BaseTable.vue";
import BaseLoader from './UI/BaseLoader.vue'

export default function loadComponents(app) {
  app.component("base-card", BaseCard);
  app.component("base-button", BaseButton);
  app.component("base-table", BaseTable);
  app.component("base-loader", BaseLoader);
}
