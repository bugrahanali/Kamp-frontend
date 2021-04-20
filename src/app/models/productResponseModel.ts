import { Product } from "./product";
import { ResponseModel } from "./responseModul";

 export interface ProductResponseModul extends ResponseModel{
     data:Product[]
 }