import './style.css';

function Card(props) {
    return (
        <div className='card'>
            <div className='card-header'>
                <h2>{props.header}</h2>
            </div>

            <div className='card-description'>
                <span>{props.description}</span>
            </div>

            <div className='card-tech-stack'>
                <p>{props.tech_stack}</p>
            </div>

            <div className='field'>
                <p>{props.field}</p>
            </div>

            <div className='card-links'>
                {props.links.map((link) => (
                    <>
                        <span className='link-name' >{link.name}</span>
                        <a href={link.link}>{link.link}</a>
                    </>
                ))}
            </div>
        </div>
    );
}
export default Card;
