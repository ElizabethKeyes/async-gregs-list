import { appState } from "../AppState.js";
import { House } from "../Models/House.js";

// @ts-ignore
const sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
  timeout: 8000
})

class HousesService {
  async createHouse(formData) {
    const res = await sandbox.post('houses', formData)
    const newHouse = new House(res.data)
    appState.houses.push(newHouse)
    appState.emit('houses')
  }

  async viewHouses() {
    let res = await sandbox.get('houses')
    appState.houses = res.data.map(h => new House(h))
  }

}

export const housesService = new HousesService()