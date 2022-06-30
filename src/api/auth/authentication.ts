import axios from 'axios';

/**
 * @interface ILoginResponse interface of response about login
 * @member userId user identifier
 * @member refreshToken JWT token for reissuing access token
 * @member accessToken JWT token for authorization
 */
export interface ILoginResponse {
  userId: string;
  refreshToken: string;
  accessToken: string;
}

/**
 * HTTP request for login process
 * @param email email address
 * @param password password
 * @returns LoginResponse object
 */
export async function userLogIn(email: string, password: string) {
  const response = await axios.post<ILoginResponse>(
    'http://localhost:5000/api/userAuth/v1/login',
    {
      email,
      password,
    },
  );
  return response.data;
}

/**
 * HTTP request for logout process
 * @param userId user identifier
 * @param accessToken JWT token for authorization
 * @returns status code
 */
export async function userLogOut(
  userId: string,
  accessToken: string,
): Promise<string> {
  return await axios({
    url: `http://localhost:5000/api/userAuth/v1/logout/${userId}`,
    headers: {
      authorization: accessToken,
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
 * HTTP request to get new access token
 * @param userId user identifier
 * @param refreshToken token for reissuing access token
 * @returns JWT token for authorization
 */
export async function getRefreshToken(
  userId: string,
  refreshToken: string,
): Promise<string> {
  const response = await axios({
    url: `http://localhost:5000/api/userAuth/v1/token/${userId}`,
    headers: {
      authorization: refreshToken,
    },
  });
  return response.data;
}
