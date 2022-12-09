import { useDispatch, useSelector } from 'react-redux';
import {LOGIN, PASSWORD} from '../../constants/constants';
import { Link, withRouter } from 'react-router-dom';
import { login, password } from '../../redux/actions/actions';

import './styles.css';


const LoginPage = () => {
    const state = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handlerLogin = (event) => {
        dispatch(login(LOGIN, event.target.value))
        console.log(login)
    }

    const handlerPassword = (event) => {
        dispatch(password(PASSWORD,  event.target.value))
        console.log(password)
    }

    return (
        <form className="form">
            <input 
                className="form__input"
                onChange={handlerLogin}/>
            <input 
                className="form__input"
                onChange={handlerPassword}/>

            <Link 
                className={`form__link 
                        ${ state.login === 'developer' && 
                        state.password === '123456' ? '' : 'form__link--disabled '}`}
                to='/profile'>
                Войти
            </Link>
        </form>
    )
}

export default withRouter(LoginPage);