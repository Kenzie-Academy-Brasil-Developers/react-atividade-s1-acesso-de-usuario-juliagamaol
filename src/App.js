import './App.css';
import MeuComponente from './components/Componente';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MeuComponente sayHello={true} nome="Julia"></MeuComponente>
      </header>
    </div>
  );
}

export default App;
