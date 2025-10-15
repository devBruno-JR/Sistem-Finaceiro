import styles from './Login.module.css';
import img from '../../assets/9aea9c37c463ff24a735693eb67415fadabf2a65ad3ab6e65f1abaf52f654b0a.png';
import logo from '../../assets/91779e8a-46ba-4ff0-937d-d8fe1204a08d (1).svg'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';



export default function Login() {
    const {login} = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

async function handleLogin(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if(email != '' && senha !=''){
        await login(email, senha)
        navigate('/dashboard')

    }
    else{
        toast.warning('preencha todos os campos corretamente');
    }
}


    return (
        <div className={styles.container}>

            <div className={styles.card}>
                <div className={styles.titulo}>
                    <img src={logo} alt="logtipo" />
                    <h1>Financium</h1>
                </div>
                <h1 className={styles.subTitulo}>Bem-vindo(a) de volta</h1>

                <form className={styles.form} onSubmit={handleLogin}  >
                    <label htmlFor="">Email</label>
                    <input type="email" 
                    value={email}
                    onChange={((e) => setEmail(e.target.value))}
                    />

                    <label htmlFor="">Senha</label>
                    <input type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    />

                    <button className={styles['btn-entar']} type='submit' >
                        Entrar
                    </button>
                </form>
        <Link to='/register' className={styles.btn}>Criar conta</Link>


            </div>




            <img src={img} alt="Login illustration" className={styles.image} />

        </div>
    );
}
