import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;700&family=Muli:wght@400;600&display=swap');

  body {
    margin: 0;
    padding: 0;
    /* 2. Jadikan Fira Sans sebagai font default untuk fallback */
    font-family: 'Fira Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Fira Sans', sans-serif;
  }

  /* 4. Atur font spesifik untuk semua paragraf */
  p {
    font-family: 'Muli', sans-serif;
  }
`;

export default GlobalStyles;