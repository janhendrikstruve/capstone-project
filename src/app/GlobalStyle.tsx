import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  background-color: var(--c-blue);
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

* {
  box-sizing: border-box;
}

:root {
    --c-beige: #ffd6b0;
    --c-brown:#a52a2a;
    --c-blue:#add8e6;
    --c-brass:#b47601;
    --c-grey: #6a6a6a;
  }

`

export default GlobalStyle
