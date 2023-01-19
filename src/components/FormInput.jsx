import React from 'react'

const FormInput = (props) => {
  return (
    <div className='formInput p-3 m-2 mx-auto border '>
        {/* <label>Username</label> */}
        <input placeholder={props.placeholder} />
    </div>
  )
}

export default FormInput