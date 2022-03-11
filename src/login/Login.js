import { useState } from 'react';
import './style.css';

import { createClient } from '@supabase/supabase-js';

import {supabase} from '../App';

export default function Login() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const { error } = await supabase.auth.signIn({ email });
            if (error) throw error;
            alert('Check your email for the login link!');
        } catch (error) {
            alert(error.error_description || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='mainWrapper'>
            <div className='loginWrapper'>
                <h1 className='header'>Login</h1>
               
                {loading ? (
                    'Sending magic link...'
                ) : (
                    <form onSubmit={handleLogin} className="loginForm">
                        <label htmlFor='email' >Email</label>
                        <input
                            id='email'
                            className='inputField'
                            type='email'
                            placeholder='Your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className='button block' aria-live='polite'>
                            Login
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
