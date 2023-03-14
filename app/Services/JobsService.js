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

}

export const jobsService = new JobsService()