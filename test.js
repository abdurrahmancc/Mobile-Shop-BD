const product = {
  name: "bottle",
  color: "yellow",
  price: 234,
  height: "6in",
};
const properties = Object.keys(product);
const propertie = properties[0];
console.log(propertie);

const products = {
  name: "bottle",
  color: "yellow",
  price: 234,
  height: "6in",
};
const values = Object.values(product);
const value = values[0];
console.log("value", value);
