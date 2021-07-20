import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 9;

  background-color: #333c;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.section`
  min-width: 1000px;
  min-height: 600px;
  max-height: calc(100vh - 20px);
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;

  z-index: 19;

  overflow-y: auto;

  background-color: var(--dark);
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

export const GameInfo = styled.form`
  min-width: 300px;
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 10px;


`;


