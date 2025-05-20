// product routes
import express from 'express';

const productRoutes = express.Router();

let products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 }
];

// GET all products
productRoutes.get('/', (req, res) => {
    res.json(products);
});

// GET product by ID
productRoutes.get('/:id', (req, res) => {
    const product = products.find(item => item.id == req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

// POST new product
// Body: { "name": "Tablet", "price": 450 }
productRoutes.post('/', (req, res) => {
    const newProduct = {
        id: Date.now(),
        name: req.body.name,
        price: req.body.price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// PUT update product
// Body: { "name": "Updated Laptop", "price": 1500 }
productRoutes.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(item => item.id === id);

    if (product) {
        if (req.body.name !== undefined) product.name = req.body.name;
        if (req.body.price !== undefined) product.price = req.body.price;

        res.json(product);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

// DELETE product

productRoutes.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(item => item.id === id);

    if (index !== -1) {
        const deleted = products.splice(index, 1);
        res.json({ message: "Product deleted", deleted: deleted[0] });
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

export default productRoutes;
