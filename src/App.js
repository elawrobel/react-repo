import './App.css';

// const News = () => <p>Hello !</p>;

function News( { header, intro } ) { // function News( props ) {

  // const { header, intro } = props;

  return(
    <div>
      <h2>{ header }</h2>
      <p>{ intro }</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <News header="Nagłówek 1" intro="Intro 1" />
      <News header="Nagłówek 2" intro="Intro 2" />
      <News header="Nagłówek 3" intro="Intro 3" />
    </div>
  );
}

export default App;
