import { EventSubscriber, On } from 'event-dispatch';

@EventSubscriber()
export class UserEvent {
  @On('onUserRegister')
  public onUserRegister(user: any) {
    console.log('User ' + user.email + ' send!');
  }

  @On('onUserCreate')
  public onUserCreate(user: any) {
    console.log('User ' + user.email + ' created!');
  }
}
