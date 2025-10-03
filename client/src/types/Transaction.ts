export interface ITransaction {
  id: number;
  user_id: string;
  title: string;
  amount: number;
  category: string;
  created_at: Date;
}