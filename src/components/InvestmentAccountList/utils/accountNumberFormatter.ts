import React from "react";
import { brokerFormat } from "@src/constants/brokerFormat";

const accountNumberFormatter = (number:string, broker_id:string) => {
  let format = Array(brokerFormat[broker_id]);
  let result = number
  return result;
};

export default accountNumberFormatter;
