// import logo from './logo.svg';
// import './App.css';

const Title = () => {
  return <h2>Super informative title</h2>
}

const Header = () => {
  return (
      <header>
        <Title/>
        <p>This is a header</p>
      </header>
  )
}

const Content = () => {
    return (
        <div>
            <Title/>
            <p>This is a content</p>
        </div>
    )
}

const Footer = () => {
    return (
        <footer>
            <Title/>
            <p>This is a footer</p>
        </footer>
    )
}

function App() {
  return (
      <>
          <Header/>
          <hr/>
          <hr/>
          <Content/>
          <hr/>
          <hr/>
          <Footer/>
      </>
  );
}

export default App;
