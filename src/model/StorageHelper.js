import { AsyncStorage } from '@react-native-async-storage/async-storage';

export function saveLocation(id,location) {
    AsyncStorage.setItem(JSON.stringify(id), JSON.stringify(location));
}

export function loadLocation(id) {
    AsyncStorage.getItem(JSON.stringify(id)).then((value) => {
        return location = JSON.parse(value);
    });
}

