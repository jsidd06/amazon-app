import {Pressable, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '@src/themes/colors';
import {CText} from '..';
import {Horizontal, MetricsSizes, layout, variant} from '@src/themes/theme';
import {Icons} from '@src/themes/icons';
import {useNavigation} from '@react-navigation/native';

interface HeaderComponentProps {
  title?: string;
  icon?: any;
  rightIcon?: boolean;
  heading?: string;
}

export const HeaderComponent = ({
  title,
  icon,
  rightIcon,
  heading,
}: HeaderComponentProps) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.WHITE,
      }}>
      {rightIcon !== icon ? (
        <Pressable
          onPress={() => navigation.goBack()}
          style={[layout.rowACenter, styles.imgCtn]}>
          <Icons.LeftArrow name="arrow-left" size={25} color={Colors.BLACK} />
          <CText
            size={20}
            style={{...styles.text, marginLeft: Horizontal.HorizontalM}}
            variant={variant.displayMedium}>
            {title}
          </CText>
        </Pressable>
      ) : (
        rightIcon !== title && (
          <CText size={22} variant={variant.displayMedium} style={styles.text}>
            {title}
          </CText>
        )
      )}
      {rightIcon && (
        <View style={[layout.rowJCenter]}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={[layout.rowACenter, styles.imgCtn]}>
            <Icons.LeftArrow name="arrow-left" size={25} color={Colors.BLACK} />
            <CText
              size={20}
              style={{...styles.text, marginLeft: Horizontal.HorizontalM}}
              variant={variant.displayMedium}>
              {heading}
            </CText>
          </Pressable>
          <Pressable style={{marginHorizontal: Horizontal.HorizontalS}}>
            <Icons.store
              name="storefront-outline"
              size={25}
              color={Colors.BLACK}
            />
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  img: {
    width: MetricsSizes.LARGE,
    height: MetricsSizes.LARGE,
    resizeMode: 'contain',
  },
  imgCtn: {
    marginHorizontal: Horizontal.HorizontalS,
  },
});
