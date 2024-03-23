import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CText} from '..';
import {variant} from '@src/themes/theme';
import {Colors} from '@src/themes/colors';

interface ErrorCompProps {
  error: string;
}

export const ErrorComp = ({error}: ErrorCompProps) => {
  return (
    <View style={{backgroundColor: Colors.RED}}>
      <CText
        color={Colors.WHITE}
        size={16}
        style={styles.text}
        variant={variant.headlineLarge}>
        {error}
      </CText>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {textAlign: 'center'},
});
