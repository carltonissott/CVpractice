import React, {Component} from 'react'
import GeneralInformation from './GeneralInformation'
import '../styles.css'
class GeneralForm extends Component{
    constructor(){
    super()
    
    this.state = {
        basic: {
        name:"carlton",
        email:"carlton@gmail.com",
        phone:"321-321-3121"
        }}}

        updateEmail = (e)=>{
        this.setState(prevState => {
            let basic= Object.assign({}, prevState.basic); 
            basic.email = e.target.value;                     // update the name property, assign a new value                 
            return { basic };                                 // return new object jasper object
        })
    }
    updateName = (e)=>{
        this.setState(prevState => {
        let basic= Object.assign({}, prevState.basic); 
        basic.name = e.target.value;                     // update the name property, assign a new value                 
        return { basic };                                 // return new object jasper object
        })
    }
    updateNumber = (e)=>{
        this.setState(prevState => {
        let basic= Object.assign({}, prevState.basic); 
        basic.phone = e.target.value;                     // update the name property, assign a new value                 
        return { basic };                                 // return new object jasper object
        })
    }
        

    render(){
        const {basic} =this.state
        return(
          <div className="app"> 
            <div className='basicInfoForm'>
              <form>
                <label htmlFor="nameInput">First Name:</label>
                <input
                  onChange={this.updateName}
                  value= {basic.name}
                  type="text"
                  id="nameInput"
                  />
                  <label htmlFor="emailInput">Email:</label>
                  <input
                  onChange={this.updateEmail}
                  value= {basic.email}
                  type="text"
                  id="emailInput"
                  />
                  <label htmlFor="numberInput">Phone Number:</label>
                  <input
                  onChange={this.updateNumber}
                  value= {basic.phone}
                  type="text"
                  id="numberInput"
                  />
              </form>
            </div> 
            <div>
              <GeneralInformation basic={basic} />
            </div>
          </div>
        )
      
      }
      





}

export default GeneralForm