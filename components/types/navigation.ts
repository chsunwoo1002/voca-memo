import { VocabularyType } from "./word";

export interface NavigationProp {
  handleNewWord: (newWord: VocabularyType) => void;
}
