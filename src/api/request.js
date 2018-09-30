import axios from 'axios';
import {key} from './apiConfig';

const apiRequest = (requestDetails) => {
  const detailsArray = requestDetails ?
    Object.entries(requestDetails).map(el => el.join('=')) : null;
  const details = detailsArray ? detailsArray.join('&') : '';
  return axios
          .get(`https://pixabay.com/api/?key=${key}&${details}`)
          .then(response => response.data.hits)
          .catch(err => {throw new Error(err)})
}

export default apiRequest;