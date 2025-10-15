import { useContext  } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from './Header.module.css';
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/91779e8a-46ba-4ff0-937d-d8fe1204a08d (1).svg'


export default function Header() {
    const { logout} = useContext(AuthContext);
    const navigate = useNavigate();


    async function sair(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        await logout();
         navigate('/')
    }


 return (
   <header className={styles.header}>
    <img src={logo} className={styles.imagem} alt="" />
<nav className={styles.nav}>
    <ul>
        <li>
            <Link to="/dashboard">
                Dashboard
            </Link>
        </li>
        <li>
            <Link to="/dashboard">
               Adicionar Transação
            </Link>
        </li>
        <li>
            <Link to="/config">
                Configurações
            </Link>
        </li>
    </ul>
</nav>
    <div className={styles.user}>
        {/* <img src={avartar} alt="foto de perfil" /> */}
        {/* <span>{user?.user_metadata?.nome}</span> */}
        <button onClick={sair}>Sair</button>
    </div>

  </header>
    );
}