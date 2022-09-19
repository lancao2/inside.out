import styled from "styled-components";

export const DivHome = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
  column-gap: 20vh;
  height: 100vh;
  width: 100vw;
  align-items: center;


  background-image: linear-gradient(
    287.9deg,
    #39f2cd 1.72%,
    #397ff2 31.51%,
    #9241e5 58.11%,
    #de4553 83.99%,
    #ff4c1f 98.41%
  );
`;
export const DivHomeInfoInfo = styled.div`
  * {
    font-family: "Nunito", sans-serif;
  }
  h1 {
    font-size: 4rem;
    color: #fff;
    letter-spacing: 0.085em;
  }
  p {
    font-size: 1.20rem;
    color: #fff;
    max-width: 60vh;
    text-align: center;
  }
  display: flex;
  flex-direction: column;
  row-gap: 5vh;
  align-items: center;
`;

export const TryButton = styled.button`
    cursor: pointer;

    font-size: 1.10rem;
    color: #ffffff;

    width: 200px;
    height: 40px;

    border: none;
    border-radius: 20px;
    background-image: linear-gradient(192.81deg, #FF6D3F 41.51%, #FF22A7 157.78%);

    &:hover{
        background-image: linear-gradient(192.81deg, #FF7E55 41.51%, #FF51B9 157.78%);;
    }
`