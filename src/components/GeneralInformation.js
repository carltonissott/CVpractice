import React from 'react';
import '../styles.css'

const GeneralInformation = (props)=>{
    const{basic} =props;

    return (
        <div>
            <h3>My Resume</h3>
            <ul>
                <li id="name">
                    {basic.name}
                </li>
                <li>
                    {basic.email}
                </li>
                <li id="phone">
                    {basic.phone}
                </li>
            </ul>
        </div>
    )
}
export default GeneralInformation
