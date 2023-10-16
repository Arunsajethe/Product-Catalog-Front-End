import { Sub_Product } from "./MySubProduct";

export class Product
{
    constructor(public pname:string,  public validity:number, public features:string[], public category:string, public subproducts: Sub_Product[], public recommended:string)
    {

    }
}