import {Text, View, Pressable} from 'react-native';

const LoginSuccessPage = () => {
  return (
    <View className="gap-3">
      <Text className="text-center font-bold">Welcome back!</Text>
          <Pressable className="bg-[#88f988] h-9 flex items-center justify-center shadow-sm rounded-md w-full">
            <Text className="text-center font-bold text-white">Continue</Text>
          </Pressable>
    </View>
  )
}
export default LoginSuccessPage;