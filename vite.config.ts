import { fileURLToPath, URL } from "node:url";
import createPluginVue from "@vitejs/plugin-vue";
import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";

const cwd = process.cwd();

const viteConfig = defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const { VITE_BASE_URL } = loadEnv(mode, cwd);

  const fileAliasPath = (url: string) => {
    return fileURLToPath(new URL(url, import.meta.url));
  };

  return {
    base: VITE_BASE_URL,
    plugins: [createPluginVue()],
    resolve: {
      alias: {
        "@": fileAliasPath("./src"),
      },
    },
    server: {
      port: 80,
      host: "0.0.0.0",
    },
  };
});

export default viteConfig;
