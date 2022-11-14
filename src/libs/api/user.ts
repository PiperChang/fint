import clientAPI from "./client";

const UsersAPI = {
  get: async ()=>{
    const { data } = await clientAPI.get('/accounts');
    return data
  }
}

export default UsersAPI