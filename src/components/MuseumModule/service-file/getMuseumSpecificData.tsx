import axios from 'axios';
import {MUSEUM_SPECIFIC_DATA} from '../urls';

export default async function getMuseumSpecificData(id: number) {
  try {
    const response = await axios.get(`${MUSEUM_SPECIFIC_DATA}/${id}`);
    return response;
  } catch (err) {
    throw err;
  }
}
