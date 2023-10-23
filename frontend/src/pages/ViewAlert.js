import { useEffect, useState } from 'react';
import "../styles/viewAlert.css";
import DropdownList from '../components/DropdownList';
import axios from 'axios';

function ViewAlert(props) {

    const [alertList, setAlertList] = useState([]);

    useEffect(() => {

        const getAlerts = async () => {
            try {
                
                const res = await axios.get(`${process.env.REACT_APP_HOSTNAME}/api/alert/`);
                setAlertList(res.data)

            } catch (error) {
                console.log(error)
            }
        }

        getAlerts()
        
    }, [])

    return (
        <div className='ViewContainer'>

            {alertList.length === 0?
                    <h1>There is no active alerts</h1>
                :
                    <>
                        <div>
                            <h2>View Alert</h2>
                        </div>

                        {alertList.map((alert, i) => {
                            return(
                                <DropdownList
                                    key = {i}
                                    alert={alert}
                                />
                            )
                        })}
                    </>
            }
        </div>
    );
}

export default ViewAlert;