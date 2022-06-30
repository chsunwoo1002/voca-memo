import axios from 'axios';
import {VocabularyType} from '../../components/common/types/word';

/**
 * HTTP request to get word definition
 * @param word word to find definition
 * @param language language of word
 * @param accessToken JWT token for validation
 * @returns Promise object resolving Vocabulary object
 */
export async function searchWord(
  word: string,
  language: string,
  accessToken: string,
): Promise<VocabularyType> {
  return await axios({
    method: 'get',
    url: `https://localhost:5000/api/dictionary/v1/${language}/definition/${word}}`,
    headers: {
      authorization: accessToken, // add jwt access token here
    },
  }).then(res => res.data);
}

/**
 * HTTP request to get synonyms of word
 * @param word word to find synonyms
 * @param language language of word
 * @param accessToken JWT token for validation
 * @returns Promise object resolving a list of Vocabulary object
 */
export async function searchSynonyms(
  word: string,
  language: string,
  accessToken: string,
): Promise<VocabularyType[]> {
  return await axios({
    method: 'get',
    url: `https://localhost:5000/api/dictionary/v1/${language}/synonyms/${word}}`,
    headers: {
      authorization: accessToken, // add jwt access token here
    },
  }).then(res => res.data);
}

/**
 * HTTP request to get antonyms of word
 * @param word word to find antonyms
 * @param language language of word
 * @param accessToken JWT token for validation
 * @returns Promise object resolving a list of Vocabulary object
 */
export async function searchAntonyms(
  word: string,
  language: string,
  accessToken: string,
): Promise<VocabularyType[]> {
  return await axios({
    method: 'get',
    url: `https://localhost:5000/api/dictionary/v1/${language}/antonyms/${word}}`,
    headers: {
      authorization: accessToken, // add jwt access token here
    },
  }).then(res => res.data);
}
