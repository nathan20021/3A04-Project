import {Text, View, Pressable} from 'react-native';

export default PromptActivation = ({navigation})=>{
    return (
        <View className = "flex-1 items-center justify-center">
          <Text className = "text-2xl text-primary font-medium" >Get talkin!</Text>
          <Text className = "text-4xl mb-16" >Prompt Generator</Text>
          <Pressable className = "h-16 w-32 rounded-xl items-center justify-center bg-primary" 
                      onPress={() =>  navigation.navigate('Prompt Display')}> 
            <Text className = "text-white text-3xl">Start</Text>
          </Pressable>
          <Pressable className = "h-16 w-32 rounded-xl items-center justify-center bg-primaryError mb-4" 
                      onPress={() =>  navigation.navigate('Fare Display')}> 
            <Text className = "text-white text-3xl">End Ride</Text>
          </Pressable>
        </View>
      );
    }