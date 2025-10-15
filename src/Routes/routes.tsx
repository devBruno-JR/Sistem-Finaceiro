import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Registrer from '../Pages/Registrer';
import ProtectedRoute from './Privada';
import Dashboard from '../Pages/Dashboard';
import Config from '../Pages/Config';
import MainLayout from '../layouts/MainLayout'; // novo layout

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Rotas sem layout */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registrer />} />

        {/* Rotas com layout (protegidas) */}
        <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/config" element={<Config />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
