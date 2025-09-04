import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/akademiapostawy_front', 
  plugins: [react()],
});