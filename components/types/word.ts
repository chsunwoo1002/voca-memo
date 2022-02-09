export interface VocabularyType {
  word: string;
  phonetic?: string;
  type: string;
  phonetics: Array<PhoneticType>;
  origin?: string;
  meaning: Array<MeaningType>;
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
  examples?: Array<string>;
  synonyms?: Array<string> | never[];
  antonyms?: Array<string> | never[];
}

export interface FilpCardProps {
  word: VocabularyType;
}
