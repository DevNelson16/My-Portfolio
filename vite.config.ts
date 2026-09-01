import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Config padrão do Vite para um projeto React + TypeScript.
// O plugin react ativa o Fast Refresh (atualização instantânea ao gravar ficheiros).
export default defineConfig({
  plugins: [react()],
});
