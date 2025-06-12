import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// List of environment variables that are safe to expose to the client
const PUBLIC_ENV_VARS = [
  'VITE_',  // Vite's convention for client-side env vars
  'NODE_ENV',
  // Add any other environment variables that need to be exposed to the client
];

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory
  const env = loadEnv(mode, process.cwd(), '');
  
  // Filter environment variables to only include those that should be exposed
  const publicEnv = {};
  for (const key of Object.keys(env)) {
    if (PUBLIC_ENV_VARS.some(prefix => key.startsWith(prefix))) {
      publicEnv[`import.meta.env.${key}`] = JSON.stringify(env[key]);
    }
  }
  
  return {
    plugins: [react()],
    // Only expose specific environment variables to the client
    define: {
      ...publicEnv,
      // Global constant for environment
      'import.meta.env.MODE': JSON.stringify(mode),
      'import.meta.env.PROD': JSON.stringify(mode === 'production'),
      'import.meta.env.DEV': JSON.stringify(mode !== 'production'),
    },
    // Development server configuration
    server: {
      port: 3000,
      open: true
    },
    // Build configuration
    build: {
      outDir: 'dist',
      sourcemap: mode === 'development',
      // Minify for production builds
      minify: mode === 'production' ? 'esbuild' : false,
    },
  };
});
