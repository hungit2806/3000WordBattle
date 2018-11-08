import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
const storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    enableCache: true,
    sync: {
    }
})
export function removeDataStorage(key){
    storage.remove({
        key: key,          
      });
}
export function saveDataStorage(key,data){
    storage.save({
        key: key,   
        data: data,
      });
}
export function loadDataStorage(key) {   
    return storage.load({
        key: key,
    }).then(ret => {
        console.log(ret)
        return ret
    }).catch(err => {
        return "error"
    });
}