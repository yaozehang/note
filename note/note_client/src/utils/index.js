import {Message} from 'element-ui';
import axios from 'axios';

const baseURL = '/api'

const instance = axios.create({
  baseURL,
  timeout:10000
})

const xhr = {
  post(url,data,config){
    return new Promise((resolve, reject) => {
      instance.post(url,data,config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    }) 
  }
}


export const $axios = xhr;