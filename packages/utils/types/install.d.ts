import type { App, Plugin } from 'vue';
declare type component = {
    name: string;
};
export declare const withInstall: <T extends component>(comp: T) => Plugin;
export declare const makeInstaller: (components?: Plugin[]) => {
    install: (app: App) => void;
};
export {};
