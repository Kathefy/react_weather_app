import React from "react";
import { MainData, MainForm } from '../../components';
import css from './LandingPage.module.css';
import { Context } from '../../context';
import { fetchDataAction } from '../../Actions';

const LandingPage = () => { 
  const { dispatch, state: { data } } = React.useContext(Context);

  const handleSubmit = value => {
    const { city, country } = value;
    fetchDataAction(city, country, dispatch);
  }

  return(
    <div className={css.root}>
      <div className={css.container}>
        <div className={css.formContainer}>
          <h1 className={css.mainHeader}>Prognoza pogody</h1>
          <h2 className={css.mainDesc}>na 5 dni</h2>
          <MainForm onSubmit={handleSubmit} />
        </div>
      </div>
      {data &&
        <div className={css.formContainer}>
          <MainData />
        </div>
      }
    </div>
  )
};

export default LandingPage;