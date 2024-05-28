import { useState } from "react";
import "./Checkout.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { json } from "react-router-dom";

export default function Checkout() {
  const [buyer, setBuyer] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyer({ ...buyer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);

    try {
      const db = getFirestore();
      const cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];

      const buyerCart = { ...buyer, cart };

      const docRef = await addDoc(collection(db, "sales"), buyerCart);
      console.log("Document written id: ", docRef.id);

      setTimeout(() => {
        localStorage.removeItem("cart");
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="checkoutForm">
      <h2>Finaliza tu compra</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nombre"
          type="text"
          id="name"
          name="name"
          value={buyer.name}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Apellido"
          type="text"
          id="lastName"
          name="lastName"
          value={buyer.lastName}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Correo electrónico"
          type="email"
          id="email"
          name="email"
          value={buyer.email}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Teléfono"
          type="tel"
          id="phone"
          name="phone"
          value={buyer.phone}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={disabled}>
          Finalizar compra
        </button>
      </form>
    </div>
  );
}
