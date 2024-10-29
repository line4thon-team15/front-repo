import { BrowserRouter } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Routes from "./router/Routes";

function App() {
  return (
    <BrowserRouter>
        <Wrapper>
          <Routes />
        </Wrapper>
    </BrowserRouter>
  );
}

export default App;
