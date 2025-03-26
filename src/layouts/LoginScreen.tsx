import{View, Text, TextInput} from "react-native";

export default function LoginScreen(){
    return (
        
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Login</Text>
              <TextInput placeholder="admin@gmail.com"></TextInput>
            </View>

    );
}