import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login';
import Registrer from '../Pages/Registrer';


export default function AppRoutes() {
 return (
<BrowserRouter>
<Routes>

 <Route path="/" element={<Login />} />
 <Route path="/register" element={<Registrer />} />

</Routes>
</BrowserRouter>
 );
}