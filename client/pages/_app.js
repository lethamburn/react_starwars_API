import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import Navigator from "../components/Navigator";
import SplashScreen from "../components/SplashScreen";

const GlobalStyle = createGlobalStyle`

@font-face {
      font-family: "Anakin";
      font-display: block;
      src: url("./fonts/anakin.ttf");
    };
@font-face {
      font-family: "Star Wars";
      font-display: block;
      src: url("./fonts/starwars.ttf");
    };
@font-face {
      font-family: "Episode";
      font-display: block;
      src: url("./fonts/episode.ttf");
    };
@font-face {
      font-family: "Aurek";
      font-display: block;
      src: url("./fonts/aurek.ttf");
    };
@font-face {
      font-family: "LongTime";
      font-display: block;
      src: url("./fonts/longtime.ttf");
    };

html{
  margin:0 auto;
  padding: 0;
  scroll-behavior: smooth;
}

body{
  text-align: center;
  min-height:100vh;
  padding: 1rem;
  margin-top:0;
  font-family: "Anakin";
  color: #e6e8e9;
  #space {
  background: black;
  width: 100%;
  height: 100%;
  -webkit-animation-name: starField;
  -webkit-animation-duration: 20s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-delay: 0s;
  -webkit-animation-timing-function: linear;
  animation-name: starField;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-delay: 0s;
  animation-timing-function: linear;
  -moz-animation-name: starField;
  -moz-animation-duration: 30s;
  -moz-animation-iteration-count: infinite;
  -moz-animation-delay: 0s;
  -moz-animation-timing-function: linear;
  -o-animation-name: starField;
  -o-animation-duration: 30s;
  -o-animation-iteration-count: infinite;
  -o-animation-delay: 0s;
  -o-animation-timing-function: linear;
  z-index:-10
}

@keyframes starField {
  from {
    -webkit-filter: hue-rotate(0deg);
    filter: hue-rotate(0deg);
    -moz-filter: hue-rotate(0deg);
    -o-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(360deg);
    filter: hue-rotate(360deg);
    -moz-filter: hue-rotate(360deg);
    -o-filter: hue-rotate(360deg);
  }
}

#space,
.stars {
  overflow: hidden;
  position: fixed;
  top: 0px;
  left: 0px;
  background:cover;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  z-index: -2;
}

.stars {
  background-image: radial-gradient(1px 1px at 20px 30px, #eee, rgba(0, 0, 0, 0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0, 0, 0, 0)), radial-gradient(1px 1px at 50px 160px, #ddd, rgba(0, 0, 0, 0)), radial-gradient(1px 1px at 90px 40px, #fff, rgba(0, 0, 0, 0)), radial-gradient(1px 1px at 130px 80px, #fff, rgba(0, 0, 0, 0)), radial-gradient(1px 1px at 160px 120px, #ddd, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  background-size: 200px 200px;
  animation: zoom 15s infinite;
  opacity: 0;
}

.stars:nth-child(1) {
  background-position: 50% 50%;
  animation-delay: 0s;
}

.stars:nth-child(2) {
  background-position: 20% 60%;
  animation-delay: 1s;
}

.stars:nth-child(3) {
  background-position: -20% -30%;
  animation-delay: 2s;
}

.stars:nth-child(4) {
  background-position: 40% -80%;
  animation-delay: 3s;
}

.stars:nth-child(5) {
  background-position: -20% 30%;
  animation-delay: 4s;
}

@keyframes zoom {
  0% {
    opacity: 0;
    transform: scale(0.5);
    animation-timing-function: ease-in;
  }
  85% {
    opacity: 1;
    transform: scale(2.8);
    animation-timing-function: linear;
  }
  100% {
    opacity: 0;
    transform: scale(3.5);
  }
}
}

body::-webkit-scrollbar {
  width: 12px;             
}

body::-webkit-scrollbar-track {
  background:  #04070B;      
}

body::-webkit-scrollbar-thumb {
  background-color:#85ADBC ;        
  border: 3px solid #85ADBC; 
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
  transition: 1.5s;
  text-transform: uppercase;
  font-family: "Anakin";
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

      &:hover{
        text-shadow:
      0 0 7px whitesmoke,
      0 0 10px whitesmoke,
      0 0 21px whitesmoke,
      0 0 42px whitesmoke,
      0 0 82px whitesmoke,
      0 0 92px whitesmoke,
      0 0 102px whitesmoke,
      0 0 151px whitesmoke;
      }
}
h5{
  transition: 1.5s;
  text-transform: uppercase;
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

      &:hover{
        text-shadow:
      0 0 7px whitesmoke,
      0 0 10px whitesmoke,
      0 0 21px whitesmoke,
      0 0 42px whitesmoke,
      0 0 82px whitesmoke,
      0 0 92px whitesmoke,
      0 0 102px whitesmoke,
      0 0 151px whitesmoke;
      }
}
img {
  border: 8px solid #e6e8e9;
  border-style: double;
  
}

a{
  font-family: "Episode";
      text-decoration: none;
      color: #fc9d1b;

      &:hover{
        color: #f4500a;
      }
 }
 .planet{
   border-radius: 50%;
   border: none;
  border-style: none;
 }
`;

const theme = {
  colors: {
    primary: "#fafafa",
  },
};

function MyApp({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 4000);
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div id="space">
          <div className="stars"></div>
          <div className="stars"></div>
          <div className="stars"></div>
          <div className="stars"></div>
          <div className="stars"></div>
          <div className="stars"></div>
          <div className="stars"></div>
        </div>
        {loaded ? (
          <>
            <Navigator />
            <Component {...pageProps} />
          </>
        ) : (
          <SplashScreen />
        )}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
