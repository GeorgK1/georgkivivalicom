import Card from '../components/card/Card';
import React, { useEffect, useState } from 'react';
import {supabase} from '../App';

function Projects() {
    const [projectData, setProjectData] = useState([]);

    async function fetchProjects() {
        let { data: Projects, error } = await supabase
            .from('Projects')
            .select('*');

        setProjectData(Projects);
    }

    useEffect(() => {
        (async () => {
            await fetchProjects();
        })();
       
    }, []);

    return (
        <div>
            {projectData.map((project) => (
                <Card
                    key={project.id}
                    header={project.project.title}
                    description={project.project.description}
                    tech_stack={project.project.tech_stack}
                    field={project.project.field}
                    links={project.project.links}
                />
            ))}
        </div>
    );
}

export default Projects;
