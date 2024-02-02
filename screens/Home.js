import {View, Text, StyleSheet, Button} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home () {

  const navigation = useNavigation();
    return (
        <View style={styles.container}><Text>You are on the home screen</Text>
        <Button title="Press for cars" onPress={() => navigation.navigate("Cars", {
          nameOfCar: "SAAB"
        } )}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });