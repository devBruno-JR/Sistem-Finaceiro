import { useContext  } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from './Header.module.css';
import { useNavigate } from "react-router-dom";


export default function Header() {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();


    async function sair(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        await logout();
         navigate('/')
    }


 return (
    <header className={styles.header}> 
    <div>
    <h2 className={styles.title}>Dashboard</h2>
    </div>


<button className={styles.button}
onClick={sair}
>
    Sair
</button>

    </header>
    );
}