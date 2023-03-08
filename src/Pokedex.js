import Pokecard from "./Pokecard";
import { image } from './helpers';
import './Pokedex.css';

const Pokedex = props => {
    let winMessage = null;
    if (props.isWinner) {
        winMessage = <p className='Pokedex-winner'>THIS HAND WINS!</p>
    }

    return (
            <div className='Pokedex'>
                <div className='Pokedex-cards'>
                    {props.pokemon.map(c => (
                        <Pokecard key={c.id} id={c.id} name={c.name} type={c.type} exp={c.base_experience} image={image(c.id)} />
                    ))}
                </div>
                <h4>Total experience: { props.exp }</h4>
                {winMessage}
            </div>
    )
}

export default Pokedex;