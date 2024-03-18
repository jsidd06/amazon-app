import {Dimensions, PixelRatio} from 'react-native';

// set dimensions for width or height
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

// FONT SIZE CONSTANTS
const pixelRatio = PixelRatio.getFontScale();
// Round to the nearest integer
export const FONTSIZE = {
  px12: Math.round(12 * pixelRatio),
  px13: Math.round(13 * pixelRatio),
  px14: Math.round(14 * pixelRatio),
  px16: Math.round(16 * pixelRatio),
  px20: Math.round(20 * pixelRatio),
  px24: Math.round(24 * pixelRatio),
  px35: Math.round(35 * pixelRatio),
};

let {height, width} = Dimensions.get('window');
let base10 = width / 40;

export const MetricsSizes = {
  //Default Metrics
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
  BASE_HEIGHT: base10 * 6.4,
  BASE_RADIUS: base10 * 2,
  //Sizes Metrics
  TINY: base10 / 2,
  SMALL: base10,
  REGULAR: base10 * 1.5,
  MEDIUM: base10 * 2,
  LARGE: base10 * 3,
  XLARGE: base10 * 4,
  XXLARGE: base10 * 5,
  BASE80: base10 * 8,
  BASE100: base10 * 10,
  BASE200: base10 * 20,

  //Negative Metrics
  NEG_TINY: -base10 / 2,
  NEG_SMALL: -base10,
  NEG_REGULAR: -base10 * 1.5,

  //Rating width
  RATING_SMALL: width / 4,
  RATING_MEDIUM: width / 3,
  RATING_LARGE: width / 2,
  RATING_XLARGE: width / 1.5,
  RATING_XXLARGE: width,
};

export const variant = {
  displayLarge: 'displayLarge',
  displayMedium: 'displayMedium',
  displaySmall: 'displaySmall',
  headlineLarge: 'headlineLarge',
  headlineMedium: 'headlineMedium',
  headlineSmall: 'headlineSmall',
  titleLarge: 'titleLarge',
  titleMedium: 'titleMedium',
  titleSmall: 'titleSmall',
  bodyLarge: 'bodyLarge',
  bodyMedium: 'bodyMedium',
  bodySmall: 'bodySmall',
  labelLarge: 'labelLarge',
  labelMedium: 'labelMedium',
  labelSmall: 'labelSmall',
};

export const layout = {
  alignCenter: {
    alignItems: 'center' as 'center',
    justifyContent: 'center' as 'center',
  },
  rowJCenter: {
    flexDirection: 'row' as 'row',
    justifyContent: 'space-between' as 'space-between',
    alignItems: 'center' as 'center',
  },
  row: {
    flexDirection: 'row' as 'row',
  },
  justifySBContent: {
    flexDirection: 'row' as 'row',
    justifyContent: 'space-between' as 'space-between',
  },
  fill: {
    flex: 1,
  },
  positionA: {position: 'absolute' as 'absolute'},
  positionR: {position: 'relative' as 'relative'},
  rowACenter: {
    flexDirection: 'row' as 'row',
    alignItems: 'center' as 'center',
  },
  rowCCenter: {
    flexDirection: 'row' as 'row',
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center',
  },
  columnSFlexStart: {
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between' as 'space-between',
    alignItems: 'flex-start' as 'flex-start',
  },
  column: {
    flexDirection: 'column' as 'column',
  },
  flexAStart: {
    justifyContent: 'flex-start' as 'flex-start',
    alignItems: 'flex-start' as 'flex-start',
  },
  flexAEnd: {
    justifyContent: 'flex-end' as 'flex-end',
    alignItems: 'flex-end' as 'flex-end',
  },
  rowFlexEnd: {
    flexDirection: 'row' as 'row',
    justifyContent: 'flex-end' as 'flex-end',
    alignItems: 'flex-end' as 'flex-end',
  },
  rowFlexStart: {
    flexDirection: 'row' as 'row',
    justifyContent: 'flex-start' as 'flex-start',
    alignItems: 'flex-start' as 'flex-start',
  },
  flexStart: {
    justifyContent: 'flex-start' as 'flex-start',
  },
  flexEnd: {
    justifyContent: 'flex-end' as 'flex-end',
  },
};

export const Horizontal = {
  HorizontalT: MetricsSizes.TINY,
  HorizontalS: MetricsSizes.SMALL,
  HorizontalM: MetricsSizes.MEDIUM,
  HorizontalL: MetricsSizes.LARGE,
  HorizontalXL: MetricsSizes.XLARGE,
  HorizontalXXL: MetricsSizes.XXLARGE,
};
