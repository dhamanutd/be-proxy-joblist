import { Inject, Service } from 'typedi';
import { UserRepository } from '@api/repositories/Users/UserRepository';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { EventDispatcher, EventDispatcherInterface } from '@base/decorators/EventDispatcher';
import { AuthService } from '@base/infrastructure/services/auth/AuthService';
import { User } from '@base/api/models/Users/User';
import { RegisterRequest } from '@base/api/requests/Auth/RegisterRequest';
import { UserExist } from '@api/exceptions/Auth/UserExist';

@Service()
export class RegisterService {
  constructor(
    @Inject() private userRepository: UserRepository,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
    private authService: AuthService,
  ) {
    //
  }

  public async register(data: RegisterRequest) {
    let user = await this.userRepository.findOne({ email: data.email });

    if (user) {
      throw new UserExist();
    }

    user = await this.userRepository.createUser(data);

    user = await this.userRepository.findOne(user.id);

    this.eventDispatcher.dispatch('onUserRegister', user);

    return this.authService.sign(
      {
        userId: user.id.toString(),
        email: user.email,
      },
      { user: { id: user.id.toString(), email: user.email } },
    );
  }
}
