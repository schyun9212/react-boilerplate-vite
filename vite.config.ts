/* eslint-disable import/no-unused-modules */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-extraneous-dependencies */
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import inject from "@rollup/plugin-inject";
import resolve from "@rollup/plugin-node-resolve";
import react from "@vitejs/plugin-react";
import nodePolyfills from "rollup-plugin-node-polyfills";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["@emotion/babel-plugin", "react-hot-loader/babel"],
      },
    }),
    checker({ typescript: true }),
  ],
  resolve: {
    alias: {
      "@": "/src",
      process: "process/browser",
    },
  },
  define: {
    global: "globalThis",
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      plugins: [
        // @ts-ignore
        nodePolyfills(),
        resolve({ browser: true }),
        inject({ Buffer: ["Buffer", "Buffer"] }),
      ],
    },
  },
  esbuild: { logOverride: { "this-is-undefined-in-esm": "silent" } },
});
