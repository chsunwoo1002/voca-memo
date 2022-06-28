import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import FlipVocaCard from './components/FlipVocaCard';
import {FeedProps} from './types/feed';
import Styles from './styles/feed';
import IconButton from '../common/IconButton';
import ExampleCard from './components/ExampleCard';
import FeedExampleButton from './components/FeedExampleButton';
import {feedIcons} from '../../modules/iconModules';

const Feed: React.FC<FeedProps> = ({word}) => {
  const [isFavourite, setIsFavourite] = useState<Boolean>(false);
  const [isMemorized, setIsMemorized] = useState<Boolean>(false);
  const [isExamplePage, setIsExamplePage] = useState<Boolean>(false);
  const [additionalExample, setAdditionalExample] = useState<string>('');
  const [examples, setExamples] = useState<Array<string>>([
    'apple is apple',
    'banana is banana',
    'cinammon',
    'de',
    'ee',
  ]);

  const switchButtonValue = () => {
    console.log('clicked');
  };
  const playSound = () => {};
  const updateExampleString = (example: string) => {
    setAdditionalExample(example);
  };
  const submitUpdateExample = () => {
    setExamples(prev => [additionalExample, ...prev]);
  };
  const switchToExampleCoponent = () => {
    setIsExamplePage(prev => {
      return !prev;
    });
  };

  if (!isExamplePage) {
    return (
      <View style={Styles.feedContainer}>
        <FlipVocaCard word={word} />
        <View style={Styles.feedButtonsContainer}>
          <IconButton
            onPress={playSound}
            icon={feedIcons.play}
            buttonStyle={Styles.feedButton}
            buttonIconStyle={Styles.feedButtonIcon}
          />
          <IconButton
            onPress={switchButtonValue}
            icon={feedIcons.like}
            buttonStyle={Styles.feedButton}
            buttonIconStyle={Styles.feedButtonIcon}
          />
          <IconButton
            onPress={switchButtonValue}
            icon={feedIcons.memorized}
            buttonStyle={Styles.feedButton}
            buttonIconStyle={Styles.feedButtonIcon}
          />
        </View>
        {examples.length > 0 ? (
          <View style={Styles.feedActiveExamplesContainer}>
            <FeedExampleButton
              numOfExamples={examples.length}
              onPress={switchToExampleCoponent}
            />
          </View>
        ) : (
          <View style={Styles.feedDeactiveExampleContainer}>
            <Text> there is no examples here...please add them</Text>
          </View>
        )}
        <View style={Styles.feedExampleContainer}>
          <TextInput
            style={Styles.feedExampleInput}
            onChangeText={updateExampleString}
            placeholder="add example here"
            inlineImageLeft="search"
            onSubmitEditing={submitUpdateExample}
          />
          <IconButton
            onPress={submitUpdateExample}
            icon={feedIcons.add}
            buttonStyle={Styles.feedButton}
            buttonIconStyle={Styles.feedButtonIcon}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={Styles.feedContainer}>
        <View style={Styles.exampleIconContainer}>
          <IconButton
            onPress={switchToExampleCoponent}
            icon={feedIcons.back}
            buttonStyle={Styles.exampleButton}
            buttonIconStyle={Styles.exampleButtonIcon}
          />
        </View>
        {examples.length > 0 && (
          <View style={Styles.examplesContainer}>
            {examples.map((example, index) => {
              return <ExampleCard key={index} example={example} />;
            })}
          </View>
        )}
      </View>
    );
  }
};

export default Feed;
