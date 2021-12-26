import CardInf from './components/CardInf';
import FooterPg from './components/FooterPg';
import HeaderPg from './components/HeaderPg';
import HomePg from './components/HomePg';
import Rotas from './routes';


function App() {
  return (
    <div className="app">
      <HeaderPg />
      <Rotas />
      <FooterPg />
    </div>
  );
}

export default App;
