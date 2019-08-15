import React from 'react';
import { connect } from 'react-redux';
import { getData } from './actions';
import './App.css';
import InputField from './components/InputField';
import Response from './components/Response';

function App(props) {
  return (
    <div className="App">
      <h1 style={{marginTop: '20px'}}>Should I ...</h1>
      <InputField getData={props.getData} />
      <Response isLoading={props.isLoading} dataImg={props.dataImg} 
                error={props.error} answer={props.answer}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    dataImg: state.dataImg,
    answer: state.answer,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(App);
