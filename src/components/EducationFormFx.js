import React, { useState } from 'react'
import '../styles.css'

const EducationForm = (props) => {

    const submitHandler = (e) => {
        e.preventDefault()
        props.educationFormData(userInfo)
        console.log(userInfo)
    }

    const updatedDegreeHandler = (e) => {
        setUserInfo({
            ...userInfo,
            degree: e.target.value,
        })
    }

    const updatedLocationHandler = (e) => {
        setUserInfo({
            ...userInfo,
            location: e.target.value
        })
    }

    const updatedGPAHandler = (e) => {
        setUserInfo({
            ...userInfo,
            GPA: e.target.value
        })
    }

    const updatedYearHandler = (e) => {
        setUserInfo({
            ...userInfo,
            year: e.target.value
        })
    }

    const [userInfo, setUserInfo] = useState({
        degree: "Business Administration: Finance",
        location: "Gainesville,Fl",
        GPA: "4.2",
        year: "2020",
    })


    return (
        <div className='eduForm'>
            <form onSubmit={submitHandler}>
                <label htmlFor="degreeInput">Degree:</label>
                <input
                    onChange={updatedDegreeHandler}
                    type="text"
                    id="degreeInput"
                    value={userInfo.degree}
                />
                <label htmlFor="locationInput">Location:</label>
                <input
                    onChange={updatedLocationHandler}
                    value={userInfo.location}
                    type="text"
                    id="locationInput"
                />
                <label htmlFor="GPAInput">GPA:</label>
                <input
                    onChange={updatedGPAHandler}
                    value={userInfo.GPA}
                    type="text"
                    id="GPAInput"
                />
                <label htmlFor="yearInput">Year:</label>
                <input
                    onChange={updatedYearHandler}
                    value={userInfo.year}
                    type="text"
                    id="yearInput"
                />
                <button>Update!</button>
            </form>
        </div>
    )
}

export default EducationForm