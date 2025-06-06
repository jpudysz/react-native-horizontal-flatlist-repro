import { useState } from 'react'
import { ActivityIndicator, Animated, Button, FlatList, Image, ImageBackground, KeyboardAvoidingView, Pressable, RefreshControl, ScrollView, SectionList, Switch, Text, TextInput, TouchableHighlight, TouchableOpacity, View, VirtualizedList } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)
  const debugRef = (name: string) => (ref: unknown) => {
    console.log(`Mounted ${name}. Ref is present: ${!!ref}`)

    if (!ref) {
      console.warn(`Ref ${name} is not present! It should call ref cleanup instead!`)
    }

    return () => {
      console.log(`Unmounted ${name}`)
    }
  }

  return (
    <View ref={debugRef('view')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
      <Text ref={debugRef('text')}>Count: {count}</Text>
      <Button ref={debugRef('button')} title="Force unmount" onPress={() => setCount(prev => prev + 1)} />
      <ScrollView ref={debugRef('scrollview')} style={{ flex: 1 }}>
        <Text>Scroll me</Text>
      </ScrollView>
      <ScrollView ref={debugRef('scrollviewHorizontal')} horizontal style={{ flex: 1 }}>
        <Text>Scroll me horizontal</Text>
      </ScrollView>
      <FlatList ref={debugRef('flatlist')} data={[1]} renderItem={() => <Text>Item</Text>} />
      <FlatList horizontal ref={debugRef('flatlistHorizontal')} data={[1]} renderItem={() => <Text>Item</Text>} />
      <TextInput ref={debugRef('textinput')} />
      <SectionList ref={debugRef('sectionlist')} sections={[{ data: [1], title: 'Section' }]} renderItem={() => <Text>Item</Text>} />
      <Animated.View ref={debugRef('animated')} />
      <ActivityIndicator ref={debugRef('activityindicator')} />
      <Image ref={debugRef('image')} source={{ uri: 'https://via.placeholder.com/150' }} />
      <ImageBackground ref={debugRef('imagebackground')} imageRef={debugRef('imagebackground_image')} source={{ uri: 'https://via.placeholder.com/150' }} />
      <KeyboardAvoidingView ref={debugRef('keyboardavoidingview')} />
      <Pressable ref={debugRef('pressable')} />
      <Switch ref={debugRef('switch')} />
      <RefreshControl ref={debugRef('refreshcontrol')} refreshing={false} />
      <TouchableHighlight ref={debugRef('touchablehighlight')}>
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
      <TouchableOpacity ref={debugRef('touchableopacity')}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      <VirtualizedList getItemCount={() => 1} ref={debugRef('virtualizedlist')} data={[1]} renderItem={() => <Text>Item</Text>} getItem={(item) => item} keyExtractor={(item) => item.toString()}/>
    </View>
  )
}
