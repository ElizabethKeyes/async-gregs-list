

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
    <div class="card product-card text-center text-dark">
      <img class="img-fluid product-img" src="${this.imgUrl}" alt="${this.levels} story house">
      <h6 class="p-2">${this.bedrooms} Bedrooms | ${this.bathrooms} Bathrooms | Built in ${this.year}</h6>
      <p>${this.description}</p>
      <button class="btn btn-danger m-1" onclick="app.housesController.deleteHouse('${this.id}')"> <i class="mdi mdi-delete-forever"></i></button>
      </div>
      </div>
      `
  }
  // TODO this goes below the other button on the house card when I'm ready for it.
  // <button class="btn btn-warning m-1" onclick="app.carsController.openEditCarForm('${this.id}')" data-bs-toggle="modal"
  // data-bs-target="#edit-modal"><i class="mdi mdi-pen"></i></button>


  static HouseForm() {
    return `
    <form onsubmit="app.housesController.createHouse()" class="row ms-1 bg-white rounded">
    <h3>List a House</h3>
    <div class="mb-2 col-4">
      <label for="bedrooms">Bedrooms</label>
      <input type="number" name="bedrooms" id="bedrooms" class="form-control" min="1" required>
    </div>
    <div class="col-4 mb-2">
      <label for="bathrooms">Bathrooms</label>
      <input type="number" name="bathrooms" id="bathrooms" class="form-control" min="1" required>
    </div>
    <div class="mb-2 col-4">
      <label for="year">Year Built</label>
      <input type="number" name="year" id="year" class="form-control" min="1900" max="2023" required>
    </div>
    <div class="col-6 mb-2">
      <label for="levels">Levels</label>
      <input type="number" name="levels" id="levels" class="form-control" min="1" required>
    </div>
    <div class="col-6 mb-2">
      <label for="price">Price</label>
      <input type="number" name="price" id="price" class="form-control" min="1000" required>
    </div>
    <div class="col-12 mb-2">
      <label for="imgUrl">Image Link (URL)</label>
      <input type="url" name="imgUrl" id="imgUrl" class="form-control" required>
    </div>
    <div class="col-12 mb-2">
      <label for="description">Description</label>
      <input type="text" name="description" id="description" class="form-control" maxlength="100">
    </div>
    <div class="col-12 mt-2 text-end">
      <button class="btn" type="reset" data-bs-toggle="modal" data-bs-target="#create-modal">Cancel</button>
      <button class="btn btn-primary">Submit</button>
    </div>
  </form>
    `
  }
}