import clientAPI from './client';

const AccountsAPI = {
  get: async () => {
    const { data } = await clientAPI.get('/accounts');
    return data;
  },
};


export default AccountsAPI;