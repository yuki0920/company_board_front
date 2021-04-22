import {Role} from '@/models/role'

export class User {
  constructor(
    public id: number,
    public first_name: string,
    public last_name: string,
    public email: string,
    public role: Role // クラスを関連付けられる
  ) {
  }
}
