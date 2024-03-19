import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CText, HeaderComponent} from '@src/components';
import HomeFrag from '../fragments/AllProductsFrag';
import {Horizontal, layout, variant} from '@src/themes/theme';
import {Colors} from '@src/themes/colors';
import axios from 'axios';

export const AllProductsScreen = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:8000/api/products');
      console.log('result', result.data);
      setAllProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <View style={[layout.fill, styles.root]}>
      <HeaderComponent title="Amazon" />
      <CText variant={variant.displayMedium} style={[styles.text]}>
        Featured Products
      </CText>
      <HomeFrag data={allProducts} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.WHITE,
  },
  text: {marginHorizontal: Horizontal.HorizontalM},
});
