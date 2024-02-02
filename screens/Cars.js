import {View, Text, StyleSheet, FlatList, Button} from "react-native";
import { CARS } from "../data";
function Cars ({navigation, route}) {

const {nameOfCar} = route.params;

    return (
        <View style={styles.container}>
         <Button title="Press to go to Home" onPress={() => navigation.navigate("Home")}/>
        <Text>Car: {nameOfCar}</Text>
        </View>
    )

}

export default Cars;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,

    }
})