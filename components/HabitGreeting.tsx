import { StyleSheet, Text, View } from "react-native";

export default function HabitGreeting({ habitName = "Hola Inicial" }: { habitName: string }) {
  const fecha = new Date();
  const hours = fecha.getHours();

  const saludo = hours < 12 ? "Good morning" : hours < 18 ? "Good afternoon" : "Good evening";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{saludo}, {habitName}.</Text>
      <Text style={styles.fecha}>{fecha.toLocaleDateString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 18, fontWeight: '600' },
  fecha: { color: '#666', marginTop: 4 },
});