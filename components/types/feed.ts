import { VocabularyType } from "./word";

export interface FeedContainerProps {
  word: Array<VocabularyType> | undefined;
}

export interface FeedProps {
  word: VocabularyType;
}

export interface FeedButtonProps {
  icon: any;
  onPress: () => void;
}
