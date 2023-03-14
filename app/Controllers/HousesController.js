import { appState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _DrawHouses() {
  let houses = appState.houses
  let template = ``
  houses.forEach(h => template += h.HouseCard)
  setHTML('listings', template)
}


export class HousesController {
  constructor() {
    this.viewHouses()
    appState.on('houses', _DrawHouses)
  }

  async viewHouses() {
    try {
      await housesService.viewHouses()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  deleteHouse() {
    console.log('placeholder, still need to write this function');
  }
}