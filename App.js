import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import cepScreen from './screens/cep/cepScreens';
import 'react-native-gesture-handler'; //apenas para o nativo android
//const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="CEP" component={cepScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}