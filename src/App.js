import './App.css';
import HomePage from './homepage/HomePage';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useNavigate,
} from 'react-router-dom';
import Projects from './projects/Projects';
import About from './about/About';
import Login from './login/Login';
import { createClient } from '@supabase/supabase-js';

import Account from './account/Account';
import { useEffect, useState, createContext } from 'react';
const supabaseUrl = 'https://mcxznzbddjlfinbxovoz.supabase.co';
const supabaseAnonKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jeHpuemJkZGpsZmluYnhvdm96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDYyMjI3OTMsImV4cCI6MTk2MTc5ODc5M30.4sUuT7ETUCEbFcockw-Jyhh7MB_SDcXT3tek2YLRTPc';

function App() {
    const [session, setSession] = useState(null);

    useEffect(() => {
        setSession(supabase.auth.session());

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/projects' element={<Projects />}></Route>

                    <Route path='/' element={<HomePage />}></Route>

                    <Route path='/about' element={<About />}></Route>

                    <Route path='/profile' element={<Account user={session}/>}></Route>

                    <Route
                        path='/login'
                        element={
                            session ? (
                                <Navigate replace to='/profile' />
                            ) : (
                                <Login />
                            )
                        }></Route>
                </Routes>
            </Router>
        </div>
    );
}
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default App;
