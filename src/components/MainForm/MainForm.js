import React from "react";
import { Form, Field } from 'react-final-form';
import { object, func } from 'prop-types';
import css from './MainForm.module.css';

const MainForm = props => (  
  <Form
    {...props}
    onSubmit={props.onSubmit}
    render={({ handleSubmit }) => (
      <form
        className={css.form}
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <div className={css.inputField}>
          <Field name="country" component="input" placeholder="Wpisz nazwę kraju" />
        </div>

        <div className={css.inputField}>
          <Field name="city" component="input" placeholder="Wpisz nazwę miasta" />
        </div>

        <div className={css.inputField}>
          <button className={css.submitButton} type="submit">
            Pobierz dane
          </button>
        </div>
      </form>
    )}
  />
);


MainForm.defaultProps = {
  initialValues: null,
};

MainForm.propTypes = {
  onSubmit: func.isRequired,
  initialValues: object,
};

export default MainForm;