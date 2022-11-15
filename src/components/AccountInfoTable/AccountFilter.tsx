import React from "react";
import { brokers } from "@src/constants/brokers";

const AccountFilter = () => {
  const options = [];

  const handleSetOption = () => {};

  for (const key in brokers) {
    options.push(
      <option key={key} value={key}>
        {brokers[key]}
      </option>
    );
  }

  return (
    <div>
      <select name="brokers" id="" onSelect={handleSetOption}>
        {options}
      </select>
    </div>
  );
};

export default AccountFilter;
