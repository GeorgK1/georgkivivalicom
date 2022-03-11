import './style.css';
import {supabase} from '../App';

function Account(props) {
    return (
        <>
            <p>{props.user.user.email}</p>
            <button
                type='button'
                className='button block'
                onClick={() => supabase.auth.signOut()}>
                Sign Out
            </button>
        </>
    );
}

export default Account;
