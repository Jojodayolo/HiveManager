/**
 * Impressum.js
 * 
 * Impressum for the App.
 */
import { formStyles } from "./Styles"
import { Button, Text, View, ScrollView } from "react-native";

export const Impressum = () => {

    return(
        <View style={formStyles.scrollViewGroup}>
            <Text style={{fontWeight:"bold"}}>Impressum</Text>
            <Text>Max Mustermann</Text>
            <Text>Beispielweg 3</Text>
            <Text>55555 Musterhausen</Text>
            <Text>Deutschland</Text> <br/>

            <Text style={{fontWeight:"bold"}}>Kontakt</Text>
            <Text>Telefon: +49 80 123456</Text>
            <Text>E-Mail: Kontakt@max-mustermann.de</Text>
            <Text>Internet: www.mustermann.de</Text>
        </View>
    );
};