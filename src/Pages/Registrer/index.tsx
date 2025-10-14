
import styles from './Registrer.module.css'
import logo from '../../assets/91779e8a-46ba-4ff0-937d-d8fe1204a08d (1).svg'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; 
import { toast } from 'react-toastify';

export default function Registrer() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const {registre} = useContext(AuthContext);

async function handleRegistre(e:React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  if(nome != '' && email != '' && senha !='' && confirmaSenha !=''){
    if(senha === confirmaSenha){
     await registre(nome, email, senha, );
     toast.success('Usuario cadastrado com sucesso');
    }else{
      console.log('as senhas nao conferem');
    }
}
  else{
    console.log('preencha todos os campos corretamente');

}
}

  return (
    <div className={styles.page} >

      <div className={styles.card}>
       
         <div className={styles.titulo}>
          <img src={logo} alt="logtipo" />
          <h1>Financium</h1>
        </div>
                <h1 className={styles.subTitulo}>Crie sua Conta</h1>

      <form className={styles.form} onSubmit={handleRegistre}>
                    <label htmlFor="">Nome completo</label>
                    <input type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    />

                    <label htmlFor="">Email</label>
                    <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="">Senha</label>
                    <input type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    />

                    <label htmlFor=""> Confimar Senha</label>
                    <input type="password"
                    value={confirmaSenha}
                    onChange={(e) => setConfirmaSenha(e.target.value)}
                    />

                    <button className={styles.btn} type='submit' >
                        Cadastrar
                    </button>
                    <p className={styles.link}>Já tenho uma conta? <Link to={'/'}>Entrar</Link> </p>
                </form>

      </div>

      <div className={styles.imageFundo}>
      </div>


    </div>
  );
}