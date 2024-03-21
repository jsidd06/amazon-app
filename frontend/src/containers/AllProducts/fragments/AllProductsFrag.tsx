import {FlatList, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  CText,
  CardWrapper,
  PrimaryButton,
  RatingComp,
  VGap,
} from '@src/components';
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
              <Image source={{uri: item.image}} style={styles.img} />
              <VGap />
              <CText variant={variant.labelLarge}>{item.name}</CText>
              <VGap />
              <RatingComp
                numberReviews={item.numReviews}
                ratting={item.rating}
              />
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
    width: 160,
    height: MetricsSizes.BASE100,
    resizeMode: 'cover',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
});
