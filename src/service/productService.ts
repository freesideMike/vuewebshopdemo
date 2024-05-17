import type { IProduct } from "@/models/IProduct";
import { get } from "@/service/serviceBase";

const baseUrl = //"https://omdbapi.com/?apikey=d2f71437&s=star";
 "https://medieinstitutet-wie-products.azurewebsites.net/api/products";
 



export const getProducts = async (): Promise<IProduct[]> => {
  return await get<IProduct[]>(baseUrl);
};