import React, {useState} from 'react';

import {Button} from 'react-native-paper';

import styles from './guestBox.styles';

import Guests from '@svg/guests.svg';
import {View, Text} from 'react-native';
import {GuestPicker} from '@organisms/guestPicker';
import {GuestDetail} from '@types/guestDetail';


export type GuestBoxProps = {
  testId?: string;
  guestDetails?: GuestDetail[];
  updateDetails: Function;
};

// Shows the Guest Count and popups the room selections modal on click 

const GuestBox: React.FC<GuestBoxProps> = ({
  testId,
  guestDetails,
  updateDetails,
}) => {
  const [isVisible, setVisible] = useState(false);
  const [guestCount, setCount] = useState(2);

  const updateGuestDetails = (count, guestDetails) => {
    setCount(count);
    updateDetails(guestDetails);
  };

  return (
    <>
      <View style={styles.container} testID={testId}>
        <Button
          icon={Guests}
          onPress={() => {
            setVisible(true);
          }}
          color={'#BFDAF9'}>
          <Text style={styles.guestText}>{guestCount}</Text>
        </Button>
      </View>
      <GuestPicker
        guestDetails={guestDetails}
        visible={isVisible}
        updateDetails={(count, details) => updateGuestDetails(count, details)}
        onClose={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

export default GuestBox;
