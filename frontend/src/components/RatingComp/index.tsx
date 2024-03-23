/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import {Icons} from '@src/themes/icons';
import {Colors} from '@src/themes/colors';
import {layout, variant} from '@src/themes/theme';
import {CText} from '..';

interface RatingCompProps {
  ratting: any;
  numberReviews: number;
  style?: any;
}

export const RatingComp = ({
  ratting,
  numberReviews,
  style,
}: RatingCompProps) => {
  return (
    <View style={[layout.rowCCenter, style]}>
      {ratting >= 1 ? (
        <Icons.Star name="star" size={15} color={Colors.YELLOW} />
      ) : ratting >= 0.5 ? (
        <Icons.EmptyStar name="star-o" size={15} color={Colors.YELLOW} />
      ) : (
        <Icons.EmptyStar
          name="star-half-empty"
          size={15}
          color={Colors.YELLOW}
        />
      )}
      {ratting >= 2 ? (
        <Icons.Star name="star" size={15} color={Colors.YELLOW} />
      ) : ratting >= 1.5 ? (
        <Icons.EmptyStar name="star-o" size={15} color={Colors.YELLOW} />
      ) : (
        <Icons.EmptyStar
          name="star-half-empty"
          size={15}
          color={Colors.YELLOW}
        />
      )}
      {ratting >= 4 ? (
        <Icons.Star name="star" size={15} color={Colors.YELLOW} />
      ) : ratting >= 3.5 ? (
        <Icons.EmptyStar name="star-o" size={15} color={Colors.YELLOW} />
      ) : (
        <Icons.EmptyStar
          name="star-half-empty"
          size={15}
          color={Colors.YELLOW}
        />
      )}
      {ratting >= 5 ? (
        <Icons.Star name="star" size={15} color={Colors.YELLOW} />
      ) : ratting >= 1.5 ? (
        <Icons.EmptyStar name="star-o" size={15} color={Colors.YELLOW} />
      ) : (
        <Icons.EmptyStar
          name="star-half-empty"
          size={15}
          color={Colors.YELLOW}
        />
      )}
      {ratting >= 4.5 ? (
        <Icons.Star name="star" size={15} color={Colors.YELLOW} />
      ) : ratting >= 1.5 ? (
        <Icons.EmptyStar name="star-o" size={15} color={Colors.YELLOW} />
      ) : (
        <Icons.EmptyStar
          name="star-half-empty"
          size={15}
          color={Colors.YELLOW}
        />
      )}
      <View>
        <CText variant={variant.titleSmall} style={{fontSize: 12}}>
          {' '}
          {numberReviews} Reviews
        </CText>
      </View>
    </View>
  );
};
