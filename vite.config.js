// ================================
// FILE: vite.config.js
// ================================
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})


// ================================
// FILE: src/index.css
// ================================
@import "tailwindcss";

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #ffffff;
}

* {
  box-sizing: border-box;
}
