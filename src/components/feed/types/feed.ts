import Sound from 'react-native-sound';
import {VocabularyType} from '../../common/types/word';

export interface FeedContainerProps {
  word: Array<VocabularyType> | undefined;
}

export interface FeedProps {
  word: VocabularyType;
}

export interface FeedExampleButtonProps {
  numOfExamples: number;
  onPress: () => void;
}

export interface FeedButtonContainer {
  sound: Sound;
}
