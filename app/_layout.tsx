import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import 'react-native-reanimated';


import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    'Courgette-Regular': require('../assets/fonts/Courgette-Regular.ttf'), 
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),    
  });

  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        setSplashVisible(false);
      }, 2000); 
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  if (isSplashVisible) {
    return (
      <View style={styles.splashContainer}>
        <Image 
          source={require('@/assets/images/Meau_malha.png')} 
          style={styles.backgroundImage} 
        />
        <Image 
          source={require('@/assets/images/Meau_marca.png')} 
          style={styles.logoImage} 
        />
      </View>
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}


const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#88c9bf',
  },
  backgroundImage: {
    position: 'absolute', 
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
  },
  logoImage: {

    width: 300, 
    resizeMode: 'contain',
  },
});