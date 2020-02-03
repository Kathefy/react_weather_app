import React from "react";
import { Context } from '../../context';
import css from './MainData.module.css';

const MainData = () => {
  const { state: { data } } = React.useContext(Context);
  const { city: { country, name }, list } = data;

  return(
    <div className={css.container}>
      <div className={css.containerToday}>
        <div>Miasto: {name}, {country}</div>
        <div>Temperatura: {list[0].main.temp}&#8451;</div>
        <div>Wilgotność: {list[0].main.humidity}</div>
      </div>

      <div className={css.forecastListContainer}>
        <ul className={css.forecastList}>
        {list.map((el, i) => (
          <li key={i}>{el.dt_txt}: {el.main.temp}&#8451;</li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default MainData;