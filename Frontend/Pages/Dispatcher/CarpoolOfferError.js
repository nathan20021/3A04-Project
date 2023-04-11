import {Text, View, Pressable} from 'react-native';

export default CarpoolOfferError = ({ navigation: { goBack } }) => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl">Something went wrong :(</Text>
      <Text/>
      <Text className="text-xl">Try again</Text>
      <Text/>
      <Pressable 
        className='h-16 w-28 rounded-lg bg-primaryError items-center justify-center'
        onPress={goBack()}>
        <Text className="text-center font-bold text-white text-lg">Retry</Text>
      </Pressable>
    </View>
  )
}
