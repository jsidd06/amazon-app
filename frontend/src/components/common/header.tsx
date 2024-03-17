import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Colors} from '@src/themes/colors';

export const HeaderComponent = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.WHITE,
      }}>
      <Text>HeaderComponent</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
