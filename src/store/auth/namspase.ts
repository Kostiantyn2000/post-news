export namespace Auth {
  export type ICreateLoginReq = {
    username: string;
    password: string;
    isLoggedIn: boolean;
  };
}
