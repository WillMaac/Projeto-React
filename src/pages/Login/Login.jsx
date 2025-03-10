import { Title, Paragrafo } from "./Login.styles";
import { Container } from "../../styles/GlobalStyle";




function Login() {
  return (
    <Container>
      <Title isRed={true}>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor siy amet.</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}

export default Login;
