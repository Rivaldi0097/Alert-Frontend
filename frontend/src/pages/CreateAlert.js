import { useState } from 'react';
import axios from "axios";
import Keywords from '../components/Keywords';
import Location from '../components/Location';
import Attributes from '../components/Attributes';
import "../styles/createAlert.css";

function CreateAlert(props) {

    const [keywordsChecked, setKeywordsChecked] = useState(false);
    const [locationChecked, setLocationChecked] = useState(false);
    const [attributesChecked, setAttributesChecked] = useState(false);
    const [name, setName] = useState('');
    const [disbale, setDisable] = useState(false);
    const [result, setResult] = useState('none');

    //to store data added by user
    const [addedKeywords, setAddedKeywords] = useState([]);
    const [addedLocation, setAddedLocation] = useState([]);
    const [addedAttributes, setAddedAttributes] = useState([]);

    const submit = async () => {

        setDisable(true)
        setResult('none')

        try {
            
            const res = await axios.post(`${process.env.REACT_APP_HOSTNAME}/api/alert/`, {
                name: name,
                keywords: addedKeywords,
                locations: addedLocation,
                attributes: addedAttributes
            })

            setDisable(false)
            setResult('success')

        } catch (error) {

            console.log(error)
            setDisable(false)
            setResult('failed')

        }
    }

    return (
        <div className='CreateContainer'>

            <div className='CreateInner'>
                <div>
                    <h2>Create Alerts</h2>
                </div>

                <div className='AlertNameContainer'>
                    <label>Alert Name:</label>
                    <input
                        type='text'
                        className='TextField'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label>Types of alerts (Choose one or more):</label>
                </div>
                

                <div className='CheckboxContainer'>

                    <div>
                        <label>
                            <input 
                                type='checkbox'
                                checked={keywordsChecked}
                                onChange={() => (setKeywordsChecked(!keywordsChecked))}
                            />
                            Keywords
                        </label>
                    </div>

                    <div>
                        <label>
                            <input 
                                type='checkbox'
                                checked={locationChecked}
                                onChange={() => (setLocationChecked(!locationChecked))}
                            />
                            Location
                        </label>
                    </div>

                    <div>
                        <label>
                            <input 
                                type='checkbox'
                                checked={attributesChecked}
                                onChange={() => (setAttributesChecked(!attributesChecked))}
                            />
                            Attributes
                        </label>
                    </div>

                </div>

                {keywordsChecked?
                        <Keywords
                            addedKeywords={addedKeywords}
                            setAddedKeywords={setAddedKeywords}
                        />
                    :
                        <></>
                }

                {locationChecked?
                        <Location
                            addedLocation={addedLocation}
                            setAddedLocation={setAddedLocation}
                        />
                    :
                        <></>
                }

                {attributesChecked?
                        <Attributes
                            addedAttributes={addedAttributes}
                            setAddedAttributes={setAddedAttributes}
                        />
                    :
                        <></>
                }

                <button
                    className='SubmitButton'
                    onClick={submit}
                    disabled={disbale}
                >
                    Submit
                </button>
                
                <br/>
                <br/>

                <p>I stopped the backend from running. Do contact me if you need me to run it again.</p>

                {result === 'success'?
                    <p className='SuccessMessage'>Alert has been successfully created</p>
                :
                    result === 'failed'?
                        <p className='FailedMessage'>Unsuccessful, please check any missing parameters and try again.</p>
                    :
                        <></>
                }
            </div>
        </div>
    );
}

export default CreateAlert;