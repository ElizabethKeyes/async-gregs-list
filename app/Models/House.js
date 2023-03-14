

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
    <div class="card product-card">
      <img class="img-fluid product-img" src="${this.imgUrl}" alt="${this.levels} story house">
      <h6 class="p-2 text-center text-dark">${this.bedrooms} Bedrooms | ${this.bathrooms} Bathrooms | Built in ${this.year}</h6>
      <button class="btn btn-danger m-1" onclick="app.housesController.deleteHouse('${this.id}')"> <i class="mdi mdi-delete-forever"></i></button>
      </div>
      </div>
      `
  }
  // TODO this goes below the other button on the house card when I'm ready for it.
  // <button class="btn btn-warning m-1" onclick="app.carsController.openEditCarForm('${this.id}')" data-bs-toggle="modal"
  // data-bs-target="#edit-modal"><i class="mdi mdi-pen"></i></button>

}