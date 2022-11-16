import clientAPI from '@src/libs/api/client';

type GetUserDetail = {
  user_id: string;
};

class UserDetailRepository {
  private baseUserQueryString: string = '/users?id=';
  private baseSettingQueryString: string = '/userSetting?uuid=';

  getUserSetting(uuid:string) {
    return clientAPI.get(
      this.baseSettingQueryString+uuid
    )
  }
  getUserDetail(user_id : string) {
    return clientAPI.get(
      this.baseUserQueryString+user_id
    )
  }
}

export default new UserDetailRepository();
