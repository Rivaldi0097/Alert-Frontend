import { useState } from 'react';
import "../styles/createAlert.css";
import Cross from "../assets/cross.svg";

function Attributes(props) {

    const [name, setName] = useState('');
    const [value, setValue] = useState('');

    const add = () => {

        props.setAddedAttributes(current => [...current, {name: name,  value: value}])

        setName("")
        setValue("")
    }

    const removeAttribute = (key) => {

        //remove the deleted attribute
        const filteredList = props.addedAttributes.filter((attribute) => {
            return attribute.name != key
        });

        //set the filtered list 
        props.setAddedAttributes(filteredList)
        
    }
    
    return (
        <div className='AttributeContainer'>
            <div className='AttributeFields'>
                <div>
                    <input
                        type='text'
                        placeholder='Attribute name'
                        className='TextField'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                :
                <div>
                    <input
                        type='text'
                        placeholder='Value'
                        className='TextField'
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>

                <div className='AddButtonContainer'>
                    <button
                        className='AddButton'
                        onClick={add}
                    >
                        Add
                    </button>
                </div>
            </div>

            <div>
                {props.addedAttributes.map((attribute, i) => {
                    return(
                        <ul key={i} className='AddedAttributeUl'>
                            <li className='AttributeBox'>
                                {`${attribute.name} : ${attribute.value}`}
                                <img 
                                    src={Cross} 
                                    alt="cross" 
                                    className='Cross'
                                    onClick={() => removeAttribute(attribute.name)}
                                />
                            </li>
                        </ul>
                    )
                })}
            </div>
        </div>
    );
}

export default Attributes;