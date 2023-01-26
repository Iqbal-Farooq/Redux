import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../Store/Redux';

const Auth = () => {
 const dispatch= useDispatch();
  const LoginHandler=(e)=>{
    e.preventDefault();
    console.log("HELLO")
    dispatch(AuthActions.login())
    console.log( dispatch(AuthActions.login()))


  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={LoginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
