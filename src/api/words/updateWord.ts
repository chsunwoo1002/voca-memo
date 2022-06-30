import axios from 'axios';

/**
 * @interface IFlags
 * @member {boolean} isFavourite true if user like word, otherwise false
 * @member {boolean} isMemorized true if user memorize word, otherwise false
 */
interface IFlags {
  isFavourite: boolean;
  isMemorized: boolean;
}

/**
 * HTTP request to add a example to word
 * @param wordId word identifier
 * @param accessToken JWT token for validation
 * @param example example to add
 * @param userId user identifier
 * @returns promise object resolving the status code
 */
export async function addExample(
  wordId: string,
  accessToken: string,
  example: string,
  userId: string,
): Promise<string> {
  return await axios({
    method: 'put',
    url: `https://localhost:5000/api/users/v1/${userId}/${wordId}/example`,
    params: {
      example,
    },
    headers: {
      authorization: accessToken, // add jwt access token here
    },
  })
    .then(res => String(res.status))
    .catch(e => {
      if (axios.isAxiosError(e) && e.status) {
        return e.status;
      } else {
        return 'unknownError';
      }
    });
}

/**
 * HTTP request to delete a example to word
 * @param wordId word identifier
 * @param accessToken JWT token for validation
 * @param example example to add
 * @param userId user identifier
 * @returns promise object resolving the status code
 */
export async function deleteExample(
  word: string,
  accessToken: string,
  example: string,
  userId: string,
): Promise<string> {
  return await axios({
    method: 'delete',
    url: `https://localhost:5000/api/users/v1/${userId}/${word}/example`,
    params: {
      example,
    },
    headers: {
      authorization: accessToken, // add jwt access token here
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
 * HTTP request to update flags
 * @param wordId word identifier
 * @param accessToken JWT token for validation
 * @param flags flags of word
 * @param userId user identifier
 * @returns promise object resolving the status code
 */
export async function updateFlags(
  wordId: string,
  accessToken: string,
  userId: string,
  flags: IFlags,
): Promise<string> {
  return await axios({
    method: 'put',
    url: `https://localhost:5000/api/users/v1/${userId}/${wordId}/flags`,
    params: {
      flags,
    },
    headers: {
      authorization: accessToken, // add jwt access token here
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
 * HTTP request to add new word
 * @param wordId word identifier
 * @param accessToken JWT token for validation
 * @param userId user identifier
 * @returns promise object resolving status code
 */
export async function addWord(
  wordId: string,
  accessToken: string,
  userId: string,
): Promise<string> {
  return await axios({
    method: 'post',
    url: `https://localhost:5000/api/users/v1/${userId}/${wordId}`,
    headers: {
      authorization: accessToken, // add jwt access token here
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
 * HTTP request to delete new word
 * @param wordId word identifier
 * @param accessToken JWT token for validation
 * @param userId user identifier
 * @returns promise object resolving status code
 */
export async function deleteWord(
  wordId: string,
  accessToken: string,
  userId: string,
): Promise<string> {
  return await axios({
    method: 'delete',
    url: `https://localhost:5000/api/users/v1/${userId}/${wordId}`,
    headers: {
      authorization: accessToken, // add jwt access token here
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
