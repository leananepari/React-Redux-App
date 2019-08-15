import React from 'react';
import Loader from 'react-loader-spinner';

function Response(props) {
  return (
    <div style={{marginTop: '60px'}}>
      {props.isLoading ? (
          <Loader type="Puff" color="#00BFFF" />
        ) : props.error ? (<div style={{color: 'red'}}>{props.error}</div>) : (
          <img src={`${props.dataImg}`} alt=''/>
        ) }
    </div>
  )
}

export default Response;