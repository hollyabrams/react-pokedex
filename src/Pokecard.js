import './Pokecard.css';

const Pokecard = ({ name, type, exp, image }) => {
    return (<div>
        <div className='Pokecard'>
            <div className='Pokecard-title'>{name}</div>
            <img className="Pokecard-image" src = { image } alt="" />
            <p className='Pokecard-data'>Type: {type}</p>
            <p className='Pokecard-data'>EXP: {exp}</p>
        </div>
    </div>)
}


export default Pokecard;