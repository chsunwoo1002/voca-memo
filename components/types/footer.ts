import { VocabularyType } from "../types/word";

export interface FooterProps {
  handleFavoriteWords: (words: Array<VocabularyType>) => void;
  handleMemorizedWords: (words: Array<VocabularyType>) => void;
}
export interface FooterButtonProps {
  title: string;
  icon: any;
  onPress: () => void;
}
