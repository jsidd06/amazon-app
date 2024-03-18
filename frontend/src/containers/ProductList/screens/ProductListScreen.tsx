import {StyleSheet, View} from 'react-native';
import React from 'react';
import {HeaderComponent} from '@src/components';
import {useRoute} from '@react-navigation/native';

export const ProductListScreen = () => {
  const route = useRoute();
  console.log('route', route?.params?.data);
  const name = route?.params?.data;
  return (
    <View>
      <HeaderComponent title={name} icon={true} />
    </View>
  );
};

const styles = StyleSheet.create({});
