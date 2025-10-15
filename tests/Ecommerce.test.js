const { Basket, UserAccount, addToBasket, removeFromBasket, transactionAllowed, payBasket } = require("../src/Ecommerce");

test('ajoute un produit au panier et vérifie que le montant total est correct', () => {
    const panierVide = new Basket();
    const item1 =  {name: "Carte mère", price: 100 };
    addToBasket(panierVide, item1);
    expect(panierVide.totalPrice).toBe(100);
});

test('supprime un produit du panier et vérifie que le montant total est correct', () => {
    const panierVide = new Basket();
    const item1 =  {name: "Carte mère", price: 100 };
    addToBasket(panierVide, item1);
    removeFromBasket(panierVide, item1);
    expect(panierVide.totalPrice).toBe(0);
})

test('ajoute un produit au panier et vérifie que le montant total est correct et supprime un produit du panier et vérifie que le montant total est correct', () => {
    const panierVide = new Basket();
    const item1 = { name: "Carte mère", price: 100 };
    addToBasket(panierVide, item1);
    expect(panierVide.totalPrice).toBe(100);
    removeFromBasket(panierVide, item1);
    expect(panierVide.totalPrice).toBe(0);
});

test("Test de la fonction TransactionAllowed", () => {
    const user = new UserAccount("Alice", 500);
    expect(transactionAllowed(user, 400)).toBe(true);
    expect(transactionAllowed(user, 600)).toBe(false);
});