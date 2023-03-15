
export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.imgUrl = data.imgUrl
    this.price = data.price
    this.year = data.year
    this.description = data.description
    this.levels = data.levels
  }

  get HouseCard() {
    return `
    <div class="col-6 col-md-4">
      <div class="row m-1 card product-card text-center text-dark">
        <div class="col-12 p-0">
          <img class="img-fluid product-img" src="${this.imgUrl}" alt="${this.levels} story house">
          <h6 class="p-2">${this.bedrooms} Bedrooms | ${this.bathrooms} Bathrooms | Built in ${this.year}</h6>
          <p>${this.description}</p>
        </div>
        <div class="col-6 align-self-end text-end">
          <button class="btn btn-danger m-1" onclick="app.housesController.deleteHouse('${this.id}')"> <i class="mdi mdi-delete-forever"></i></button>
          <button class="btn btn-warning m-1" onclick="app.housesController.openEditHouseForm('${this.id}')" data-bs-toggle="modal" data-bs-target="#edit-modal"><i class="mdi mdi-pen"></i></button>
        </div>
      </div>
    </div>`
  }

  static DynamicHouseForm(house = {}) {
    return `
    <form onsubmit="app.housesController.${house.id ? `updateHouse(${house.id})` : `createHouse()`}  class="row ms-1 bg-white rounded">
    <h3>List a House</h3>
    <div class="mb-2 col-4">
      <label for="bedrooms">Bedrooms</label>
      <input value="${house.bedrooms || ''}" type="number" name="bedrooms" id="bedrooms" class="form-control" min="1" required>
    </div>
    <div class="col-4 mb-2">
      <label for="bathrooms">Bathrooms</label>
      <input value="${house.bathrooms || ''}" type="number" name="bathrooms" id="bathrooms" class="form-control" min="1" required>
    </div>
    <div class="mb-2 col-4">
      <label for="year">Year Built</label>
      <input value="${house.year || ''}" type="number" name="year" id="year" class="form-control" min="1900" max="2023" required>
    </div>
    <div class="col-6 mb-2">
      <label for="levels">Levels</label>
      <input value="${house.levels || ''}" type="number" name="levels" id="levels" class="form-control" min="1" required>
    </div>
    <div class="col-6 mb-2">
      <label for="price">Price</label>
      <input value="${house.price || ''}" type="number" name="price" id="price" class="form-control" min="1000" required>
    </div>
    <div class="col-12 mb-2">
      <label for="imgUrl">Image Link (URL)</label>
      <input value="${house.imgUrl || ''}" type="url" name="imgUrl" id="imgUrl" class="form-control" required>
    </div>
    <div class="col-12 mb-2">
      <label for="description">Description</label>
      <input value="${house.description || ''}" type="text" name="description" id="description" class="form-control" maxlength="100">
    </div>
    <div class="col-12 mt-2 text-end">
      <button class="btn" type="reset" data-bs-toggle="modal" data-bs-target="#create-modal">Cancel</button>
      <button class="btn btn-primary">Submit</button>
    </div>
  </form>
    `
  }
}