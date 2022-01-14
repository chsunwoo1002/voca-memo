import { VocabularyType } from "./word";

export interface NavigationProp {
  handleNewWord: (newWord: Array<VocabularyType>) => void;
}
