import React, { useState } from 'react';
import { Button, FlatList, View, } from 'react-native';

function App() {
  const [horizontal, setHorizontal] = useState(false);
  const onPress = () => setHorizontal(currentValue => !currentValue);
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          ref={ref => {
            console.log('Mount')
            console.log(`NativeState: ${Boolean(ref?.getScrollResponder?.()?.getNativeScrollRef?.()?.__internalInstanceHandle?.stateNode?.node) ? '✅' : '❌'}`)

            return () => {
              console.log('Unmount')
              console.log(`NativeState: ${Boolean(ref?.getScrollResponder?.()?.getNativeScrollRef?.()?.__internalInstanceHandle?.stateNode?.node) ? '✅' : '❌'}`)
            }
          }}
          style={styles.flatList}
          contentContainerStyle={styles.flatList}
          accessibilityRole="adjustable"
          contentInsetAdjustmentBehavior="never"
          snapToAlignment="start"
          nestedScrollEnabled
          decelerationRate="fast"
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={1}
          // comment me
          horizontal={horizontal}
          data={[1]}
          renderItem={() => null}
        />
      </View>
      <Button onPress={onPress} title="Reload" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    width: 150,
  },
  flatList: {
    backgroundColor: 'lightblue',
    height: 300,
  },
});

export default App;
