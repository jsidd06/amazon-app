import {Pressable, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import {CText} from '..';
import {MetricsSizes, layout, variant} from '@src/themes/theme';
import {Colors} from '@src/themes/colors';

interface PrimaryButtonProps {
  children?: ReactNode;
  style?: any;
  onPress?: any;
}

export const PrimaryButton = ({
  children,
  style,
  onPress,
}: PrimaryButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.btn, style, layout.alignCenter]}>
      <CText color={Colors.WHITE} size={14} variant={variant.labelSmall}>
        {children}
      </CText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.PRIMARY,
    width: MetricsSizes.BASE100,
    height: MetricsSizes.XLARGE,
    borderRadius: 8,
  },
});
