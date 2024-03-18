import {View} from 'react-native';
import React from 'react';
import {HeaderComponent} from '@src/components';
import HomeFrag from '../fragments/homeFrag';
import {homeData} from '../data';

export const HomeScreen = () => {
  return (
    <View style={[]}>
      <HeaderComponent title="Amazon" />
      <HomeFrag data={homeData.products} />
    </View>
  );
};

// const styles = StyleSheet.create({});
