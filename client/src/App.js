import Paciente from './components/paciente/Index'
import Empresa from './components/empresa/Index';
import Login from './Login';
import './App.css';
import Error from './Error'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Paciente/>} ></Route>
          <Route path='/empresa' element={<Empresa/>} ></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='*' element={<Error />} ></Route> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;