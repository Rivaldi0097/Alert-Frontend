import { useState } from 'react';
import "../styles/createAlert.css";
import Cross from "../assets/cross.svg";

function Keywords(props) {

    const [keywords, setKeywords] = useState('');


    const addWords = () => {
        props.setAddedKeywords(current => [...current, keywords])
        setKeywords("")
    }

    const removeWords = (word) => {
        const newList = props.addedKeywords.filter((item) => item !== word)

        props.setAddedKeywords(newList)
    }

    return (
        <div className='AlertContainer'>

            <div className='AlertTextField'>
                <input  
                    type='text'
                    className='TextField'
                    placeholder='Add Keywords'
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                />
                <button
                    className='AddKeyLocButton'
                    onClick={addWords}
                >
                    Add
                </button>
            </div>

            <div className='AddedKeyWordsContainer'>
                {props.addedKeywords.map((word, i) => {
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

export default Keywords;