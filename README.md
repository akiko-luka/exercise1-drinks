### Exercise at DCI - Web Development course

#### Exercise 1
Imagine you want to buy a drink, but
- you have to be older than 18 years
- the product should be available
- the shop should be open

```js
let userAge;
let products = ["Beer", "Wine", "Vodka"];
let isProductAvailable;
let isShopOpen = true;
let canBuy;
```
- ask for age
- choose a product through numbers (index)
- display "Here you go" if all the conditions are satisfied (age, if shop is open, product availability), otherwise "Sorry, you can't buy" (use ternary operator)