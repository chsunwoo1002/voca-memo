import { VocabularyType, ErrorType } from "./word";

export interface NavigationProp {
  handleNewWord: (newWord: VocabularyType | ErrorType) => void;
}
