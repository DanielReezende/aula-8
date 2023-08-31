import { NativeBaseProvider } from "native-base";
import { StatusBar } from "expo-status-bar";


// Screens
import { SignIn } from './src/screens/SignIn';

// Theme
import { THEME } from "./src/styles/theme";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from "./src/components/Loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_700Bold
  });


  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar translucent style="light" backgroundColor="transparent" />
      {fontsLoaded ? <SignIn /> : <Loading />}
    </NativeBaseProvider>
  );
}



