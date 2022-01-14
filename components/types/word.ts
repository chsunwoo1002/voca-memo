export interface VocabularyType {
  wordObj: {
    word: string;
    phonetic: string;
    phonetics: Array<PhoneticType>;
    origin: string;
    meanings: Array<MeaningType>;
  };
}

export interface PhoneticType {
  text: string;
  audio: string;
}

export interface MeaningType {
  partOfSpeech: string;
  definitions: Array<DefinitionType>;
}

export interface DefinitionType {
  definition: string;
  synonym?: Array<string> | never[];
  antonym?: Array<string> | never[];
}

export interface FilpCardProps {
  word: VocabularyType;
}
