import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    --primary-color-text: rgba(25, 26, 21, 1); 
    --accent-color-text: rgba(84, 190, 150, 1);
    --white-color-text: rgba(251, 251, 251, 1);
    --grey-color-text: rgba(25, 26, 21, 0.3);
 
    --white-color: rgba(251, 251, 251, 1);
    --accent-color-normal: rgba(84, 190, 150, 1);
    --accent-color-hover: rgba(54, 163, 121, 1);
    --grey-color-border: rgba(25, 26, 21, 0.1);
    
    --color-star: rgba(255, 197, 49, 1);

  }

  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
  }
  
  h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

img {
  display: block;

  height: auto;
}

button {
  cursor: pointer;
  padding: 0;
}

* {
  box-sizing: border-box;
}

`;

export default GlobalStyles;
