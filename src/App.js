// import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import TodosPage from "./pages/TodosPage/TodosPage";
import Container from "./components/Container/Container";

function App() {
  return (
      <>
          <Container>
              <MainPage/>
          </Container>
          <Container>
              <AboutPage/>
          </Container>
          <Container>
              <TodosPage/>
          </Container>
      </>
  );
}

export default App;
