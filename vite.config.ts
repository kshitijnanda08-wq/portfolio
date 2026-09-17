import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project at https://<username>.github.io/jack-portfolio/
// so Vite needs to know that base path when building asset URLs.
// If you name the repo something else, change the string below to match: '/your-repo-name/'
export default defineConfig({
  base: '/jack-portfolio/',
  plugins: [react()],
})
