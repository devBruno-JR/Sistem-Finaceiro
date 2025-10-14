import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login';
import Registrer from '../Pages/Registrer';
import ProtectedRoute from './Privada';
import Dashboard from '../Pages/Dashboard';


export default function AppRoutes() {
 return (
<BrowserRouter>
<Routes>

 <Route path="/" element={<Login />} />
 <Route path="/register" element={<Registrer />} />
    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

</Routes>
</BrowserRouter>
 );
}