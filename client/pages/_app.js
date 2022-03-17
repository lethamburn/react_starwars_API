import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
      font-family: "Anakin";
      src: url("./fonts/anakin.ttf");
    };
@font-face {
      font-family: "Star Wars";
      src: url("./fonts/starwars.ttf");
    };
@font-face {
      font-family: "Episode";
      src: url("./fonts/episode.ttf");
    };
@font-face {
      font-family: "Aurek";
      src: url("./fonts/aurek.ttf");
    };

html{
  margin:0 auto;
  padding: 0;
  scroll-behavior: smooth;
}

body{
  background-image:url("./images/background.jpg");
  background-color:#19181d;
  min-height:100vh;
  padding: 1rem;
  margin-top:0;
  font-family: "Anakin";
  color: #e6e8e9;
}

h1{
  font-family: "Star Wars";
  color: #fc9d1b;
}
;
h2{
  color: #f4500a;
}
h3{
  font-family: "Episode";
  word-spacing: 8px;
};
h4{
  font-family: "Aurek";
  color: #fff;
  text-shadow:
      0 0 7px #538397,
      0 0 10px #538397,
      0 0 21px #538397,
      0 0 42px #538397,
      0 0 82px #538397,
      0 0 92px #538397,
      0 0 102px #538397,
      0 0 151px #538397;
  transition: 1s;
  &:hover{
    font-family: "Anakin";  
    cursor: crosshair;
  }
}
img {
   border: solid 4px white;
  }
`;

const theme = {
  colors: {
    primary: "#fafafa",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
