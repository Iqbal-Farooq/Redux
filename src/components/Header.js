import classes from './Header.module.css';
import { useSelector } from 'react-redux';
import { AuthActions } from '../Store/Redux';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch=useDispatch();
  const isAuth=useSelector(state=>state.auth.isAuthnticated)

  const LogOutHandler=(e)=>{
    e.preventDefault();
    dispatch(AuthActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && 
      <nav>
        <ul>
          <li>
           <a href='/'>My Products</a>
          </li>
         <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={LogOutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
