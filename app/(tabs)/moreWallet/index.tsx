import { StyleSheet, Text, View } from 'react-native';

export default function MoreWallet() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daha Cüzdan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
