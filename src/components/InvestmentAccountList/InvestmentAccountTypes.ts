export interface AccountType {
  id: number,
  user_id: number,
  uuid: string,
  assets: number,
  broker_id:number,
  created_at : Date,
  is_active: boolean,
  name: string,
  number: number
  payments:number | string,
  status:number,
  updated_at: Date,
}