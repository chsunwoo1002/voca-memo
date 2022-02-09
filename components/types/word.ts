export interface VocabularyType {
  word: string;
  phonetic: string;
  type: string;
  phonetics: Array<PhoneticType>;
  origin: string;
  meanings: Array<MeaningType>;
}

export interface ErrorType {
  information: string;
  type: string;
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
  examples: Array<string>;
  synonym?: Array<string> | never[];
  antonym?: Array<string> | never[];
}

export interface FilpCardProps {
  word: VocabularyType;
}
