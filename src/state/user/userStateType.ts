export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type UserState = {
  loggedIn: boolean;
  loggedUser: User;
};

export type UserAction = {
  type: string;
  userState: UserState;
};
