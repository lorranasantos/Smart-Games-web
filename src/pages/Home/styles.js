import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: var(--Gray);

    display: flex;
    justify-content: center;
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--primary);

`;

export const Logo = styled.header`
    width: 200px;
    height: 100px;
    background-color: aquamarine;
    align-self: center;
`;

export const Session = styled.div`
    width: 1280px;
    height: 70px;
    padding-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: brown;
`;

export const Content = styled.div`
  width: 1280px;
  padding-top: 60px;

  display: flex;
  flex-direction: column;
`;

export const CardProducts = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    align-items: center;
    gap: 10px;
    margin-top: 90px;

    overflow-y: auto;

    padding-top: 10px 0px;
    padding: 50px;
`;

export const GameCard = styled.article`
    width: 250px;
    height: 310px;
    background-color: var(--light);
    margin-top: 25px;
    border-radius: 2px;
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;

    :hover{
        margin-top: 20px;
        height: 315px;
        width: 255px;
        transition: 0.5s;
    }

    > header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

    > img {
        width: 150px;
        height: 200px;
    }
  }
  >section{
        width: 100%;
        align-items: center;
        justify-content: center;

        >h1{
            color: var(--darkGreen);
            align-self: center;
        }
  }

  >footer{
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

      >button{
          width: 70%;
          height: 40px;
          font-family: Arial, Helvetica, sans-serif;
      }
  }
`;



export const Footer = styled.div`
    width: 100%;
    height: 90px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--light);

`;

export const GameImage = styled.div`
    width: 300px;
    height: 200px;
    background-color: aquamarine;
    margin-top: 20px;
`;

export const GameDescription = styled.div`
    width: 400px;
    height: 300px;
    border: 1px #000000;

`;
