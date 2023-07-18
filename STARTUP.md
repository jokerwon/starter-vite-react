# How to create starter-vite-react

## Initialize project

~~~shell
pnpm create vite
~~~

## Configure eslint

### Installation

~~~shell
pnpm add -D eslint @antfu eslint-config
~~~

### Modify configuration

~~~javascript
// .eslintrc.js
process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: '@antfu',
}
~~~

## Add react-router

### Installation

~~~shell
pnpm add react-router react-router-dom
~~~

### Add routes

~~~javascript
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
~~~

## Add UnoCSS

### Installation

~~~shell
pnpm add -D unocss
~~~

### Modify `vite.config.ts`

~~~typescript
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS()],
})
~~~

### Add `uno.config.ts`

~~~typescript
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
  ],
});
~~~

### Import `uno.css`

~~~jsx
// **import reset styles, need to install @unocss/reset**
import '@unocss/reset/eric-meyer.css'
import 'virtual:uno.css'
~~~
