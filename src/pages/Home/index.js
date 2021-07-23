import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import { GameInformation } from "../../components/Modal/styles";
import {
  Available,
  Buy,
  CardProducts,
  Container,
  Content,
  FinishSale,
  GameCard,
  GameDescription,
  GiveUp,
  Header,
  ImageAndBuy,
  Logo,
} from "./styles";
import QRcode from "qrcode.react";
import ModalCompra from "../../components/ModalCompra";
import api from "../../services/api";
import logoImg from "../../assets/pacman.png";

function Home() {
  const [games, setGames] = useState([]);
  const [gameId, setGameId] = useState([]);
  const [showGameInfo, setShowGameInfo] = useState(false);
  const [showConfirmAquisition, setShowConfirmAquisition] = useState();

  const loadGames = async () => {
    const response = await api.get("/game");
    setGames(response.data);
  };

  useEffect(() => {
    loadGames();
  }, []);

  const handleOpenmodal = async (e) => {
    setShowGameInfo(true);
    setGameId(e);
  };
  return (
    <>
      {showConfirmAquisition && (
        <ModalCompra
          title="Deseja finalizar compra?"
          handleClose={() => setShowConfirmAquisition(false)}
        >
          <FinishSale>
            <Buy onClick={() => setShowConfirmAquisition(false)}>
              <h2>Sim</h2>
            </Buy>
            <GiveUp onClick={() => setShowConfirmAquisition(false)}>
              <h2>Não</h2>
            </GiveUp>
          </FinishSale>
        </ModalCompra>
      )}
      {showGameInfo && (
        <Modal title="Detalhes" handleClose={() => setShowGameInfo(false)}>
          <GameInformation>
            <ImageAndBuy>
              <img src={gameId.image} alt="banner"></img>
              <section>
                <h2>{gameId.name}</h2>
                <div>
                  {gameId.Plataforms.map((plataform) => (
                    <div>{plataform.name}</div>
                  ))}
                </div>
                <h1>R${gameId.price}</h1>
                <button onClick={() => setShowConfirmAquisition(true)}>
                  COMPRAR
                </button>
              </section>
              <footer>
                <div>
                  <QRcode value={`${gameId.id}`} size={100} />
                </div>
              </footer>
            </ImageAndBuy>
            <GameDescription>
              <header>
                <strong>Descrição</strong>
              </header>
              <section>
                <p>{gameId.description}</p>
              </section>
            </GameDescription>

            <Available>
              <header>
                <strong>Lojas</strong>
              </header>
              <section>
                {gameId.Stores.map((store) => (
                  <div>{store.place}</div>
                ))}
              </section>
            </Available>
          </GameInformation>
        </Modal>
      )}
      <Container>
        <Header>
          <Logo>
            <img src={logoImg} alt="imagem Logo" />
            <h1>SMART GAME</h1>
          </Logo>
        </Header>
        <Content>
          {games.map((game) => (
            <GameCard onClick={() => handleOpenmodal(game)}>
              <header>
                <img src={game.image} alt="banner"></img>
              </header>
              <section>
                <strong>{game.name}</strong>
                <h1>R${game.price}</h1>
              </section>
              <footer>
                <button>COMPRAR</button>
              </footer>
            </GameCard>
          ))}
        </Content>
      </Container>
    </>
  );
}
export default Home;
