import AuthAPI from "../../../libs/api/auth";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import AccountsAPI from "@src/libs/api/accounts";
import UsersAPI from "@src/libs/api/user";
import accountDataChanger from "../utils/accountDataChanger";
const handleGetAccounts = (options?) => {

  const accounts = useQuery(["Accounts"],  () => {
    console.log("rerender, refetching");
    
    return AccountsAPI.get()}, options);

  const changedData = accounts.data.map((account) => {
    return accountDataChanger(account)
  });
  
  const users = useQuery(["Users"], UsersAPI.get, options);
  
  

  return { ...accounts, data: changedData };
};

export default handleGetAccounts;
