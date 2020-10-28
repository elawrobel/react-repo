import './App.css';

// const News = () => <p>Hello !</p>;

function News( { h2, p } ) { // function News( props ) {

  // const { h2, p } = props;

  return(
    <div>
      <h2>{ h2 }</h2>
      <p>{ p }</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <News h2="Nagłówek 1" p="Intro 1" />
      <News h2="Nagłówek 2" p="Intro 2" />
      <News h2="Nagłówek 3" p="Intro 3" />
    </div>
  );
}

export default App;
