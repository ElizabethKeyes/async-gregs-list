

export class Job {
  constructor(data) {
    this.id = data.id
    this.jobTitle = data.jobTitle
    this.company = data.company
    this.rate = data.rate
    this.hours = data.hours
    this.description = data.description
  }

  get JobCard() {
    return `
    <div class="col-6 col-md-4">
      <div class="card product-card text-center text-dark">
        <h4 class="pt-2">${this.jobTitle}</h4>
        <h5>${this.company}</h5>
        <h6>${this.hours} Hours per Week</h6>
        <p>${this.description}</p>
        <button class="btn btn-danger m-1" onclick="app.jobsController.deleteJob('${this.id}')"> <i class="mdi mdi-delete-forever"></i></button>
      </div>
    </div>
    `
    // TODO add the edit button to this card when ready for it.
  }
}