import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/akademiapostawy_front/', // 👈 to musi się zgadzać z nazwą repo
  plugins: [react()],
});