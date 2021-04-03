import { ContaBanco } from './../../logged-area/interfaces/contaBanco.interface';
import { ContaCredito } from './../../logged-area/interfaces/contaCredito.interface';
import { User } from './createAccount.interface';

export interface LoginResponse {
  usuario: User;
  token: string;
  conta: ContaBanco;
  contaCredito: ContaCredito;
}
