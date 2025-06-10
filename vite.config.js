import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    // Ensure Vite passes through all env variables to the client
    define: {
      'process.env': { ...env }
    },
    // Optional: Configure the development server
    server: {
      port: 3000,
      open: true
    },
    // Optional: Configure the build output
    build: {
      outDir: 'dist',
      sourcemap: mode === 'development',
    },
    // Optional: Configure environment variables that should be exposed to the client
    // Vite automatically exposes variables prefixed with VITE_*
  };
});
