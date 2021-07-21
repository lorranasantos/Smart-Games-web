import { useState } from "react";
import Modal from "../../components/Modal";
import { GameInfo, GameInformation } from "../../components/Modal/styles";
import { Available, CardProducts, Container, Content, Footer, GameCard, GameDescription, GameImage, Header, ImageAndBuy, Logo, Session } from "./styles";
import QRcode from "qrcode.react";
import Loading from "../../components/Loading";


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
                title="Nome do Produto"
                handleClose={() => setShowGameInfo(false)}>
                    <GameInformation>
                        <ImageAndBuy>
                            <img src="../assets/Overwatch_logo.jpg" alt="overwatch"></img>
                            <section>
                                <div></div>
                                <h1>R$68,00</h1>
                                <button>COMPRAR</button>
                            </section>
                            <footer>
                                <div>QRcode</div>
                            </footer>
                        </ImageAndBuy>
                        <GameDescription>
                            <header>
                                <strong>Descrição</strong>
                            </header>
                            <section>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                                </p>
                            </section>
                        </GameDescription>
                        <Available>
                            <header>
                                <strong>Lojas</strong>
                            </header>
                            <section>
                                <div>
                                    Loja Tamboré
                                </div>
                            </section>
                        </Available>
                    </GameInformation>
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