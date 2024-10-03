import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useNavigation, useRouter } from "expo-router"; // Hook para navegação


export default function SplashScreen({navigation}) {
  const router = useRouter();
  const navigate = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.navigate("onboarding"); // Navega para a tela de onboarding
    }, 5000); // Tempo que o GIF será exibido (3 segundos)

    return () => clearTimeout(timer); // Limpa o timer quando o componente é desmontado
  }, [router]);

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/images/splashScreen2.gif")} // Caminho para o GIF
        style={styles.gif}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  gif: {
    width: "100%",
    height: "100%",
  },
});
