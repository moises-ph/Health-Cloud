import Login from './Login';
import TheIndex from './TheIndex'
import Register from './Register';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TheIndex/>} ></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/registro' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;