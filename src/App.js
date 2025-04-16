import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/HomePage/Homepage";
import './index.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;