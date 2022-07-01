import axios, {AxiosResponse} from 'axios';

interface ICreateAccountResponse extends AxiosResponse {
  userId: string;
  refreshToken: string;
  accessToken: string;
}

/**
 * HTTP request to create account
 * @param firstName user's first name
 * @param lastName user's last name
 * @param email user's email address
 * @param credential user's credential
 * @returns object containing tokens and user id
 */
export async function createAccount(
  firstName: string,
  lastName: string,
  email: string,
  credential: string,
): Promise<ICreateAccountResponse> {
  const response = await axios({
    method: 'post',
    url: 'http://localhost:5000/api/userAuth/v1/account',
    data: {
      firstName,
      lastName,
      email,
      credential,
    },
  });
  return response.data;
}

/**
 * HTTP request to delete account
 * @param email user's email address
 * @param credential user's credential
 * @param accessToken JWT token
 * @returns promise object resolving status
 */
export async function deleteAccount(
  email: string,
  credential: string,
  accessToken: string,
): Promise<string> {
  return await axios({
    method: 'delete',
    url: 'http://localhost:5000/api/userAuth/v1/account',
    headers: {
      authorization: accessToken,
    },
    data: {
      email,
      credential,
    },
  })
    .then(res => String(res.status))
    .catch(e => {
      if (axios.isAxiosError(e) && e.status) {
        return e.status;
      }
      return 'unknownError';
    });
}

/**
 * HTTP request to update credential
 * @param oldCredential previous credential
 * @param newCredential new credential
 * @param accessToken JWT token
 * @returns promise object resolving status
 */
export async function changeCredential(
  oldCredential: string,
  newCredential: string,
  accessToken: string,
): Promise<string> {
  return await axios({
    method: 'patch',
    url: 'http://localhost:5000/api/userAuth/v1/account',
    headers: {
      authorization: accessToken, // add jwt access token here
    },
    data: {
      oldCredential,
      newCredential,
    },
  })
    .then(res => String(res.status))
    .catch(e => {
      if (axios.isAxiosError(e) && e.status) {
        return e.status;
      }
      return 'unknwonError';
    });
}

/**
 * HTTP request to rest credential
 * @param email user's email address
 * @param accessToken JWT token for authorization
 * @returns promise object resolving status
 */
export async function forgetCredential(email: string, accessToken: string) {
  return await axios({
    method: 'post',
    url: 'http://localhost:5000/api/userAuth/v1/account/resetCredential',
    headers: {
      authorization: accessToken,
    },
    data: {
      email,
    },
  })
    .then(res => String(res.status))
    .catch(e => {
      if (axios.isAxiosError(e) && e.status) {
        return e.status;
      }
      return 'unknwonError';
    });
}
