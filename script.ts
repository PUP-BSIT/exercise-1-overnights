enum Size {
  XS = "Extra Small",
  S = "Small",
  M = "Medium",
  L = "Large",
  XL = "Extra Large",
}

type Tshirt = {
  brand: string;
  color: string;
  size: Size;
  price: number;
  print(): void;
};

const Dress: Tshirt = {
  brand: "Channel",
  color: "white",
  size: Size.L,
  price: 100,
  print() {
    console.log(`The brand of my T-shirt is ${this.brand}, which is 
            well-known for its quality.\n
            It comes in a ${this.color} color, giving it a sleek and stylish 
            look.\n
            This T-shirt is available in size ${this.size}, perfect for a 
            comfortable fit.\n 
            It is priced at ${this.price}, making it a great value for a 
            premium T-shirt.`);
  },
};

const Coat: Tshirt = {
  brand: "Uniqlo",
  color: "Pink",
  size: Size.S,
  price: 1000,
  print() {
    console.log(`The brand of my T-shirt is ${this.brand}, which is 
            well-known for its quality.\n
            It comes in a ${this.color} color, giving it a sleek and stylish 
            look.\n
            This T-shirt is available in size ${this.size}, perfect for a 
            comfortable fit.\n 
            It is priced at ${this.price}, making it a great value for a 
            premium T-shirt.`);
  },
};

const Polo: Tshirt = {
  brand: "Bench",
  color: "Blue",
  size: Size.M,
  price: 750,
  print() {
    console.log(`The brand of my T-shirt is ${this.brand}, which is 
            well-known for its quality.\n
            It comes in a ${this.color} color, giving it a sleek and stylish 
            look.\n
            This T-shirt is available in size ${this.size}, perfect for a 
            comfortable fit.\n 
            It is priced at ${this.price}, making it a great value for a 
            premium T-shirt.`);
  },
};
 
const LongSleeve: Tshirt = {
  brand: "Aeropostal",
  color: "Gray",
  size: Size.XS,
  price: 1000,
  print() {
    console.log(`The brand of my T-shirt is ${this.brand}, which is 
            well-known for its quality.\n
            It comes in a ${this.color} color, giving it a sleek and stylish 
            look.\n
            This T-shirt is available in size ${this.size}, perfect for a 
            comfortable fit.\n 
            It is priced at ${this.price}, making it a great value for a 
            premium T-shirt.`);
  },
};

Coat.print();
Dress.print();