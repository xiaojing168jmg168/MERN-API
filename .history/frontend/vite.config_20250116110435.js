
import react from '@vitejs/plugin-react';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'


export default {
  optimizeDeps: {
    include: ["@chakra-ui/react"],
  },
  plugins: [react()],
  server:{
    proxy:{
      "/api":{
        target:"http://localhost:5000"
      }
    }
  }
};



