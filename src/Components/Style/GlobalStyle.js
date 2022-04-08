import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   html {
     box-sizing: border-box;
   }

   img {
     max-width: 100 %;
     height: auto;

   }

   *,
   *::before,
   *::after {
     box-sizing: inherit;
   }

   body {
     margin: 0;
     background-color: #f0F0F0;
     font-family: Roboto, sans-serif;
     font-size: 20px;
     color: black;
   }

   a {
     text-decoration: none;
     color: inherit;
   }

   ul {
     list-style: none;
     padding: 0;
     margin: 0;
   }

   h1, h2, h3 {
     font-family: Pacifico;
     list-style: none;
     padding: 0;
     margin: 0;
   }

   p {
     padding: 0;
     margin: 0;
   }

   button {
     cursor: pointer;
   }

   input, button {
     font-family: inherit;
   }
`;