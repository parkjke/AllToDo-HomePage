import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        port: 5177,
        host: true
    },
    build: {
        outDir: 'docs'
    },
    base: '/'
})
