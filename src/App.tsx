
import './App.css'
import { AuthProvider } from './context/AuthProvider'
import AppRoutes from './Routes/routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {


  return (
    <>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
   <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
