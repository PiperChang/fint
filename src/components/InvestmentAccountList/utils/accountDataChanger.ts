import React from 'react'
import {brokers} from "@src/constants/brokers"
import accountNumberFormatter from "./accountNumberFormatter"

const accountDataChanger = (account) => {
  return {
    ...account,
    broker_name: brokers[account.broker_id],
    number: accountNumberFormatter(account.number, account.broker_id)
  }
}

export default accountDataChanger