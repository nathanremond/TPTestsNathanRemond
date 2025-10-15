const { Basket, addToBasket, removeFromBasket, transactionAllowed, payBasket } = require("../src/Ecommerce");

test('ajoute un produit au panier et vérifie que le montant total est correct', () => {
    const panierVide = new Basket();
    const item1 =  {name: "Carte mère", price: 100 };
    addToBasket(panierVide, item1);
    expect(panierVide.totalPrice).toBe(100);
});