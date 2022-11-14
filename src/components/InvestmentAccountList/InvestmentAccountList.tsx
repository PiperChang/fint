import React, { useMemo } from "react";
import AccountInfoBox from "./AccountInfoBox";
import AccountInfoTable from "../AccountInfoTable/AccountInfoTable";
import handleGetAccounts from "./api/handleQueryAccountList";
import { AccountType } from "./InvestmentAccountTypes";

const InvestmentAccountList = () => {
  const { data, isLoading } = handleGetAccounts();
  
  const columns = useMemo(
    () => [
      { accessor: "", Header: "고객명" },
      { accessor: "broker_name", Header: "브로커명" },
      { accessor: "number", Header: "계좌번호" },
      { accessor: "status", Header: "계좌상태" },
      { accessor: "name", Header: "계좌명" },
      { accessor: "assets", Header: "평가금액" },
      { accessor: "payments", Header: "입금금액" },
      { accessor: "is_active", Header: "계좌활성화여부" },
      { accessor: "created_at", Header: "계좌개설일" },
    ],
    []
  );

  return (
    <div>
      <AccountInfoTable columns={columns} data={data} />
      {/* {!isLoading &&
        data.map((account: AccountType, index: string) => {
          return <AccountInfoBox key={"Account" + index} account={account} />;
        })} */}
    </div>
  );
};

export default InvestmentAccountList;
