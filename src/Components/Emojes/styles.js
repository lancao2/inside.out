import styled from "styled-components";

export const DivMojis = styled.div`
  height: 90vh;
  width: 60vh;
  .happy {
    animation: 5s infinite alternate happyanimation;
  }
  @keyframes happyanimation {
    0% {
      height: 35%;
      position: relative;
      left: 15%;
      top: 10%;
      z-index: 2;
    }
    100% {
      height: 35%;
      position: relative;
      left: 15%;
      top: 10%;
      transform: translatey(-30px);

      z-index: 2;
    }
  }
  .angry {
    animation: 5s infinite alternate angryAnimation;
  }
  @keyframes angryAnimation {
    0% {
      height: 30%;
      position: relative;
      left: 0%;
      top: 22%;
      z-index: 1;
    }
    100% {
      height: 30%;
      position: relative;
      left: 15%;
      top: 22%;
      z-index: 1;
      transform: translatey(-30px);
    }
  }

  .flirty {
    animation: 5s infinite alternate flirtyAnimation;
  }
  @keyframes flirtyAnimation {
    0% {
      height: 25%;
      position: relative;
      left: 18%;
      top: 9%;
      z-index: 1;
    }
    100% {
      height: 25%;
      position: relative;
      left: 10%;
      top: 9%;
      z-index: 1;
      transform: translatey(30px);
    }
  }

  .sad {
    animation: 5s infinite alternate sadAnimation;
  }
  @keyframes sadAnimation {
    0% {
        height: 22%;
    position: relative;
    left: 7%;
    top: 23%;
    z-index: 1;
    }
    100% {
        height: 22%;
    position: relative;
    left: 15%;
    top: 23%;
    z-index: 1;
      transform: translatey(30px);
    }
  }

  .tense {
    height: 13%;
    position: relative;
    left: -15%;
    top: 4%;
    z-index: 0;
    filter: blur(1.5px);
    animation: 5s infinite alternate tenseAnimation;
  }
  @keyframes tenseAnimation {
    0% {
        height: 18%;
    position: relative;
    left: -15%;
    top: 4%;
    z-index: 0;
    filter: blur(0.5px);
    }
    100% {
        height: 13%;
    position: relative;
    left: -15%;
    top: 4%;
    z-index: 0;
    filter: blur(1.5px);
      
    }
  }

  .fine {
    height: 10%;
    position: relative;
    left: 10%;
    top: -25%;
    z-index: 0;
    filter: blur(1.5px);
    animation: 5s infinite alternate fineeAnimation
  }
  @keyframes fineeAnimation {
    0% {
        height: 15%;
    position: relative;
    left: 10%;
    top: -25%;
    z-index: 0;
    filter: blur(0.5px);
    }
    100% {
        height: 10%;
    position: relative;
    left: 10%;
    top: -25%;
    z-index: 0;
    filter: blur(1.5px);
      
    }
  }
`;
