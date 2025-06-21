import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { viteStaticCopy } from "vite-plugin-static-copy";
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
    viteStaticCopy({
      targets: [
        {
          src: "sitemap.xml",
          dest: "",
        },
        {
          src: "CNAME",
          dest: "",
        },
      ],
    }),
  ],
  server: {
    port: 3000,
    host: "0.0.0.0",
    https: false,
  },
  build: {
    target: "esnext",
  },
});
