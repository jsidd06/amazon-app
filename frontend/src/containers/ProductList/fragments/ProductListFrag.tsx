import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {CText, PrimaryButton, RatingComp, VGap} from '@src/components';
import {Horizontal, MetricsSizes, layout, variant} from '@src/themes/theme';
import {Colors} from '@src/themes/colors';

interface ProductListFragProps {
  data: any;
}

export const ProductListFrag = ({data}: ProductListFragProps) => {
  return (
    <View style={[layout.fill]}>
      <View style={[layout.rowCCenter]}>
        <Image
          source={{
            uri: data.image,
          }}
          style={styles.img}
        />
      </View>
      <View
        style={[
          {
            marginHorizontal: Horizontal.HorizontalS,
            marginVertical: Horizontal.HorizontalS,
          },
        ]}>
        <CText size={22} variant={variant.headlineLarge}>
          {data.name}
        </CText>
        <RatingComp
          style={[layout.flexStart]}
          ratting={data.rating}
          numberReviews={data.numReviews}
        />
        <VGap />
        <CText fontWeight="bold" variant={variant.bodySmall}>
          Price: <CText fontWeight="400"> $ {data.price}</CText>
        </CText>
        <VGap />
        <CText fontWeight="bold" variant={variant.bodySmall}>
          Description: <CText fontWeight="400">{data.description}</CText>
        </CText>
        <VGap />
        <CText
          fontWeight="bold"
          style={[layout.rowCCenter]}
          variant={variant.bodySmall}>
          Status:{' '}
          {data.countInStock > 0 ? (
            <View style={[layout.alignCenter, styles.status]}>
              <CText fontWeight="400" color={Colors.WHITE}>
                In Stock
              </CText>
            </View>
          ) : (
            <View
              style={[
                layout.alignCenter,
                styles.status,
                {backgroundColor: Colors.RED},
              ]}>
              <CText fontWeight="400" color={Colors.WHITE}>
                Unavailable
              </CText>
            </View>
          )}
        </CText>
        <VGap gap={MetricsSizes.MEDIUM} />
        {data.countInStock > 0 && (
          <View style={[layout.alignCenter]}>
            <PrimaryButton style={styles.btn}>Add to Cart</PrimaryButton>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    resizeMode: 'cover',
    height: MetricsSizes.SCREEN_HEIGHT * 0.5,
    flex: 1,
    borderRadius: 8,
    marginHorizontal: Horizontal.HorizontalS,
  },
  status: {
    backgroundColor: Colors.GREEN,
    height: MetricsSizes.MEDIUM,
    width: MetricsSizes.BASE100,
    borderRadius: 8,
  },
  btn: {width: '100%'},
});
