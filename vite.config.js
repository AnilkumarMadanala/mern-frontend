import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
=======
  server: {
    proxy: {
      '/api': 'https://mern-backend-9bjv.onrender.com'
    }
  }
>>>>>>> 235d2a2b9b40115119228e04a3f7b02989eb8f3b
});
