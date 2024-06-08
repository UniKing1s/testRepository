import axios from "axios"

export function categoryApi(endpoint:string,method:string,body:object){
    return axios({
        method: method,
        url: process.env.NEXT_PUBLIC_API +"/categories"+ endpoint,
        data: body
    }).catch((error) => {
        console.log(error);
      });
}
export function productApi(endpoint:string,method:string,body:object){
    return axios({
        method: method,
        url: process.env.NEXT_PUBLIC_API +"/products"+ endpoint,
        data: body
    }).catch((error) => {
        console.log(error);
      });
}