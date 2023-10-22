import { useState } from 'react';
import DownArrow from "../assets/downArrow.svg";
import "../styles/viewAlert.css";

function DropdownList(props) {

    const alert = props.alert;
    const [show, setShow] = useState(false);

    return (
        <div className='ViewAlertItem'>
            <div className='AlertBox'>
                <div className='AlertName'>
                    <h2>{alert.name}</h2>
                </div>

                <div>
                    <img 
                        src={DownArrow} 
                        alt='downArrow' 
                        className={show? 'DropdownIconShow' : 'DropdownIconHide'}
                        onClick={() => {setShow(!show)}}
                    />
                </div>
            </div>

            {show?
                <div className='AlertContent'>
                    <div>
                        <label>Keywords: </label>
                        [ {alert.keywords.join()} ]
                    </div>

                    <div>
                        <label>Locations: </label>
                        [ {alert.locations.join()} ]
                    </div>

                    <div>
                        <label>Attributes: </label>
                        {alert.attributes.map((attribute, i) => {
                            return(
                                <div>
                                    [ {attribute.name} : {attribute.value} ]
                                </div>
                            )
                        })}
                    </div>
                </div>
            :
                <></>
            }

        </div>
    );
}

export default DropdownList;