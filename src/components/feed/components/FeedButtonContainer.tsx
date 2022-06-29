import React, {useState} from 'react';
import {View} from 'react-native';
import IconButton from '../../common/IconButton';
import Styles from '../styles/feed';
import {feedIcons} from '../../../modules/iconModules';
import {FeedButtonContainer} from '../types/feed';

const FeedButtonsContainer: React.FC<FeedButtonContainer> = ({sound}) => {
  const [isPlay, setIsPlay] = useState<Boolean>(false);

  const playSound = () => {
    setIsPlay(prev => !prev);
    sound.play(success => {
      if (success) {
        setIsPlay(prev => !prev);
      } else {
        console.log('no playing');
      }
    });
  };

  const switchButtonValue = () => {
    console.log('clicked');
  };

  return (
    <View style={Styles.feedButtonsContainer}>
      <IconButton
        onPress={playSound}
        icon={!isPlay ? feedIcons.play : feedIcons.pause}
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
  );
};

export default FeedButtonsContainer;
