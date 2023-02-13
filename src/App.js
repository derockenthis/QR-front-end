import logo from './logo.svg';
import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Qrsection from './components/Qrsection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Qrsection/>}/>
        <Route path=':userId' element={<Qrsection/>} />
        <Route path='*' element={<Qrsection/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
