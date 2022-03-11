import React, { useEffect, useState } from 'react';
import "./style.css";

import {supabase} from '../App';

function About() {
    const [aboutData, setAboutData] = useState([]);

    async function fetchAboutMe() {
        let { data: About, error } = await supabase
        .from('About')
        .select('about_me')
      
        setAboutData(About[0].about_me);
    }

    useEffect(() => {
        (async () => {
            await fetchAboutMe();
        })();
    }, []);

    return (
        <div className='textWrapper'>
            <p>{aboutData}</p>
        </div>
    );
}

export default About;
