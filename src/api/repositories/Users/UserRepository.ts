import { User } from '@api/models/Users/User';
import { MongoRepository, ObjectID } from 'typeorm';
import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';

@Service()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: MongoRepository<User>,
  ) {}

  public async createUser(data: object) {
    let entity = new User();

    Object.assign(entity, data);

    return await this.userRepository.save(entity);
  }

  public async findOne(data: Partial<User> | ObjectID) {

    return await this.userRepository.findOne(data);
  }
}
