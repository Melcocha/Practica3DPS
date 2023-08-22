import React from "react";
import { useState } from 'react';
export const Headers=({
    allProducts,
    setAllProducts,
    total,
    countProducts,
    setCountProducts,
    setTotal,
    
})=>{
    const [active, setActive] = useState(false);
    const onDeleteProduct = product => {
    const results = allProducts.filter(
    item => item.id !== product.id
    );
    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
    };
    const onCleanCart = () => {
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
};
        

return (
<header>
    <h1>Tienda de Libros</h1>
    <div className="container-icon">
        <div className="container-cart-icon" onClick={() => setActive(!active)}>
            <img src="https://e7.pngegg.com/pngimages/833/426/png-clipart-black-shopping-cart-icon-for-free-black-shopping-cart.png" alt="carrito" className="icon-cart" />
                <div className="count-products">
                    <span id="contador-productos">0</span>
                </div>
        </div>
    <div className="container-cart-products hidden-cart">
        <div className="row-product hidden">
            <div className="cart-product">
                <div className="info-cart-product">
                    <span className="cantidad-producto-carrito">1</span>
                        <p className="titulo-producto-carrito">Don Quijote</p>
                    <span className="precio-producto-carrito">$80</span>
                </div>
                <img
                    src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png" alt="cerrar" className="icon-close" />
            </div>
        </div>
    <div className="cart-total hidden">
        <h3>Total:</h3>
            <span className="total-pagar">$200</span>
    </div>
        <p className="cart-empty">El carrito está vacío</p>
    </div>
    </div>
</header>);
}

