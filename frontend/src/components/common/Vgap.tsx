import {View} from 'react-native';
import React from 'react';
import {MetricsSizes} from '@src/themes/theme';

interface VGapProps {
  gap?: any;
}

export const VGap = ({gap}: VGapProps) => {
  return <View style={[{marginVertical: gap ? gap : MetricsSizes.TINY}]} />;
};
