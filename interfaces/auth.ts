export interface Login {
  email: string;
  password: string;
}

export interface Register extends Login {
  username: string;
  role_id: number;
}
