import {FlatList, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {CText, CardWrapper, PrimaryButton, VGap} from '@src/components';
import {MetricsSizes, layout, variant} from '@src/themes/theme';
import {Colors} from '@src/themes/colors';
import {useNavigator} from '@src/utils/helper';
interface AllProductsFragProps {
  data?: any[];
}

const AllProductsFrag = ({data}: AllProductsFragProps) => {
  const {navigateToRoute} = useNavigator();
  const clickHandler = (item: any) => {
    navigateToRoute('ProductListScreen', {data: item.name});
  };
  const renderItem = (item: any) => {
    return (
      <>
        <View style={[layout.fill, layout.rowCCenter, styles.subRoot]}>
          <CardWrapper>
            <View style={[layout.alignCenter]}>
              <VGap />
              <Image source={item.image} style={styles.img} />
              <VGap />
              <CText variant={variant.labelLarge}>{item.name}</CText>
              <VGap />
              <CText variant={variant.labelMedium}>$ {item.price}</CText>
              <VGap />
              <PrimaryButton onPress={() => clickHandler(item)}>
                Add to cart
              </PrimaryButton>
              <VGap />
            </View>
          </CardWrapper>
        </View>
      </>
    );
  };
  return (
    <>
      <FlatList
        data={data}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={() => Math.random().toLocaleString()}
        numColumns={2}
        style={styles.root}
      />
    </>
  );
};

export default AllProductsFrag;

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.WHITE,
  },
  subRoot: {
    marginVertical: MetricsSizes.SMALL,
  },
  img: {
    width: MetricsSizes.BASE100,
    height: MetricsSizes.BASE100,
    resizeMode: 'contain',
    borderRadius: 12,
  },
});
