import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import NormalChat from './src/screens/Normal';
import TranslateChat from './src/screens/Translate';
import Settings from './src/screens/Settings';
import { TouchableOpacity, View, Image, Text, StyleSheet, Animated } from 'react-native';
import CustomHeader from './src/components/ui/CustomHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { useAppSelector } from './src/store/hooks';
import { LightTheme, DarkTheme } from './src/config/Theme';
import Chat from './src/screens/Chat';
import FormAuth from './src/components/layout/FormAuth';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

interface TabBarIconProps {
  color: string;
  size: number;
  focused: boolean;
}

const CustomTabBarButton = ({ children, onPress, accessibilityState }: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ scale: accessibilityState?.selected ? 1.1 : 1 }],
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

const TabNavigator = () => {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  const theme = currentTheme === 'light' ? LightTheme : DarkTheme;
  const nameTitleChat = useAppSelector((state) => state.theme.nameTitleChat);
  const nameTitleHeader = nameTitleChat + ' Chat';

  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarStyle: {
          width: '100%',
          height: 70,
          backgroundColor: theme.colors.surfaceVariant,
          paddingBottom: 20,
          paddingTop: 8,
          boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
          elevation: 0,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.primaryContainer,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
      }}
    >
      <Tab.Screen
        name="Chats"
        component={NormalChat}
        options={{
          headerShown: true,
          header: () => <CustomHeader title={nameTitleHeader} />,
          tabBarIcon: ({ color, size, focused }: TabBarIconProps) => (
            <Animated.View
              style={{
                transform: [{ scale: focused ? 1.1 : 1 }],
              }}
            >
              <Image
                source={require('./src/assets/icon/chat.png')}
                style={{ 
                  width: size, 
                  height: size, 
                  tintColor: color,
                  opacity: focused ? 1 : 0.7,
                }}
              />
            </Animated.View>
          ),
        }}
      />
      <Tab.Screen
        name="Translate"
        component={TranslateChat}
        options={{
          headerShown: true,
          header: () => <CustomHeader title="Translate" />,
          tabBarIcon: ({ color, size, focused }: TabBarIconProps) => (
            <Animated.View
              style={{
                transform: [{ scale: focused ? 1.1 : 1 }],
              }}
            >
              <Image
                source={require('./src/assets/icon/translate.png')}
                style={{ 
                  width: size, 
                  height: size, 
                  tintColor: color,
                  opacity: focused ? 1 : 0.7,
                }}
              />
            </Animated.View>
          ),
        }}
      />
      <Tab.Screen
        name="Voice"
        component={TranslateChat}
        options={{
          headerShown: true,
          header: () => <CustomHeader title="Translate" />,
          tabBarIcon: ({ color, size, focused }: TabBarIconProps) => (
            <Animated.View
              style={{
                transform: [{ scale: focused ? 1.1 : 1 }],
              }}
            >
              <Image
                source={require('./src/assets/icon/mic.png')}
                style={{ 
                  width: size, 
                  height: size, 
                  tintColor: color,
                  opacity: focused ? 1 : 0.7,
                }}
              />
            </Animated.View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: true,
          header: () => <CustomHeader title="Settings" />,
          tabBarIcon: ({ color, size, focused }: TabBarIconProps) => (
            <Animated.View
              style={{
                transform: [{ scale: focused ? 1.1 : 1 }],
              }}
            >
              <Image
                source={require('./src/assets/icon/setting.png')}
                style={{ 
                  width: size, 
                  height: size, 
                  tintColor: color,
                  opacity: focused ? 1 : 0.7,
                }}
              />
            </Animated.View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator
            initialRouteName='Auth'
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: 'white',
              },
            }}
          >
            <Stack.Screen 
              name="MainTabs" 
              component={TabNavigator}
            />
            <Stack.Screen 
              name="Chat" 
              component={Chat}
            />
            <Stack.Screen 
              name="Auth" 
              component={FormAuth}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
      <Toast />
    </Provider>
    
  );
}
