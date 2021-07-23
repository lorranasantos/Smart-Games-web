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
  GoogleMapContainer,
  Header,
  ImageAndBuy,
  Logo,
  MapContainer,
  StoreMap,
} from "./styles";
import QRcode from "qrcode.react";
import api from "../../services/api";
import logoImg from "../../assets/pacman.png";
import GoogleMapReact from "google-map-react";

function Home() {
  const [games, setGames] = useState([]);
  const [gameId, setGameId] = useState([]);
  const [showGameInfo, setShowGameInfo] = useState(false);

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
                <h1>R${gameId.price.toFixed(2)}</h1>
                <button>COMPRAR</button>
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
                  <GoogleMapContainer>
                    <h1>{store.place}</h1>
                    <StoreMap>
                      <GoogleMapReact
                        bootstrapURLKeys={{
                          key: "AIzaSyB-JCO3AlnrTLJXtk3_NKQ2r_EU6-6uHxk",
                        }}
                        defaultCenter={{
                          lat: store.latitude,
                          lng: store.longitude,
                        }}
                        defaultZoom={15}
                      ></GoogleMapReact>
                    </StoreMap>
                  </GoogleMapContainer>
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
                <h1>R${game.price.toFixed(2)}</h1>
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
