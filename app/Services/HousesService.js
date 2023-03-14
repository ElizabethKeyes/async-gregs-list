import { appState } from "../AppState.js";
import { House } from "../Models/House.js";

// @ts-ignore
const sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
  timeout: 8000
})

class HousesService {

  async viewHouses() {
    let res = await sandbox.get('houses')
    appState.houses = res.data.map(h => new House(h))
    console.log(appState.houses, 'all houses in appstate');
  }

}

export const housesService = new HousesService()