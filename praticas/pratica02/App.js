import { StyleSheet, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    <View style={[styles.container, styles.flexColumn]}>
      <Box color="red" size="300"></Box>
      <Box color="red" size="20"></Box>
      <Box color="red" size="20"></Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexRow: {
    flexDirection: 'row',
  },
  fexRowReverse: {
    flexDirection: 'row-reverse',
  },
  fexColumnReverse: {
    flexDirection: 'column-reverse',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifySpaceAraund: {
    justifyContent: 'space-around',
  },
  justifyEvenly: {
    justifyContent: 'space-evenly',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignStrech: {
    alignItems: 'stretch',
  },
});
