import { appState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _DrawJobs() {
  let jobs = appState.jobs
  let template = ``
  jobs.forEach(j => template += j.JobCard)
  setHTML('listings', template)
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

  deleteJob(jobId) {
    // TODO write this function
    console.log('need to write this function still.');
  }

}