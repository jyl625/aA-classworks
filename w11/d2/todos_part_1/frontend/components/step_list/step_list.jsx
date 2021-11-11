import React from 'react';
import StepListItemContainer from './step_list_container';
import StepForm from './step_form'

export default (props) => {
  return (
    <>
      <StepForm />
      <ul>
        {props.steps.map(step => <StepListItemContainer step={step} /> )}
      </ul>
    </>
  );
}