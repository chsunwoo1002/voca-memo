import React, { useState } from 'react';

import Footer from './footer';
import FeedContainer from './feed/components/FeedContainer';
import NavigationContainer from './searchbar/NavigationContainer';
import WordContainer from './common/WordContainer';
import { View } from 'react-native';
import styles from '../components/common/styles/Styles';
import { VocabularyType } from './common/types/word';
import store from '../state/store';

const ContentContainer: React.FC = () => {
  const [isNewFeed, setIsNewFeed] = useState(false);
  const [isNewWord, setIsNewWord] = useState(false);
  const [memorizedWords, setMemorizedWords] = useState<Array<VocabularyType>>();
  const [favouriteWords, setFavouriteWords] = useState<Array<VocabularyType>>();
  const [newWord, setNewWord] = useState<VocabularyType>();
  const [isValid, setIsValid] = useState<boolean>(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  var errorMessage = 'Oops, something went wrong in API, please try again';
  var test = [
    {
      meaning: [
        {
          definitions: [
            {
              antonyms: ['unimportant', 'optional'],
              definition: 'of vital importance; crucial.',
              examples: [
                'immediate action was imperative',
                'it is imperative that standards be maintained',
                'With reloading it is absolutely imperative we measure at least twice, maybe more.',
                'Illness, death and the cost of hip fractures make prevention imperative.',
                'For a moment, despite the obviously imperative differences in gender, they emerge as the twin epic heroes on the same side, fighting the same war against a common foe.',
                'In order to implement gender reform, it is imperative that gender bias in the legal framework of the country is removed.',
                'Thus, it is imperative that health communication scholars focus their efforts on adolescent patient-physician communication.',
                'It is imperative that couples should communicate in order to know the root of the conflict.',
              ],
              synonyms: [
                'vitally important',
                'of vital importance',
                'all-important',
                'vital',
                'crucial',
                'critical',
                'essential',
                'of the essence',
                'a matter of life and death',
                'of great consequence',
                'necessary',
                'indispensable',
                'exigent',
                'pressing',
                'urgent',
                'required',
                'compulsory',
                'mandatory',
                'obligatory',
              ],
            },
            {
              antonyms: ['submissive'],
              definition: 'giving an authoritative command; peremptory.',
              examples: [
                'the bell pealed again, a final imperative call',
                'The human desire for novelty is twinned with an equally imperative desire for continuity.',
                "It's an imperative and ornate exhortation to lay open your nerves and unabashedly, unapologetically feel.",
              ],
              synonyms: [
                'peremptory',
                'commanding',
                'imperious',
                'authoritative',
                'masterful',
                'lordly',
                'magisterial',
                'autocratic',
                'dictatorial',
                'domineering',
                'overbearing',
                'assertive',
                'firm',
                'insistent',
                'bossy',
                'high-handed',
                'overweening',
              ],
            },
          ],
          partOfSpeech: 'adjective',
        },
        {
          definitions: [
            {
              definition: 'an essential or urgent thing.',
              examples: [
                'free movement of labor was an economic imperative',
                'Such an imperative seems particularly urgent because of the vacuum at the top.',
                'Our successes have highlighted some essential imperatives for how we will continue to do business.',
                'The drama of history and biography is sacrificed to the imperative of ‘covering’ everything in a single volume.',
                'Given the imperative of global competition and the continued flow of efficiency gains from past investments in technology, the efficiency trend will not go into reverse.',
                'Applicants also showed an understanding of the imperative to enable teachers to grow and realize more of their own potential in their chosen profession.',
                'Currently, too many internet users fail to understand, or fail to act on, the imperative to protect themselves for the greater good.',
                'Job stress is caused by the lack of adequate staffing, and by the imperative for laboratory work to be error-free.',
                "Such an indication or a close relative's agreement (based on his knowledge of the donor's attitude and moral values) is imperative.",
                'But it is one of the noblest things this country has ever attempted abroad and it is a moral and strategic imperative that we give it our best shot.',
                'Chief among these challenges are the need for a new type of salesperson and the imperative to win acceptance of value-based prices by third-party payers.',
                'First, we see the imperative to view this work in cycles with multiple points of entry and modes of engagement.',
              ],
            },
            {
              definition: 'a verb or phrase in the imperative mood.',
              examples: [
                'Noteworthy in this meditation is the use of imperatives and action verbs, which are meant to activate the believer.',
                "Jon's utterance is an imperative, but it is not a command.",
              ],
            },
          ],
          partOfSpeech: 'noun',
        },
      ],
      phonetics: [
        {
          audio:
            '//ssl.gstatic.com/dictionary/static/sounds/20200429/imperative--_us_1.mp3',
          text: 'əmˈperədiv',
        },
      ],
      type: 'data',
      word: 'imperative',
    },
    {
      meaning: [
        {
          definitions: [
            {
              antonyms: ['unimportant', 'optional'],
              definition: 'of vital importance; crucial.',
              examples: [
                'immediate action was imperative',
                'it is imperative that standards be maintained',
                'With reloading it is absolutely imperative we measure at least twice, maybe more.',
                'Illness, death and the cost of hip fractures make prevention imperative.',
                'For a moment, despite the obviously imperative differences in gender, they emerge as the twin epic heroes on the same side, fighting the same war against a common foe.',
                'In order to implement gender reform, it is imperative that gender bias in the legal framework of the country is removed.',
                'Thus, it is imperative that health communication scholars focus their efforts on adolescent patient-physician communication.',
                'It is imperative that couples should communicate in order to know the root of the conflict.',
              ],
              synonyms: [
                'vitally important',
                'of vital importance',
                'all-important',
                'vital',
                'crucial',
                'critical',
                'essential',
                'of the essence',
                'a matter of life and death',
                'of great consequence',
                'necessary',
                'indispensable',
                'exigent',
                'pressing',
                'urgent',
                'required',
                'compulsory',
                'mandatory',
                'obligatory',
              ],
            },
            {
              antonyms: ['submissive'],
              definition: 'giving an authoritative command; peremptory.',
              examples: [
                'the bell pealed again, a final imperative call',
                'The human desire for novelty is twinned with an equally imperative desire for continuity.',
                "It's an imperative and ornate exhortation to lay open your nerves and unabashedly, unapologetically feel.",
              ],
              synonyms: [
                'peremptory',
                'commanding',
                'imperious',
                'authoritative',
                'masterful',
                'lordly',
                'magisterial',
                'autocratic',
                'dictatorial',
                'domineering',
                'overbearing',
                'assertive',
                'firm',
                'insistent',
                'bossy',
                'high-handed',
                'overweening',
              ],
            },
          ],
          partOfSpeech: 'adjective',
        },
        {
          definitions: [
            {
              definition: 'an essential or urgent thing.',
              examples: [
                'free movement of labor was an economic imperative',
                'Such an imperative seems particularly urgent because of the vacuum at the top.',
                'Our successes have highlighted some essential imperatives for how we will continue to do business.',
                'The drama of history and biography is sacrificed to the imperative of ‘covering’ everything in a single volume.',
                'Given the imperative of global competition and the continued flow of efficiency gains from past investments in technology, the efficiency trend will not go into reverse.',
                'Applicants also showed an understanding of the imperative to enable teachers to grow and realize more of their own potential in their chosen profession.',
                'Currently, too many internet users fail to understand, or fail to act on, the imperative to protect themselves for the greater good.',
                'Job stress is caused by the lack of adequate staffing, and by the imperative for laboratory work to be error-free.',
                "Such an indication or a close relative's agreement (based on his knowledge of the donor's attitude and moral values) is imperative.",
                'But it is one of the noblest things this country has ever attempted abroad and it is a moral and strategic imperative that we give it our best shot.',
                'Chief among these challenges are the need for a new type of salesperson and the imperative to win acceptance of value-based prices by third-party payers.',
                'First, we see the imperative to view this work in cycles with multiple points of entry and modes of engagement.',
              ],
            },
            {
              definition: 'a verb or phrase in the imperative mood.',
              examples: [
                'Noteworthy in this meditation is the use of imperatives and action verbs, which are meant to activate the believer.',
                "Jon's utterance is an imperative, but it is not a command.",
              ],
            },
          ],
          partOfSpeech: 'noun',
        },
      ],
      phonetics: [
        {
          audio:
            '//ssl.gstatic.com/dictionary/static/sounds/20200429/imperative--_us_1.mp3',
          text: 'əmˈperədiv',
        },
      ],
      type: 'data',
      word: 'imperative',
    },
    {
      meaning: [
        {
          definitions: [
            {
              antonyms: ['unimportant', 'optional'],
              definition: 'of vital importance; crucial.',
              examples: [
                'immediate action was imperative',
                'it is imperative that standards be maintained',
                'With reloading it is absolutely imperative we measure at least twice, maybe more.',
                'Illness, death and the cost of hip fractures make prevention imperative.',
                'For a moment, despite the obviously imperative differences in gender, they emerge as the twin epic heroes on the same side, fighting the same war against a common foe.',
                'In order to implement gender reform, it is imperative that gender bias in the legal framework of the country is removed.',
                'Thus, it is imperative that health communication scholars focus their efforts on adolescent patient-physician communication.',
                'It is imperative that couples should communicate in order to know the root of the conflict.',
              ],
              synonyms: [
                'vitally important',
                'of vital importance',
                'all-important',
                'vital',
                'crucial',
                'critical',
                'essential',
                'of the essence',
                'a matter of life and death',
                'of great consequence',
                'necessary',
                'indispensable',
                'exigent',
                'pressing',
                'urgent',
                'required',
                'compulsory',
                'mandatory',
                'obligatory',
              ],
            },
            {
              antonyms: ['submissive'],
              definition: 'giving an authoritative command; peremptory.',
              examples: [
                'the bell pealed again, a final imperative call',
                'The human desire for novelty is twinned with an equally imperative desire for continuity.',
                "It's an imperative and ornate exhortation to lay open your nerves and unabashedly, unapologetically feel.",
              ],
              synonyms: [
                'peremptory',
                'commanding',
                'imperious',
                'authoritative',
                'masterful',
                'lordly',
                'magisterial',
                'autocratic',
                'dictatorial',
                'domineering',
                'overbearing',
                'assertive',
                'firm',
                'insistent',
                'bossy',
                'high-handed',
                'overweening',
              ],
            },
          ],
          partOfSpeech: 'adjective',
        },
        {
          definitions: [
            {
              definition: 'an essential or urgent thing.',
              examples: [
                'free movement of labor was an economic imperative',
                'Such an imperative seems particularly urgent because of the vacuum at the top.',
                'Our successes have highlighted some essential imperatives for how we will continue to do business.',
                'The drama of history and biography is sacrificed to the imperative of ‘covering’ everything in a single volume.',
                'Given the imperative of global competition and the continued flow of efficiency gains from past investments in technology, the efficiency trend will not go into reverse.',
                'Applicants also showed an understanding of the imperative to enable teachers to grow and realize more of their own potential in their chosen profession.',
                'Currently, too many internet users fail to understand, or fail to act on, the imperative to protect themselves for the greater good.',
                'Job stress is caused by the lack of adequate staffing, and by the imperative for laboratory work to be error-free.',
                "Such an indication or a close relative's agreement (based on his knowledge of the donor's attitude and moral values) is imperative.",
                'But it is one of the noblest things this country has ever attempted abroad and it is a moral and strategic imperative that we give it our best shot.',
                'Chief among these challenges are the need for a new type of salesperson and the imperative to win acceptance of value-based prices by third-party payers.',
                'First, we see the imperative to view this work in cycles with multiple points of entry and modes of engagement.',
              ],
            },
            {
              definition: 'a verb or phrase in the imperative mood.',
              examples: [
                'Noteworthy in this meditation is the use of imperatives and action verbs, which are meant to activate the believer.',
                "Jon's utterance is an imperative, but it is not a command.",
              ],
            },
          ],
          partOfSpeech: 'noun',
        },
      ],
      phonetics: [
        {
          audio:
            '//ssl.gstatic.com/dictionary/static/sounds/20200429/imperative--_us_1.mp3',
          text: 'əmˈperədiv',
        },
      ],
      type: 'data',
      word: 'imperative',
    },
    {
      meaning: [
        {
          definitions: [
            {
              antonyms: ['unimportant', 'optional'],
              definition: 'of vital importance; crucial.',
              examples: [
                'immediate action was imperative',
                'it is imperative that standards be maintained',
                'With reloading it is absolutely imperative we measure at least twice, maybe more.',
                'Illness, death and the cost of hip fractures make prevention imperative.',
                'For a moment, despite the obviously imperative differences in gender, they emerge as the twin epic heroes on the same side, fighting the same war against a common foe.',
                'In order to implement gender reform, it is imperative that gender bias in the legal framework of the country is removed.',
                'Thus, it is imperative that health communication scholars focus their efforts on adolescent patient-physician communication.',
                'It is imperative that couples should communicate in order to know the root of the conflict.',
              ],
              synonyms: [
                'vitally important',
                'of vital importance',
                'all-important',
                'vital',
                'crucial',
                'critical',
                'essential',
                'of the essence',
                'a matter of life and death',
                'of great consequence',
                'necessary',
                'indispensable',
                'exigent',
                'pressing',
                'urgent',
                'required',
                'compulsory',
                'mandatory',
                'obligatory',
              ],
            },
            {
              antonyms: ['submissive'],
              definition: 'giving an authoritative command; peremptory.',
              examples: [
                'the bell pealed again, a final imperative call',
                'The human desire for novelty is twinned with an equally imperative desire for continuity.',
                "It's an imperative and ornate exhortation to lay open your nerves and unabashedly, unapologetically feel.",
              ],
              synonyms: [
                'peremptory',
                'commanding',
                'imperious',
                'authoritative',
                'masterful',
                'lordly',
                'magisterial',
                'autocratic',
                'dictatorial',
                'domineering',
                'overbearing',
                'assertive',
                'firm',
                'insistent',
                'bossy',
                'high-handed',
                'overweening',
              ],
            },
          ],
          partOfSpeech: 'adjective',
        },
        {
          definitions: [
            {
              definition: 'an essential or urgent thing.',
              examples: [
                'free movement of labor was an economic imperative',
                'Such an imperative seems particularly urgent because of the vacuum at the top.',
                'Our successes have highlighted some essential imperatives for how we will continue to do business.',
                'The drama of history and biography is sacrificed to the imperative of ‘covering’ everything in a single volume.',
                'Given the imperative of global competition and the continued flow of efficiency gains from past investments in technology, the efficiency trend will not go into reverse.',
                'Applicants also showed an understanding of the imperative to enable teachers to grow and realize more of their own potential in their chosen profession.',
                'Currently, too many internet users fail to understand, or fail to act on, the imperative to protect themselves for the greater good.',
                'Job stress is caused by the lack of adequate staffing, and by the imperative for laboratory work to be error-free.',
                "Such an indication or a close relative's agreement (based on his knowledge of the donor's attitude and moral values) is imperative.",
                'But it is one of the noblest things this country has ever attempted abroad and it is a moral and strategic imperative that we give it our best shot.',
                'Chief among these challenges are the need for a new type of salesperson and the imperative to win acceptance of value-based prices by third-party payers.',
                'First, we see the imperative to view this work in cycles with multiple points of entry and modes of engagement.',
              ],
            },
            {
              definition: 'a verb or phrase in the imperative mood.',
              examples: [
                'Noteworthy in this meditation is the use of imperatives and action verbs, which are meant to activate the believer.',
                "Jon's utterance is an imperative, but it is not a command.",
              ],
            },
          ],
          partOfSpeech: 'noun',
        },
      ],
      phonetics: [
        {
          audio:
            '//ssl.gstatic.com/dictionary/static/sounds/20200429/imperative--_us_1.mp3',
          text: 'əmˈperədiv',
        },
      ],
      type: 'data',
      word: 'imperative',
    },
  ];
  const getWordFromAPI = (newWord: VocabularyType) => {
    console.log(newWord);
    setNewWord(newWord);
    setIsNewWord(true);
  };

  const testAPI = (s: String) => {
    console.log(s);
  };
  const getMemorizedWords = (words: Array<VocabularyType>) => {
    setMemorizedWords(words);
  };
  const getFavouriteWords = (words: Array<VocabularyType>) => {
    setMemorizedWords(words);
  };

  return (
    <View style={styles.mainContainer}>
      <NavigationContainer handleNewWord={getWordFromAPI} />
      {isNewWord && newWord && (
        <WordContainer word={newWord} onPress={() => setIsValid(false)} />
      )}
      <FeedContainer word={test} />
      <Footer
        handleFavoriteWords={getFavouriteWords}
        handleMemorizedWords={getMemorizedWords}
        testAPIf={testAPI}
      />
    </View>
  );
};

export default ContentContainer;
