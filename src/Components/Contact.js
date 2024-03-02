import React from 'react'

function Contact() {
  return (
    <div className='contact-page-wrapper'>
        <h1 className='primary-heading'>Have Question In Mind?</h1>
        <h1 className='primary-heading'>Let Us Help You</h1>
        <div className='contact-form-container'>
            <input type='text' placeholder='youmail@gmail.com'></input>
            <button className='secondary-button'>Submit</button>
        </div>
    </div>
  )
}

export default Contact