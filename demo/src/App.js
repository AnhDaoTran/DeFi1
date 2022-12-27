
import './App.css';
import { Hero } from './component/Hero';
import Navbar from './component/Navbar';
import About from './component/About';
import Developer from './component/Developer';
import Subcribe from './component/Subcribe';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <About/>
      <Developer/>
      <Subcribe/>
      <Footer/>
    </div>
  );
}

export default App;
