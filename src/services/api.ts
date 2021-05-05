import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://192.168.2.87:3333',
  baseURL:
    'https://my-json-server.typicode.com/kpedrok/react-native-plant-manager-app',
})

export default api
