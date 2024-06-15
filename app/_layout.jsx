import { Stack, SplashScreen } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    // Hide the splash screen once the layout is rendered
    SplashScreen.hideAsync();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
