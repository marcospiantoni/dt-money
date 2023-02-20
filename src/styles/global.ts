import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --background: #fbf2f5;
  --red: #E52E40;
  --blue: #5429CC;

  --blue-light: #6933FF;
  --text-body: #969CB3;

  --background: #F0F2F5;
  --shape: #FFFFFF;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080) {
    font-size: 93.75%; // 15px
  }

  @media (max-width: 720) {
    font-size: 87.5%; // 14px
  }
}

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
  font-weight: 400; 
}

h1, h2, h3, h4, h5, h6, strong {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}

body, input, textarea, button {
  font-family: 'Poppins' , sans-serif;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`