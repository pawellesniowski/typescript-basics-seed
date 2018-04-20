const pizzas = [
    { name: 'Pepperoni', toppings: ['pepperoni'] },
    { name: 'Vegetariana', toppings: ['grass', 'stones'] }
];

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());


const pizza2 = {
    name: 'Inferno',
    getName() {
        return this.name
    }
};

console.log(pizza2.getName());