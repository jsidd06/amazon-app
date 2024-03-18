import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '@src/themes/colors';
import {CText} from '..';
import {variant} from '@src/themes/theme';

interface HeaderComponentProps {
  title?: string;
}

export const HeaderComponent = ({title}: HeaderComponentProps) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.WHITE,
      }}>
      <CText variant={variant.displayMedium} style={styles.text}>
        {title}
      </CText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
});
