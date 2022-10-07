import { Inject, Service } from 'typedi';
import { JobService } from '@base/infrastructure/services/jobs/JobsService';
import { RecruitmentRequest } from '@base/api/requests/Jobs/RecruitmentRequest';

@Service()
export class RecruitmentService {
  constructor(private jobs: JobService) {}

  public async getAll(query: RecruitmentRequest) {
    return await this.jobs.getAll(query);
  }

  public async getById(id: string) {
    return await this.jobs.getById(id);
  }
}
