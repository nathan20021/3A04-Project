import {Text, View, Pressable, Alert} from 'react-native';

export default PromptActivation = ()=>{
    return (
        <View className = "flex-1 items-center justify-center">
          <Text className = "text-2xl text-primary font-medium" >Get talkin!</Text>
          <Text className = "text-4xl mb-16" >Prompt Generator</Text>
          <Pressable className = "h-16 w-32 rounded-xl items-center justify-center bg-primary" 
                      onPress={() => Alert.alert()}> 
            <Text className = "text-white text-3xl">Start</Text>
          </Pressable>
        </View>
      );
    }