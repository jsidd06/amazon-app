import {StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '@src/themes/colors';
import {Text} from 'react-native-paper';
import {FONTSIZE} from '@src/themes/theme';

interface CTextProps {
  children?: React.ReactNode;
  style?: any;
  variant?: any;
  size?: number;
  fontWeight?: string;
  color?: string;
}

export const CText = ({
  children,
  style,
  variant,
  size,
  fontWeight,
  color,
}: CTextProps) => {
  return (
    <Text
      variant={variant}
      style={[
        styles.text,
        style,
        {fontSize: size, fontWeight: fontWeight, color: color},
      ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.BLACK,
    fontSize: FONTSIZE.px16,
  },
});
