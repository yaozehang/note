import {Message} from 'element-ui';
import axios from 'axios';

// let env = process.env.NODE_ENV == 

const baseURL = '/api'

const instance = axios.create({
  baseURL,
  timeout:10000
})

const xhr = {
  get(url,data,config){
    return new Promise((resolve, reject) => {
      instance.get(url,data,config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    }) 
  },
  post(url,data,config){
    return new Promise((resolve, reject) => {
      instance.post(url,data,config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    }) 
  },
  delete(url,config){
    return new Promise((resolve, reject) => {
      instance.delete(url, config).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}


export const $axios = xhr;