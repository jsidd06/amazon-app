import {Pressable, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '@src/themes/colors';
import {CText} from '..';
import {Horizontal, MetricsSizes, layout, variant} from '@src/themes/theme';
import {Icons} from '@src/themes/icons';
import {useNavigation} from '@react-navigation/native';

interface HeaderComponentProps {
  title?: string;
  icon?: any;
}

export const HeaderComponent = ({title, icon}: HeaderComponentProps) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.WHITE,
      }}>
      {icon ? (
        <Pressable
          onPress={() => navigation.goBack()}
          style={[layout.rowACenter, styles.imgCtn]}>
          <Icons.LeftArrow
            name="long-arrow-left"
            size={25}
            color={Colors.BLACK}
          />
          <CText
            style={{...styles.text, marginLeft: Horizontal.HorizontalM}}
            variant={variant.displayMedium}>
            {title}
          </CText>
        </Pressable>
      ) : (
        <CText variant={variant.displayMedium} style={styles.text}>
          {title}
        </CText>
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
    marginHorizontal: Horizontal.HorizontalM,
  },
});
