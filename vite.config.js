import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/Interactive-Comment-Section/',
  plugins: [react()],
  server:{
    host:true
  }
})
