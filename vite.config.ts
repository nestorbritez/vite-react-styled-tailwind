import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import reactJsx from 'vite-react-jsx'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), reactJsx(), tsconfigPaths()],
})
