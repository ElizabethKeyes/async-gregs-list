import { appState } from "../AppState.js"
import { Job } from "../Models/Job.js"

// @ts-ignore
let sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/',
  timeout: 5000
})

class JobsService {

  async viewJobs() {
    let res = await sandbox.get('jobs')
    appState.jobs = res.data.map(j => new Job(j))
  }

  async createJob(formData) {
    console.log('creating job in the service', formData);
    let res = await sandbox.post('jobs', formData)
    let newJob = new Job(formData)
    appState.jobs.push(newJob)
    appState.emit('jobs')
  }

  async deleteJob(jobId) {
    let res = await sandbox.delete(`jobs/${jobId}`)
    console.log('deleting job in service', res.data);
    appState.jobs = appState.jobs.filter(j => j.id != jobId)
  }

  async updateJob(jobId, updateData) {
    let res = await sandbox.put(`jobs/${jobId}`, updateData)
    let jobIndex = appState.jobs.findIndex(j => j.id == jobId)
    appState.jobs.splice(jobIndex, 1, new Job(updateData))
    appState.emit('jobs')
  }

}

export const jobsService = new JobsService()