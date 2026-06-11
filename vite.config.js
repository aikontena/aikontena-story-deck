import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/aikontena-story-deck/',
  plugins: [react()],
})
