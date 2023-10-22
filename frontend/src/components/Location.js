import { useState } from 'react';
import "../styles/createAlert.css";
import Cross from "../assets/cross.svg";

function Location(props) {

    const [location, setLocation] = useState('');

    const addWords = () => {
        props.setAddedLocation(current => [...current, location])
        setLocation("")
    }

    const removeWords = (word) => {
        const newList = props.addedLocation.filter((item) => item !== word)

        props.setAddedLocation(newList)
    }

    return (
        <div className='AlertContainer'>

            <div className='AlertTextField'>
                <input  
                    type='text'
                    className='TextField'
                    placeholder='Add Location'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button
                    className='AddKeyLocButton'
                    onClick={addWords}
                >
                    Add
                </button>
            </div>

            <div className='AddedKeyWordsContainer'>
                {props.addedLocation.map((word, i) => {
                    return(
                        <ul key={i}>
                            <li className='liBox'>
                                {word} 
                                <img 
                                    src={Cross} 
                                    alt="cross" 
                                    className='Cross'
                                    onClick={() => removeWords(word)}
                                />
                            </li>
                        </ul>
                    )
                })}
            </div>

        </div>
    );
}

export default Location;