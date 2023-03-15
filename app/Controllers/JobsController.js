import { appState } from "../AppState.js";
import { Job } from "../Models/Job.js";
import { jobsService } from "../Services/JobsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _DrawJobs() {
  let jobs = appState.jobs
  let template = ``
  jobs.forEach(j => template += j.JobCard)
  setHTML('listings', template)
  setHTML('form', Job.DynamicJobForm())
  document.getElementById('create-button').classList.remove('d-none')
}

export class JobsController {
  constructor() {
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
    let job = appState.jobs.find(j => j.id == jobId)
    setHTML('edit-form', Job.DynamicJobForm(job))
  }

  async updateJob(jobId) {
    window.event.preventDefault()
    let form = window.event.target
    let updateData = getFormData(form)
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance('#edit-modal').hide()
    await jobsService.updateJob(jobId, updateData)
  }

}