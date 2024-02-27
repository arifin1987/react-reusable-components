import Container from "./components/ui/Container";

function App() {
  return (
    <Container>
      <h1>hello world</h1>
      <h2>hello world</h2>
      <h3>hello world</h3>
      <div className="h-screen w-full flex justify-center items-center">
        <button className="btn btn-primary">This is a button</button>
        <button className="btn btn-danger">This is a button</button>
      </div>
    </Container>
  );
}

export default App;
