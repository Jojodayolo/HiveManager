import React from "react";
import {Text, View, StyleSheet} from 'react-native';
import { Dropdown } from "react-native-element-dropdown";

const DATA = [
    {
        name: '1',
        value: '1',
    },
    {
        name: '2',
        value: '2',
    },
    {
        name: '3',
        value: '3',
    },
    {
        name: '4',
        value: '4',
    },
]

const RenderEmpty = () => {
    return (
        <View style={styles.emptyContainer}>
            <Text>Empty!</Text>
        </View>
    );
};

const DropdownComponent = () => {
    return(
        <Dropdown
            style={styles.dropdown}
            containerStyle={styles.container}
            backgroundColor={'rgba(0,0,0,0.4)'}
            data={DATA} 
            labelField="name" 
            valueField="value" 
            flatListProps={{
                ListEmptyComponent: <RenderEmpty/>,
            }}
        />
    );
};

const styles = StyleSheet.create({
    dropdown: {
        backgroundColor: 'white',
        margin: 9,
        width: '65%',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
        paddingHorizontal: 8
        
    },
    container:{
        marginTop: 1,
    },
    emptyContainer: {
        padding: 10,
        alignItems: 'left',
    }
});

export default DropdownComponent;