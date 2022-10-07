import { BadRequestError } from 'routing-controllers';

export class UserExist extends BadRequestError {
  constructor() {
    super('User Already Exist!');
  }
}
