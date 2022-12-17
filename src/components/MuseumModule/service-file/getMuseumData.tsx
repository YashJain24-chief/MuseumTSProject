import axios from 'axios';
import {MUSEUM_DATA} from '../urls';

export default async function getMuseumData() {
  try {
    const response = await axios.get(MUSEUM_DATA);
    return response;
  } catch (err) {
    throw err;
  }
}
