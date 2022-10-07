import { Param, Get, JsonController, Post, Body, Put, Delete, HttpCode, UseBefore, QueryParams } from 'routing-controllers';
import { Service } from 'typedi';
import { AuthCheck } from '@base/infrastructure/middlewares/Auth/AuthCheck';
import { ControllerBase } from '@base/infrastructure/abstracts/ControllerBase';
import { OpenAPI } from 'routing-controllers-openapi';
import { RecruitmentService } from '@api/services/Jobs/RecruitmentService';
import { RecruitmentRequest } from '@base/api/requests/Jobs/RecruitmentRequest';

@Service()
@OpenAPI({
  security: [{ bearerAuth: [] }],
})
@JsonController('/recruitment/positions')
@UseBefore(AuthCheck)
export class RecruitmentController extends ControllerBase {
  public constructor(private recruitmentService: RecruitmentService) {
    super();
  }

  @Get()
  public async getAll(@QueryParams() parseResourceOptions: RecruitmentRequest) {
    return await this.recruitmentService.getAll(parseResourceOptions);
  }

  @Get('/:id')
  public async getById(@Param('id') id: string) {
    return await this.recruitmentService.getById(id);
  }
}
