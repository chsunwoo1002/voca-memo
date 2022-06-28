import React from 'react';
import {ScrollView} from 'react-native';
import Feed from '../Feed';
import {FeedContainerProps} from '../types/feed';
import Styles from '../styles/feed';

const FeedContainer: React.FC<FeedContainerProps> = ({word}) => {
  return (
    <ScrollView contentContainerStyle={Styles.feedsContainer}>
      {word &&
        word.map((w, index) => {
          return <Feed key={index} word={w} />;
        })}
    </ScrollView>
  );
};

export default FeedContainer;
