import styled from "styled-components";

const UISplashScreen = styled.div`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .fadeIn {
    animation: fadeIn ease 3s;
  }

  .fadeOut {
    animation: fadeOut ease 3s;
  }

  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-family: "LongTime", sans-serif;
    color: #13e6f0;
    text-align: left;
    line-height: 30px;
    letter-spacing: 2px;
    font-weight: 1;
    @media (min-width: 600px) {
      font-size: 50px;
      line-height: 60px;
    }
  }
`;

export default UISplashScreen;
