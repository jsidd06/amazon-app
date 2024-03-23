import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconProps} from 'react-native-vector-icons/Icon';

const Icons = {
  LeftArrow: (
    props: (React.ClassAttributes<Icon> & IconProps) | null | undefined,
  ) => React.createElement(Icon, {name: 'arrow-left', ...props}),
  RightArrow: (
    props: (React.ClassAttributes<Icon> & IconProps) | null | undefined,
  ) => React.createElement(Icon, {name: 'angle-right', ...props}),
  Star: (props: (React.ClassAttributes<Icon> & IconProps) | null | undefined) =>
    React.createElement(Icon, {name: 'star', ...props}),
  EmptyStar: (
    props: (React.ClassAttributes<Icon> & IconProps) | null | undefined,
  ) => React.createElement(Icon, {name: 'star-half-full', ...props}),
  store: (
    props: (React.ClassAttributes<Icon> & IconProps) | null | undefined,
  ) => React.createElement(Icon, {name: 'storefront-outline', ...props}),
};

export {Icons};
