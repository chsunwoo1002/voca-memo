import axios from 'axios';
import { VocabularyType } from '../../components/common/types/word';

export async function allWordsRequest(
  id: string,
  section: string,
  accessToken: string
) {
  const response = await axios({
    method: 'get',
    url: `https://localhost:5000/api/userAuth/v1/${section}`,
    params: {
      id,
    },
    headers: {
      authorization: accessToken, // add jwt access token here
    },
  });
  return response.data;
}

export interface WordsRequestResponse extends Response {
  data: VocabularyType[];
}
