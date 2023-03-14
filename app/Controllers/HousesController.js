import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { housesService } from "../Services/HousesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _DrawHouses() {
  let houses = appState.houses
  let template = ``
  houses.forEach(h => template += h.HouseCard)
  setHTML('listings', template)
  setHTML('form', House.HouseForm())
  document.getElementById('create-button').classList.remove('d-none')
}


export class HousesController {
  constructor() {
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

  async createHouse() {
    window.event.preventDefault()
    let form = window.event.target
    let formData = getFormData(form)
    // @ts-ignore
    form.reset()
    await housesService.createHouse(formData)
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance('#create-modal').hide()

  }

  deleteHouse() {
    console.log('placeholder, still need to write this function');
  }
}