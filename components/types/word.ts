export interface VocabularyType {
  word: string;
  phonetic: string;
  phonetics: Array<PhoneticType>;
  origin: string;
  meanings: Array<MeaningType>;
}

export interface ErrorType {
  message: string;
  resolution: string;
  title: string;
}

export interface PhoneticType {
  text: string;
  audio?: string;
}

export interface MeaningType {
  partOfSpeech: string;
  definitions: Array<DefinitionType>;
}

export interface DefinitionType {
  definition: string;
  example: string;
  synonym?: Array<string> | never[];
  antonym?: Array<string> | never[];
}

export interface FilpCardProps {
  word: VocabularyType;
}
