import {} from "./style";
import { Container } from "./style";

import imgReload from "../../assets/reload.png"

function Loading() {
  return(
    <Container>
      <img src={imgReload} alt="loading"/>
      Carregando ...
    </Container>
  );
}

export default Loading;