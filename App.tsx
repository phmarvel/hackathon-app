import React, { useEffect, useState } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import {
  // en,
  // nl,
  // pl,
  enGB,
  registerTranslation,
  // @ts-ignore TODO: try to fix expo to work with local library
} from 'react-native-paper-dates'
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from "react-redux";
import { configureStore } from "./stores/store";
import { services } from "./services/index";
import 'intl';
import 'intl/locale-data/jsonp/en'; // or any other locale you need
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from './navigation/RootNavigator';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ScreenOrientation from 'expo-screen-orientation';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};
registerTranslation('en-GB', enGB)

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType { }
}
export default function App() {

  const [loadding, setLoadding] = useState(true)
  const [preloadedState, setPreloadedState] = useState(undefined)

  useEffect(() => {
    (async () => {

      let state = await AsyncStorage.getItem('reduxState')
      if (state) {
        setPreloadedState(JSON.parse(state))
      }
      setLoadding(false)
      await ScreenOrientation.unlockAsync()

    })()
  }, [])

  return (
    <NativeBaseProvider>
      <PaperProvider>
        {!loadding && <Provider store={configureStore(services, preloadedState)}>
          <SafeAreaProvider>
            <RootNavigator />
          </SafeAreaProvider>
        </Provider>}
      </PaperProvider>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
