import { useState } from 'react';
import "../styles/submitDoc.css";
import Attributes from '../components/Attributes';
import axios from 'axios';
import Alerts from '../components/Alerts';

function SubmitDoc(props) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [addedAttributes, setAddedAttributes] = useState([]);

    const [result, setResult] = useState('none');
    const [disable, setDisable] = useState(false);
    const [alerts, setAlerts] = useState([]);
    const [document, setDocument] = useState([]);

    const submit = async () => {

        setResult('none')
        setDisable(true)

        try {

            const res = await axios.post(`${process.env.REACT_APP_HOSTNAME}/api/document`, {
                title: title,
                content: content,
                details: addedAttributes
            })

            const data = res.data;

            if(data.alertTriggered){
                console.log(data.information.alerts)
                console.log(data.information.document[0])
                setAlerts(data.information.alerts)
                setDocument(data.information.document[0])
            }

            setResult('success')
            setDisable(false)

        } catch (error) {
            console.log(error)
            setResult('error')
            setDisable(false)
        }
    }

    return (
        <div className='SubmitDocContainer'>

            <div className='SubmitDocInner'>

                <div className='SubmitDocFields'>
                    <div>
                        <h3>Submit Document</h3>
                        <br/>
                        <input  
                            type='text'
                            placeholder='Title'
                            className='SubmitDocTextField'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div>
                        <br/>
                        <textarea
                            rows={4}
                            placeholder='Content'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>

                    <div className='SubmitDocAttributeContainer'>
                        <label>Details(Attributes):</label>
                        <br/>
                        <Attributes
                            addedAttributes={addedAttributes}
                            setAddedAttributes={setAddedAttributes}
                        />
                    </div>
                </div>
            </div>

            <div className='SubmitbuttonContainer'>
                <button
                    className='SubmitDocButton'
                    onClick={submit}
                    disabled={disable}
                >
                    Submit
                </button>
            </div>

            {result === 'success'?
                <Alerts
                    alerts={alerts}
                    document={document}
                />
            :
                <></>
            }

        </div>
    );
}

export default SubmitDoc;