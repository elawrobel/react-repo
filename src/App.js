import './App.css';

const News = () => <p>Hello !</p>;

// function News() {
//   return(
//     <p>Hello!</p>
//   );
// }

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
