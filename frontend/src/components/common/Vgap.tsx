import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MetricsSizes} from '@src/themes/theme';

interface VGapProps {
  gap?: any;
}

export const VGap = ({gap}: VGapProps) => {
  return <View style={[styles.root, gap]} />;
};

const styles = StyleSheet.create({
  root: {
    marginVertical: MetricsSizes.TINY,
  },
});
