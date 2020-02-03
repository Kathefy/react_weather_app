import axios from 'axios';

const Api_Key = process.env.REACT_APP_API_KEY;

export const fetchDataAction = async (city, country, dispatch) => {
  const res = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&APPID=${Api_Key}`);

  return (
    dispatch({
      type: 'GET_DATA',
      payload: res.data
    })
  )
}