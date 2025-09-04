export default defineConfig(({ mode }) => ({
  base: '/',
  server: {
    host: true, // allows all hosts
    port: 8080,
    allowedHosts: ['stark-8q2g.onrender.com'], // your Render host
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
