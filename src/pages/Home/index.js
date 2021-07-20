import { useState } from "react";
import Modal from "../../components/Modal";
import { GameInfo } from "../../components/Modal/styles";
import { CardProducts, Container, Content, Footer, GameCard, GameDescription, GameImage, Header, Logo, Session } from "./styles";
import QRcode from "qrcode.react";
import Loading from "../../components/Loading";

function GameInformation({handleReload, setIsLoading}){
    return (
        <>
            <GameInfo>
                <GameImage>
                    <img src="../assets/Overwatch_logo.jpg" alt=""/>
                </GameImage>
                <GameDescription>

                </GameDescription>
            </GameInfo>
        </>
    )
}

function Home(){

    const [reload, setReload] = useState(null);

    const [showGameInfo, setShowGameInfo] = useState();

    const [isLoading, setIsLoading] = useState(false);

    const handleReload = () => {
        setShowGameInfo(false);
        setReload(Math.random());
      };
    

    return(
        <>
            {isLoading && <Loading />}
            {showGameInfo && (
                <Modal
                title="Mais Informações"
                handleClose={() => setShowGameInfo(false)}
                >
                </Modal>
            )}
            <Container>
                <Header>
                    <Logo/>
                </Header>
                <Content>
                    <CardProducts>
                        <GameCard onClick={() => setShowGameInfo(true)}>
                            <header>
                                <img src="../assets/Overwatch_logo.jpg" alt="overwatch"></img>
                            </header>
                            <section>
                                <strong>Nome do Produto</strong>
                                <h1>R$198,00</h1>
                            </section>
                            <footer>
                                <button>COMPRAR</button>
                            </footer>
                        </GameCard>
                    </CardProducts>
                </Content>
                {/* <Footer>
                    <Logo/>
                </Footer>  */}
            </Container>
        </>
    );
}
export default Home;