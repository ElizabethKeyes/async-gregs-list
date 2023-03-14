import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { housesService } from "../Services/HousesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";


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

  async deleteHouse(houseId) {
    try {
      await housesService.deleteHouse(houseId)
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  openEditHouseForm(houseId) {
    console.log('opening edit house form', houseId);
    let house = appState.houses.find(h => h.id == houseId)
    setHTML('edit-form', House.EditHouseForm(house))
  }

  async updateHouse(houseId) {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let editData = getFormData(form)
      await housesService.updateHouse(houseId, editData)
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance('#edit-modal').hide()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  hideListings() {
    setHTML('listings', `<h1 class="text-center mt-5">Welcome to Greg's List! Please select a category to begin browsing.</h1>`)
  }
}