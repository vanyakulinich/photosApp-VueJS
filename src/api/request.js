/* eslint-disable */
import {api} from './axiosInstance';

const apiRequest = (requestDetails) => {
  const detailsArray = requestDetails ?
    Object.entries(requestDetails).map(el => el.join('=')) : null;
  const details = detailsArray ? detailsArray.join('&') : '';
  return api
          .get(details)
          .then(response => response.data.hits)
          .catch(err => {throw new Error(err)})
}

export default apiRequest;