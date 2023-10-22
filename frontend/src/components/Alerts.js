import React from 'react';
import "../styles/submitDoc.css";

function Alerts(props) {

    const alerts = props.alerts;
    const document = props.document;

    return (

        <div className='AlertsContainer'>

            <div className='DocumentContainer'>
                <div className='AlertDetails'>
                    <h4>Document Details:</h4>
                    <div>
                        <label>Document title: </label>
                        {document.title}
                    </div>

                    <div>
                        <label>Document Content: </label>
                        {document.content}
                    </div>

                    <div>
                        <label>Document details: </label>
                        {document.details.map((detail, idx) => {
                            return(
                                <div key={idx}>
                                    [ {detail.name} : {detail.value} ]
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {alerts.map((alert, i) => {
                const alertDetails = alert.alertDetails[0];

                return(
                    <div className='AlertsItem' key={i}>
                        <div className='AlertsInner'>
                            <div>
                                <h2>{alert.alertName}</h2>
                            </div>
                            
                            <h4>Document Checked and found:</h4>

                            <div>
                                <label>Found Keywords: </label>
                                [{alert.foundKeywords.join()}]
                            </div>
            
                            <div>
                                <label>Found Location: </label>
                                [{alert.foundLocation.join()}]
                            </div>
            
                            <div>
                                <label>Found Attributes: </label>
                                {alert.foundAttributes.map((attribute, idx) => {
                                    return(
                                        <div key={idx}>
                                            [ {attribute.name} : {attribute.value} ]
                                        </div>
                                    )
                                })}
                            </div>
            
                            <div className='AlertDetails'>
                                <h4>Alert Detail:</h4>
                                
                                <div>
                                    <label>Alert keywords: </label>
                                    [{alertDetails.keywords.join()}]
                                </div>
            
                                <div>
                                    <label>Alert Locations: </label>
                                    [{alertDetails.locations.join()}]
                                </div>
                                
                                <div>
                                    <label>Alert Attributes:</label>
                                    <br/>
                                    {alertDetails.attributes.map((attribute, i) => {
                                        return(
                                            <div key={i}>
                                                [ {attribute.name} : {attribute.value} ]
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

    </div>


    );
}

export default Alerts;