import React, {useEffect, useMemo, useState} from 'react';

import {View, Text} from 'react-native';
import {childrenAge} from '@types/guestDetail';
import Counter from '@atoms/counter';
import ChildAge from '@molecules/childAge';
import styles from './styles';

interface GuestCounterProps {
  count?: number;
  setCount: (number, key) => any;
  isAdult?: boolean;
  childAges?: childrenAge[];
}

// Counter with Guest Type and Dropdown in case of the Children

const GuestCounter: React.FC<GuestCounterProps> = ({
  count = 1,
  setCount = () => {},
  isAdult = true,
  childAges,
}) => {
  const [guestCount, setGuestCount] = useState(0);

  useEffect(() => {
    setGuestCount(count ? count : isAdult ? 2 : 0);
  }, [count]);

  const label = useMemo(() => {
    return isAdult ? 'Adults' : 'Children';
  }, [isAdult]);

  const childrenAges = useMemo(() => {
    if (isAdult) {
      return null;
    } else {
      return (
        <View>
          {childAges && childAges.length > 0 &&
            childAges.map((child, index) => (
              <ChildAge key={child.id} age={child.age} setAge={() => {}} />
            ))}
        </View>
      );
    }
  }, [isAdult, childAges]);

  return (
    <View style={styles.flexOne}>
      <View style={styles.countContainer}>
        <View style={styles.label}>
          <Text>{label}</Text>
        </View>
        <View style={styles.counterView}>
          <Counter
            count={guestCount}
            setCount={(val, key) => {
              setCount(val, key);
            }}
            minVal={0}
            maxVal={2}
          />
        </View>
      </View>
      <View style={styles.childAgeView}>{childrenAges}</View>
    </View>
  );
};

export default GuestCounter;
