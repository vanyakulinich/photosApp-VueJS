import axios from 'axios';
import {key} from './apiConfig';

export const api = axios.create({
  baseURL: `https://pixabay.com/api/?key=${key}`
})