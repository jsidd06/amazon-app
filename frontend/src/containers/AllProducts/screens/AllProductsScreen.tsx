/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, View} from 'react-native';
import React, {useEffect, useReducer, useState} from 'react';
import {CText, HeaderComponent} from '@src/components';
import HomeFrag from '../fragments/AllProductsFrag';
import {Horizontal, layout, variant} from '@src/themes/theme';
import {Colors} from '@src/themes/colors';
import axios from 'axios';
import LoadingComp from '@src/components/common/loading';
import {ErrorComp} from '@src/components/common/error';

const reducer = (state: any, action: {type: any; payload: any}) => {
  switch (action.type) {
    case 'FETCH_REQ':
      return {...state, loading: true};
    case 'FETCH_SUCCESS':
      return {...state, loading: false, products: action.payload};
    case 'FETCH_ERROR':
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export const AllProductsScreen = () => {
  const [{loading, error, products}, dispatch] = useReducer(reducer, {
    loading: true,
    products: [],
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({
        type: 'FETCH_REQ',
        payload: undefined,
      });
      try {
        const result = await axios.get('http://localhost:8000/api/products');
        dispatch({type: 'FETCH_SUCCESS', payload: result.data});
      } catch (err: any) {
        dispatch({type: 'FETCH_ERROR', payload: err.message});
      }
    };
    fetchData();
  }, []);
  return (
    <View style={[layout.fill, styles.root]}>
      <HeaderComponent title="Amazon" />
      <CText size={20} variant={variant.displayMedium} style={[styles.text]}>
        Featured Products
      </CText>
      {loading ? (
        <LoadingComp />
      ) : error ? (
        <ErrorComp error={error} />
      ) : (
        <HomeFrag data={products} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.WHITE,
  },
  text: {marginHorizontal: Horizontal.HorizontalM},
});
