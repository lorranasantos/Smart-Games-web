import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: var(--wallpaper);

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
    background-color: var(--card);
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
        text-align: center;
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
export const ImageAndBuy = styled.div`
    width: 100%;
    height: 250px;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 30% 50% 20%;
    font-family: Arial, Helvetica, sans-serif;

    >img{
        width: 290px;
        height: 250px;
        background-color: aquamarine;
        
    }
    >section{
        height: 200px;
        text-align: center;
        
        /* >strong{
            font-size: 28px;
            margin-top: 20px;
        } */
        >div{
            height: 50px;
            background-color: palevioletred;
        }
        >h1{
            font-size: 22px;
            color: var(--darkGreen);
            margin-top: 20px;
            margin-bottom: 20px;
            font-weight: bold;
        }
        >button{
            width: 200px;
            height: 50px;

        }  
    }
    >footer{
        height: 200px;
        margin-top: 20px;
        display: flex;

        div{
            width: 150px;
            height: 150px;
            background-color: coral;
            align-self: center;
        }
    }

`;


export const GameDescription = styled.div`
    width: 100%;
    height: 300px;
    border: 1px #000000;
    padding-left: 20px;
    padding-right: 20px;
    font-family: Arial, Helvetica, sans-serif;
    border-top: solid 3px var(--primary);

    >header{
        height: 50px;
        text-align: left;
        
        >strong{
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

    >header{
        height: 50px;
        text-align: left;
        
        
        >strong{
            font-size: 28px;
        }
    }
    >section{
        height: 60px;
        display: flex;

        div{
            width: 220px;
            height: 45px;
            background-color: var(--primary);
            text-align: center;
            border-radius: 5px;
            padding-top: 10px;
            font-size: 18px;
            font-weight: bold;
            color: var(--light);

            :hover{
                cursor: pointer;
                background-color: var(--secondary);
                transition: 0.5s;
            }

        }
    }
`;
