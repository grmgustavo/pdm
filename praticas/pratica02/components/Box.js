import { View, StyleSheet, Text } from 'react-native';

export default function Box(props) {
  const styles = StyleSheet.create({
  boxStyle:{
    minHeight: props.size,
    minWidth: props.size,
    backgroundColor: props.color,
  }
  
})
  return (
    <>
      <View style={styles.boxStyle}>
      <Text>Teste</Text>
      </View>
    </>
  );
}

