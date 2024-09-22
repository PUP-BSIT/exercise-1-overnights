enum Size {
    XS = "Extra Small",
    S = "Small",
    M = "Medium",
    L = "Large",
    XL = "Extra Large"
}

type Tshirt = {
    brand: string;
    color: string ;
    size: Size;
    price: number;
    print(): void;
  }
  