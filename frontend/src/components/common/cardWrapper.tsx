import {Pressable, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import {Card} from 'react-native-paper';
import {Colors} from '@src/themes/colors';
import {MetricsSizes} from '@src/themes/theme';

interface CardProps {
  children?: ReactNode;
  style?: any;
  onPress?: any;
}

export const CardWrapper = ({children, style, onPress}: CardProps) => {
  return (
    <Pressable onPress={onPress}>
      <Card style={[styles.root, style]}>{children}</Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: Colors.LIGHT_WHITISH,
    borderRadius: 16,
    width: MetricsSizes.SCREEN_WIDTH * 0.4,
    backgroundColor: Colors.WHITE,
  },
});
