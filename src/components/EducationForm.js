import React, {Component} from 'react'
import '../styles.css'
import EducationalInformation from './EducationalExperience'

class EducationForm extends Component{
  constructor(){
    super()

    this.state = {
      education: {
        degree:"Business Administration Finance",
        location:"Gainesville, Fl",
        GPA:"3.92",
        year:"2022",
      }
    }
  }

updateDegree = (e)=>{
    this.setState(prevState => {
      let education= Object.assign({}, prevState.education); 
      education.degree = e.target.value;                     // update the name property, assign a new value                 
      return { education };                                 // return new object jasper object
    })
}

updateLocation = (e)=>{
    this.setState(prevState => {
      let education= Object.assign({}, prevState.education); 
      education.location = e.target.value;                     // update the name property, assign a new value                 
      return { education };                                 // return new object jasper object
    })
}

updateGPA = (e)=>{
    this.setState(prevState => {
      let education= Object.assign({}, prevState.education); 
      education.GPA = e.target.value;                     // update the name property, assign a new value                 
      return { education };                                 // return new object jasper object
    })
}

updateYear = (e)=>{
    this.setState(prevState => {
      let education= Object.assign({}, prevState.education); 
      education.year = e.target.value;                     // update the name property, assign a new value                 
      return { education };                                 // return new object jasper object
    })
}



render(){
 const {education} =this.state
  return(
      <div className='eduForm'>
        <form>
          <label htmlFor="degreeInput">Degree:</label>
          <input
            onChange={this.updateDegree}
            value= {education.degree}
            type="text"
            id="degreeInput"
            />
            <label htmlFor="locationInput">Location:</label>
            <input
            onChange={this.updateLocation}
            value= {education.location}
            type="text"
            id="locationInput"
            />
            <label htmlFor="GPAInput">GPA:</label>
            <input
            onChange={this.updateGPA}
            value= {education.GPA}
            type="text"
            id="GPAInput"
            />
            <label htmlFor="yearInput">Year:</label>
            <input
            onChange={this.updateYear}
            value= {education.year}
            type="text"
            id="yearInput"
            />
        </form>
        <EducationalInformation education={education}/>
      </div>

  )

}


}

export default EducationForm


