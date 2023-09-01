import { NativeBaseProvider } from "native-base";
import { StatusBar } from "expo-status-bar";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';


// Screens
import { SignIn } from './src/screens/SignIn';
import { Home } from "./src/screens/Home";

// Components
import { Loading } from "./src/components/Loading";

// Theme
import { THEME } from "./src/styles/theme";
// import { Router } from "./src/routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_700Bold
  });


  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar translucent style="light" backgroundColor="transparent" />
      {fontsLoaded ? <Home /> : <Loading />}
    </NativeBaseProvider>
  );
}



