import { appState } from "../AppState.js";
import { Job } from "../Models/Job.js";
import { jobsService } from "../Services/JobsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _DrawJobs() {
  let jobs = appState.jobs
  let template = ``
  jobs.forEach(j => template += j.JobCard)
  setHTML('listings', template)
  setHTML('form', Job.JobForm())
  document.getElementById('create-button').classList.remove('d-none')
}

export class JobsController {
  constructor() {
    console.log('hello from jobs controller');
    appState.on('jobs', _DrawJobs)
  }

  async viewJobs() {
    try {
      await jobsService.viewJobs()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async createJob() {
    window.event.preventDefault()
    let form = window.event.target
    let formData = getFormData(form)
    await jobsService.createJob(formData)
    // @ts-ignore
    form.reset()
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance('#create-modal').hide()
  }

  async deleteJob(jobId) {
    try {
      await jobsService.deleteJob(jobId)
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  openEditJobForm(jobId) {
    console.log('opening job form', jobId);
    // TODO create (dynamic?) edit job form and draw to the page
  }

  async updateJob(jobId) {
    // TODO create update job function and test
    // don't forget to pass both the jobId and editData to the service, as well as use trycatch
  }

}