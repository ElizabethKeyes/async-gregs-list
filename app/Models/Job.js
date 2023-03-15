
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
      <div class="row m-1 card product-card text-center text-dark">
        <div class="col-12 p-0>
          <h4 class="pt-2">${this.jobTitle}</h4>
          <h5>${this.company}</h5>
          <h6>${this.hours} Hours per Week</h6>
          <p>${this.description}</p>
        </div>
        <div class="col-6 align-self-end text-end">
          <button class="btn btn-danger m-1" onclick="app.jobsController.deleteJob('${this.id}')"> <i class="mdi mdi-delete-forever"></i></button>
          <button class="btn btn-warning m-1" onclick="app.jobsController.openEditJobForm('${this.id}')" data-bs-toggle="modal" data-bs-target="#edit-modal"><i class="mdi mdi-pen"></i></button>
        </div>
      </div>
    </div>
    `
    // TODO add the edit button to this card when ready for it.
  }

  static JobForm() {
    return `
    <form onsubmit="app.jobsController.createJob()" class="row ms-1 bg-white rounded">
    <h3>Post a Job</h3>
    <div class="mb-2 col-4">
      <label for="jobTitle">Job Title</label>
      <input type="text" name="jobTitle" id="jobTitle" class="form-control" min="1" required>
    </div>
    <div class="col-4 mb-2">
    <label for="company">Company</label>
    <input type="text" name="company" id="company" class="form-control" min="1" required>
    </div>
    <div class="mb-2 col-4">
      <label for="hours">Weekly Hours</label>
      <input type="number" name="hours" id="hours" class="form-control" max="168" required>
    </div>
    <div class="col-6 mb-2">
      <label for="rate">Hourly Rate</label>
      <input type="number" name="rate" id="rate" class="form-control" min="1" required>
    </div>
    <div class="col-12 mb-2">
      <label for="description">Description</label>
      <input type="text" name="description" id="description" class="form-control" maxlength="100">
    </div>
    <div class="col-12 mt-2 text-end">
      <button class="btn" type="reset" data-bs-toggle="modal" data-bs-target="#create-modal">Cancel</button>
      <button class="btn btn-primary">Submit</button>
    </div>
  </form>`
  }
}