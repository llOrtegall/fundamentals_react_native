import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const nombre = "React Native";
  const edad = 25;
  const isPremium = true;
  const messages = 5;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Mi texto: {nombre}
      </Text>
      <Text style={styles.subtitle}>
        Edad: {edad}
      </Text>
      <Text style={styles.subtitle}>
        {isPremium ? "Usuario Premium" : "Usuario Free"}
      </Text>
      <Text style={styles.subtitle}>
        segundo texto de ejemplo
      </Text>
      <Link href={"/(tabs)/about"} style={styles.buttonAbout}>ver sobre mí</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F6FF",
    padding: 24,
    gap: 8
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0F172A"
  },
  subtitle: {
    fontSize: 14,
    color: "#343535ff"
  },
  buttonAbout: {
    fontSize: 16,
    color: "#1E40AF",
    borderBottomWidth: 1,
    borderBottomColor: "#1E40AF"
  }
});
