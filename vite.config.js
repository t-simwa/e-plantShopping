import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // For standalone repository deployment:
  // If repo name is "e-plantShopping", use "/e-plantShopping"
  // If using "username.github.io", use "/"
  base: "/e-plantShopping",
  plugins: [react()],
})
