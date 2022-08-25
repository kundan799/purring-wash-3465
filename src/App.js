import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Allroutes from './Allroutes/Allroutes';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Allroutes/>
      <Footer/>
    
    </div>
  );
}

export default App;
