export class Producto {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    sell(){
        console.log("The product was sold");
    }
}