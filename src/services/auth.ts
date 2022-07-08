import { correctPassword, correctUsername } from 'mocks/credentials';

export interface Credentials {
  username: string;
  password: string;
}

export interface Response {
  username: string;
}

export const signIn = ({ username, password }: Credentials) => {
  return new Promise<Response>((resolve, refect) => {
    const response = { username };

    if (username === correctUsername && password === correctPassword) {
      return setTimeout(() => resolve(response), 500);
    } else {
      return setTimeout(() => refect(response), 250);
    }
  });
};
