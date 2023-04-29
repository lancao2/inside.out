export interface IPrismaUser {
  id: String;
  username: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  is_active: boolean;
  is_partiner: boolean;
  created_at: Date;
  updated_at: Date;
}
