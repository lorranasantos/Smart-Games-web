import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100%;

  background-color: var(--wallpaper);

  display: flex;
  justify-content: center;
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 150px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--primary);
`;

export const Logo = styled.header`
  width: 400px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 42px;
    color: white;
    font-weight: bold;
    font-family: Courier, monospace;
  }
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
  height: 800px;
  padding-top: 100px;
  padding-bottom: 15px;

  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  align-items: center;
  gap: 10px;
  margin-top: 60px;

  overflow-y: auto;

  margin-left: 15px;
`;

export const GameCard = styled.article`
  width: 240px;
  height: 310px;
  background-color: var(--card);
  margin-top: 25px;
  border-radius: 2px;
  font-family: Arial, Helvetica, sans-serif;

  :hover {
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
  > section {
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    > h1 {
      color: var(--darkGreen);
      align-self: center;
    }
  }

  > footer {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    > button {
      width: 70%;
      height: 40px;
      font-family: Arial, Helvetica, sans-serif;
    }
  }
`;

export const ProductComponent = styled.div`
  width: 240px;
  height: 310px;
`;

export const Footer = styled.div`
  width: 100vw;
  height: 90px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--primary);
`;
export const ImageAndBuy = styled.div`
  width: 100%;
  height: 250px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 30% 50% 20%;
  font-family: Arial, Helvetica, sans-serif;

  > img {
    width: 290px;
    height: 250px;
    background-color: aquamarine;
  }
  > section {
    height: 200px;
    text-align: center;

    /* >strong{
            font-size: 28px;
            margin-top: 20px;
        } */
    > div {
      height: 50px;
      display: flex;
      align-items: center;

      > div {
        width: 120px;
        height: 40px;
        padding: 5px;
        padding-top: 10px;
        text-align: center;
        background-color: var(--primary);
        border-radius: 10px;
        color: var(--light);
        margin-left: 15px;
      }
    }
    > h1 {
      font-size: 22px;
      color: var(--darkGreen);
      margin-top: 20px;
      margin-bottom: 20px;
      font-weight: bold;
    }
    > button {
      width: 200px;
      height: 50px;
    }
  }
  //QRcode
  > footer {
    height: 200px;
    margin-top: 20px;
    display: flex;

    div {
      width: 150px;
      height: 150px;
      align-self: center;
    }
  }
`;

export const GameDescription = styled.div`
  width: 100%;
  height: 200px;
  border: 1px #000000;
  padding-left: 20px;
  padding-right: 20px;
  font-family: Arial, Helvetica, sans-serif;
  border-top: solid 3px var(--primary);

  > header {
    height: 50px;
    text-align: left;

    > strong {
      font-size: 28px;
    }
  }
`;

export const Available = styled.div`
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  border-top: solid 3px var(--primary);
  padding-left: 20px;
  padding-right: 20px;

  > header {
    height: 50px;
    text-align: left;

    > strong {
      font-size: 28px;
    }
  }
  > section {
    height: 60px;
    display: flex;

    div {
      width: 220px;
      height: 45px;
      background-color: var(--primary);
      text-align: center;
      border-radius: 5px;
      padding-top: 10px;
      font-size: 18px;
      font-weight: bold;
      color: var(--light);
      margin-left: 10px;

      :hover {
        cursor: pointer;
        background-color: var(--secondary);
        transition: 0.5s;
      }
    }
  }
`;

export const FinishSale = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 20px;

  font-family: Arial, Helvetica, sans-serif;
`;

export const Buy = styled.div`
  height: 40px;
  text-align: center;
  background-color: var(--buy);
  border-radius: 15px;
  margin-right: 3px;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
    background-color: #42eb2f;
    transition: 0.2s;
  }
`;

export const GiveUp = styled.div`
  height: 40px;
  text-align: center;
  background-color: #d90425cc;
  border-radius: 15px;
  margin-left: 3px;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
    background-color: #85051d;
    transition: 0.2s;
  }
`;
