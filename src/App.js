
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Regis } from './Halaman/Regis';
import { Public } from './Routes/Public';
import { Private } from './Routes/Private';
import { Navbarnya } from './Komponen/Navbarnya';

function App() {
  return (
    <div className="App">
      <Navbarnya/>
      <Private/>
      <Public/>
    </div>
  );
}

export default App;
