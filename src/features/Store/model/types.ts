export interface Category{
    id: number;
    name: string;
    image: string;
    slug: string;
}
export interface ProductApi{
    id:	number;
    title: string;
    price: number;
    description: string;
    category: Category;
    images: string[];
    creationAt: string;
    updatedAt: string; 
}

export type ProductsApi = ProductApi[];


export interface ProductBusket{
    info: ProductApi,
    amount: number
}

export type ProductsBusket = ProductBusket[];