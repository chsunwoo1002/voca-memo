import axios, {AxiosResponse} from 'axios';

/**
 * @interface IWord interface of word
 * @member {string} wordId word identifier
 * @member {string[]} examples a list of examples of word
 * @member {boolen} isFavourite a flag about favourite
 * @member {boolean} isMemorized a flag about memorized
 */
interface IWord {
  wordId: string;
  examples: string[];
  isFavourite: boolean;
  isMemorized: boolean;
}

/**
 * inherited interface from AxiosResponse
 * @interface FetchWordsResponse interface of HTTP response for fetchWords
 * @member {IWord[]} words a list of IWords
 */
export interface FetchWordsResponse extends AxiosResponse {
  words: IWord[];
}

/**
 * HTTP request get words by section
 * all - every words
 * like - all words with isFavourite is true
 * memo - all words with isMemorized is true
 * @param userId user identifier
 * @param section section of words
 * @param accessToken JWT token for validation
 * @returns Promise object resolving a list of IWord
 */
export async function fetchWords(
  userId: string,
  section: string,
  accessToken: string,
): Promise<FetchWordsResponse> {
  const response = await axios({
    method: 'get',
    url: `https://localhost:5000/api/users/v1/${userId}/${section}`,
    headers: {
      authorization: accessToken, // add jwt access token here
    },
  });
  return response.data;
}
