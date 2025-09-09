import { StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
  streak: number;
  isCompleted?: boolean;
}

export default function AvidCard({ title, streak, isCompleted }: Props) {
  return (
    <View style={[styles.card, isCompleted ? styles.completada : null]}>
      <View style={styles.row}>
        <Text style={styles.titulo}>{title}</Text>
        {isCompleted && <Text style={styles.check}>✓</Text>}
      </View>
      <Text style={styles.streak}>{streak} días de racha</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, borderRadius: 12, backgroundColor: '#222' },
  completada: { backgroundColor: '#2e7d32' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  titulo: { color: '#fff', fontWeight: '600' },
  check: { color: '#fff', fontSize: 16 },
  streak: { color: '#ccc', marginTop: 8 },
});