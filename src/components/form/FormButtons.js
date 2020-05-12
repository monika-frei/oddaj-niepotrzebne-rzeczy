import React from 'react'

const FormButtons = (props) => {
   const { currentStep, handleButtonNext, handleButtonPrev, handleSubmit} = props
    if(currentStep == 1) {
        return(
            <div className = "buttons">
                <button className = "btn" onClick = {handleButtonNext}>Dalej</button>
            </div>  
        )
        
    } else if(currentStep > 1 && currentStep < 5) {
        return(
            <div className="buttons">
                <button className = "btn" onClick = {handleButtonPrev}>Wstecz</button>
                <button className = "btn" onClick = {handleButtonNext}>Dalej</button>
            </div>
        )
        
    } else if (currentStep == 5) {
        return(
            <div className="buttons buttons__summary">
                <button className = "btn" onClick = {handleButtonPrev}>Wstecz</button>
                <button className = "btn btn__confirm" onClick = {handleSubmit}>Potwierdzam</button>
            </div>
        )
    } else {
        return <></>
    }
}

export default FormButtons