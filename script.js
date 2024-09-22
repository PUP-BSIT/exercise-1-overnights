var Size;
(function (Size) {
    Size["XS"] = "Extra Small";
    Size["S"] = "Small";
    Size["M"] = "Medium";
    Size["L"] = "Large";
    Size["XL"] = "Extra Large";
})(Size || (Size = {}));
var Dress = {
    brand: "Channel",
    color: "white",
    size: Size.L,
    price: 100,
    print: function () {
        console.log("The brand of my T-shirt is ".concat(this.brand, ", which is \n            well-known for its quality.\n\n            It comes in a ").concat(this.color, " color, giving it a sleek and stylish \n            look.\n\n            This T-shirt is available in size ").concat(this.size, ", perfect for a \n            comfortable fit.\n \n            It is priced at ").concat(this.price, ", making it a great value for a premium \n            T-shirt."));
    },
};
var Coat = {
    brand: "Uniqlo",
    color: "Pink",
    size: Size.S,
    price: 1000,
    print: function () {
        console.log("The brand of my T-shirt is ".concat(this.brand, ", which is \n            well-known for its quality.\n\n            It comes in a ").concat(this.color, " color, giving it a sleek and stylish \n            look.\n\n            This T-shirt is available in size ").concat(this.size, ", perfect for a \n            comfortable fit.\n \n            It is priced at ").concat(this.price, ", making it a great value for a premium \n            T-shirt."));
    },
};
