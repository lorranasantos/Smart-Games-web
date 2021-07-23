import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  width: calc(100% - 20px);
  height: 100%;
  z-index: 9;

  background-color: var(--wallpaper);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.section`
  min-width: 350px;
  min-height: 200px;
  max-height: calc(100vh - 20px);
  padding: 20px;

  z-index: 19;

  overflow-y: auto;

  background-color: var(--dark);
  box-shadow: 0px 0px 10px black;
  border-radius: 4px;

  position: relative;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;

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

export const ConfirmarCompra = styled.div`
  min-width: 300px;
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  

  > div {
    display: flex;
    flex-wrap: wrap;
  }
`;
