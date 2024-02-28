import { App } from 'vue';
import { NwButton } from './components/button';
const nwAntdvComponents = [NwButton];
export const installer = (app: App) => {
  nwAntdvComponents.forEach((comp) => app.use(comp));
};
