import {Layout} from './components/Layout';
import {Route, Routes} from 'react-router-dom';

import Homepage from "./pages/HomePage/Homepage";
import ServiceCenter from "./pages/ServiceCenter/ServiceCenter";
import TradeIn from './pages/TradeIn/TradeIn';

import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Homepage />} />
        <Route path='ServiceCenter' element={<ServiceCenter />} />
        <Route path='TradeIn' element={<TradeIn />} />
      </Route>
    </Routes>
  );
}

export default App;