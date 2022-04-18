import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import Feed from '../Feed';
import { FeedContainerProps } from '../types/feed';
import { VocabularyType } from '../../common/types/word';
import Styles from '../styles/feed';

const FeedContainer: React.FC<FeedContainerProps> = ({ word }) => {
  const [words, setWords] = useState<Array<VocabularyType>>([]);
  // if (word !== undefined) {
  //   console.log(word);
  //   setWords((prev) => [...prev, word]);
  // }
  return (
    <ScrollView contentContainerStyle={Styles.feedsContainer}>
      {word &&
        word.map((w, index) => {
          return <Feed key={index} word={w}></Feed>;
        })}
    </ScrollView>
  );
};

export default FeedContainer;
