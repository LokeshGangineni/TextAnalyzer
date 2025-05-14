import React from 'react'
// import props from 'react';

function Alert(props) {
  return (
    
    props.alert &&<div class="alert alert-success" role="alert">
  {props.alert.type}:{props.alert.msg} 
</div>
  )
}

export default Alert;
