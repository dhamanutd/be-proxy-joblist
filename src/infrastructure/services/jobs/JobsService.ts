import { RecruitmentRequest } from '@base/api/requests/Jobs/RecruitmentRequest';
import { Service } from 'typedi';
import { RecruitmentApi } from './Providers/Rest';

@Service()
export class JobService {
  private api: RecruitmentApi;

  public constructor() {
    this.api = new RecruitmentApi();
  }

  public async getAll(request: RecruitmentRequest): Promise<any> {
    return (await this.api.apiRecruitmentPositionsJsonGet(
      request.page,
      request.description,
      request.location,
      request.fullTime
    )).data;
  }

  public async getById(id: string): Promise<any> {
    return (await this.api.apiRecruitmentPositionsIdGet(id)).data;
  }
}
