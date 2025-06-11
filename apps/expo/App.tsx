import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider>
        <NativeNavigation />
      </Provider>
    </GestureHandlerRootView>
  )
}
