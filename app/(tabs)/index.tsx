import HabitCard from '@/components/HabitCard';
import HabitGreeting from '@/components/HabitGreeting';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  const nombre = "React Native";
  const edad = 25;
  const isPremium = true;
  const messages = 5;

  const habits = [
    { id: 1, title: "Drink Water", streak: 10, isCompleted: true },
    { id: 2, title: "Exercise", streak: 5, isCompleted: false },
    { id: 3, title: "Read Books", streak: 15, isCompleted: true },
    { id: 4, title: "Meditate", streak: 3, isCompleted: false },
    { id: 5, title: "Sleep Early", streak: 7, isCompleted: true },
  ]

  return (
    <View style={styles.container}>
      <HabitGreeting habitName="Ivan Ortega" />
      <View style={{ gap: 12, marginTop: 16, width: '100%' }}>
        {habits.map(habit => (
          <HabitCard
            key={habit.id}
            title={habit.title}
            streak={habit.streak}
            isCompleted={habit.isCompleted}
          />
        ))}
      </View>
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
