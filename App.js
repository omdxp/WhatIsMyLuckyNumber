import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Platform,
} from 'react-native';

export default function App() {
  const [text, setText] = useState('World');
  const [textColor, setTextColor] = useState('black');
  const [backgroundColor, setBackgroundColor] = useState('skyblue');
  const textList = [
    'Sunshine',
    'Beautiful',
    'Awesome',
    'Real',
    'Really super',
    'Super',
    'Smart',
    'Dear',
    'Hero',
    'Rock',
  ];
  return (
    <View
      style={[styles.container, { backgroundColor: backgroundColor }]}
    >
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setText(textList[Math.floor(Math.random() * 10)]);
            setTextColor(`#${Math.floor(Math.random() * 1000)}FF`);
            setBackgroundColor(
              `#FF${Math.floor(Math.random() * 1000)}`,
            );
            if (Platform.OS === 'android') {
              ToastAndroid.show(
                `${Math.floor(
                  Math.random() * 10,
                )} is your lucky number!`,
                ToastAndroid.SHORT,
              );
            }
          }}
        >
          <Text style={[styles.title, { color: textColor }]}>
            Hello, {text}!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
  row: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  title: {
    justifyContent: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    width: 500,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});
