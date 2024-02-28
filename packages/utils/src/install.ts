import type { App, Plugin } from 'vue'; // 只是导入类型不是导入App的值

/**
 * 组件外部使用use时执行install，然后将组件注册为全局
 */

declare type SFCWithInstall<T> = T & Plugin & component;

declare type component = {
  name: string;
};

export const withInstall = <T extends component>(comp: T): Plugin => {
  (comp as SFCWithInstall<T>).install = (app: App): void => {
    app.component(comp.name, comp);
  };
  return comp as SFCWithInstall<T>;
};

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App) => {
    console.log(components);
    components.forEach((c) => app.use(c));
  };
  return {
    install
  };
};
