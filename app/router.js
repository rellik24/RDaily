import { createStackNavigator, createSwitchNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import MainPage from './pages/MainPage'
import { main } from './routerPath'
// // Declare Main Route
const headerStyle = {
  initialRouteName: main.DevicePage,
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#0D47A1',
      height: 36
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 16
    },
  },
}

const MainStack = createBottomTabNavigator({
  Device: {
    screen: createStackNavigator(
      {
        [main.mainpage]: MainPage,
      },
      headerStyle,
    ),
  },

},
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        height: scale(42),
      },
      labelStyle: {
        fontSize: scale(10)
      }
    },
  }
)

const RootStack = createSwitchNavigator(
  {
    Root: MainStack,
  },
  {
    initialRouteName: 'Root',
  },
)
const Root = createAppContainer(RootStack);

export default Root;