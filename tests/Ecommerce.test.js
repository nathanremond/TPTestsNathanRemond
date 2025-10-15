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

test("Test de la fonction payBasket", () => {
    const user = new UserAccount("John", 500);
    const basket = new Basket([{ name: "Clavier", price: 300 }], 300);
    const basket2 = new Basket([{ name: "Souris", price: 600 }], 600);
    payBasket(user, basket);
    expect(user.balance).toBe(200);
    payBasket(user, basket2);
    expect(user.balance).toBe(200);
});


//Fonction test 1
function testAdd() {
  const panierVide = new Basket();
  const item1 = { name: "Carte mère", price: 100 };
  addToBasket(panierVide, item1);
  return panierVide.totalPrice === 100;
}

//Fonction test 2
function testRemove() {
  const panierVide = new Basket();
  const item1 = { name: "Carte mère", price: 100 };
  addToBasket(panierVide, item1);
  removeFromBasket(panierVide, item1);
  return panierVide.totalPrice === 0;
}

//Fonction test 3
function testAddRemove() {
  const panierVide = new Basket();
  const item1 = { name: "Carte mère", price: 100 };
  addToBasket(panierVide, item1);
  if (panierVide.totalPrice !== 100) return false;
  removeFromBasket(panierVide, item1);
  return panierVide.totalPrice === 0;
}

//Fonction test 4
function testTransactionAllowed() {
  const user = new UserAccount("Alice", 500);
  return (
    transactionAllowed(user, 400) === true &&
    transactionAllowed(user, 600) === false
  );
}

//Fonction test 5
function testPayBasket() {
  const user = new UserAccount("John", 500);
  const basket = new Basket([{ name: "Clavier", price: 300 }], 300);
  const basket2 = new Basket([{ name: "Souris", price: 600 }], 600);

  payBasket(user, basket);
  if (user.balance !== 200) return false;

  payBasket(user, basket2);
  return user.balance === 200;
}

function testAppEcommerce() {
  let success = testAdd();
  success = success && testRemove();
  success = success && testAddRemove();
  success = success && testTransactionAllowed();
  success = success && testPayBasket();

  if (success) {
    console.log("OK");
  } else {
    console.log("ERREUR");
  }
}

testAppEcommerce();