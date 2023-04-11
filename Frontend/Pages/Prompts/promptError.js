import {Text, View, Pressable} from 'react-native';

export default PromptError = () => {
  const retry = () => {
    // TODO: Head to start screen 
  }
  return (
    <View className="gap-3 flex-1 items-center justify-center">
      <Text className="text-2xl">Prompt Error Occured</Text>
      <Text className="mb-4 text-xl">Please try again!</Text>
          <Pressable className="bg-primaryError h-8 flex justify-center shadow-sm rounded-md w-24" onPress={retry}>
            <Text className="text-center font-bold text-white text-sm">RETRY</Text>
          </Pressable>
    </View>
  )
}
