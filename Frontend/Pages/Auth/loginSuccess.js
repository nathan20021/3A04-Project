import {Text, View, Pressable} from 'react-native';

const LoginSuccessPage = () => {
  return (
    <View className="gap-3">
      <Text>Incorrect username or password!</Text>
      <Text>Please try again!</Text>
          <Pressable className="bg-[#00ff00] h-9 flex items-center justify-center shadow-sm rounded-md w-full">
            <Text className="text-center font-bold text-white">Continue</Text>
          </Pressable>
    </View>
  )
}
export default LoginSuccessPage;