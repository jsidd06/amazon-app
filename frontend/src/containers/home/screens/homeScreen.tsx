import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CText, HeaderComponent} from '@src/components';
import HomeFrag from '../fragments/homeFrag';
import {homeData} from '../data';
import {Horizontal, layout, variant} from '@src/themes/theme';
import {Colors} from '@src/themes/colors';

export const HomeScreen = () => {
  return (
    <View style={[layout.fill, styles.root]}>
      <HeaderComponent title="Amazon" />
      <CText variant={variant.displayMedium} style={[styles.text]}>
        Featured Products
      </CText>
      <HomeFrag data={homeData.products} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.WHITE,
  },
  text: {marginHorizontal: Horizontal.HorizontalM},
});
