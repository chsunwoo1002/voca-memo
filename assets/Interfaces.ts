export interface VocaValueProps {
  wordObj: {
    word: string;
    phonetic: string;
    phonetics: Array<phoneticType>;
    origin: string;
    meanings: Array<meaning>;
  };
}

export interface phoneticType {
  text: string;
  audio: string;
}

export interface meaning {
  partOfSpeech: string;
  definitions: Array<definition>;
}

export interface definition {
  definition: string;
  synonym?: Array<string> | never[];
  antonym?: Array<string> | never[];
}
