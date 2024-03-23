import {View} from 'react-native';
import React, {useEffect, useReducer} from 'react';
import {CText, HeaderComponent} from '@src/components';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import LoadingComp from '@src/components/common/loading';
import {layout, variant} from '@src/themes/theme';
import {ProductListFrag} from '../fragments/ProductListFrag';
import {Colors} from '@src/themes/colors';

interface RouteParams {
  data: object;
}
const reducer = (state: any, action: {type: any; payload: any}) => {
  switch (action.type) {
    case 'FETCH_REQ':
      return {...state, loading: true};
    case 'FETCH_SUCCESS':
      return {...state, loading: false, product: action.payload};
    case 'FETCH_ERROR':
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export const ProductListScreen = () => {
  const route = useRoute();
  const id = route?.params as RouteParams;

  const [{loading, error, product}, dispatch] = useReducer(reducer, {
    loading: true,
    product: [],
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({
        type: 'FETCH_REQ',
        payload: undefined,
      });
      try {
        const result = await axios.get(
          `http://localhost:8000/api/products/id/${id.data}`,
        );
        console.log('result', result);
        dispatch({type: 'FETCH_SUCCESS', payload: result.data});
      } catch (err: any) {
        dispatch({type: 'FETCH_ERROR', payload: err.message});
        console.log('err', err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <View style={[layout.fill, {backgroundColor: Colors.WHITE}]}>
      <HeaderComponent title={product.name} icon={true} />
      {loading ? (
        <LoadingComp />
      ) : error ? (
        <View>
          <CText variant={variant.bodySmall}>{error}</CText>
        </View>
      ) : (
        <ProductListFrag data={product} />
      )}
    </View>
  );
};
