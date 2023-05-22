import React from 'react'



const Filtertemplate = ({name, handleFunction}) => {

  

  return (
    <div className=''>
      <button type="button" class="btn btn-primary" data-bs-toggle="button" onClick={handleFunction}>{name}</button>
    </div>
  )
}

export default Filtertemplate