import React, { useState } from 'react'
import './styles.css'
import GeneralForm from './components/GeneralForm'
import EducationForm from './components/EducationFormFx'
import EducationalInformation from './components/EducationalExperience'


const App = () => {

  let educationDataDisplay = ""
  const userData = (e) => {
    setEducationInfo(e)
  }

  const [educationInfo, setEducationInfo] = useState({
    degree: "Business Administration: Finance",
    location: "Gainesville,Fl",
    GPA: "4.2",
    year: "2020",
  })



  return (
    <div>
      <EducationalInformation education={educationInfo} />
      <EducationForm educationFormData={userData} />
    </div>
  )


}

export default App;
