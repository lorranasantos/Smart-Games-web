import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  z-index: 9;

  background-color: #42424250;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

export const ModalContainer = styled.section`
  width: 1050px;
  height: 600px;
  //max-height: calc(100vh - 20px);
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: var(--wallpaper);

  z-index: 19;

  overflow-x: hidden;
  overflow-y: auto;

  //background-color: var(--dark);
  box-shadow: 0px 0px 10px black;
  border-radius: 4px;

  position: relative;

  > span {
    position: absolute;
    top: 15px;
    right: 20px;

    font-size: 30px;

    cursor: pointer;
    transition: 2s;

    :hover {
      color: var(--primary);
    }
  }
  > header {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin: 0px 20px;
  }
`;

export const GameInformation = styled.div`
  min-width: 300px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
