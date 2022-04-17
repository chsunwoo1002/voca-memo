import { VocabularyType, ErrorType } from '../../common/types/word';

export interface NavigationProp {
  handleNewWord: (newWord: VocabularyType) => void;
}
