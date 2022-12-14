import Paciente from "./components/paciente/Index";
import Dashboard_em from "./components/empresa/dashboard/Dashboard";
import Dashboard from "./components/paciente/dashboard/Dashboard";
import Dashboard_admin from "../src/components/administrador/Dashboard";
import Empresa from "./components/empresa/Index";
import Login from "./Login";
import "./App.css";
import Error from "./Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SolicitarRegistro from "./components/paciente/SolicitarRegistro";
import Context from "./context/Context";
function App() {
  return (
    <>
      <BrowserRouter>
      <Context>
        <Routes>
          <Route path="/" element={<Paciente />}></Route>
          <Route path="/paciente/dashboard" element={<Dashboard />}></Route>
          <Route path="/empresa" element={<Empresa />}></Route>
          <Route path="/empresa/dashboard" element={<Dashboard_em />}></Route>
            <Route path="/login" element={<Login />}></Route>
          
          <Route
            path="/administrador/dashboard"
            element={<Dashboard_admin />}
          ></Route>
          <Route
            path="/paciente/SolicitarRegistro"
            element={<SolicitarRegistro />}
          ></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        </Context>
      </BrowserRouter>
    </>
  );
}

export default App;
