import {useNavigation} from '@react-navigation/native';
import {NavigationContainerRef} from '@react-navigation/native';

export const useNavigator = () => {
  const navigation = useNavigation<NavigationContainerRef>();

  const navigateToRoute = (routeName: string, params?: object) => {
    navigation.navigate(routeName, params);
  };

  return {
    navigateToRoute,
  };
};
