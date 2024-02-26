import { useState } from "react";
import { db } from "../config/firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export const Form = () => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [age, setage] = useState("");
    const [city, setcity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getFirestore(); // Access Firestore instance

    try {
      await addDoc(collection(db, "gegevens"), {
        fname,
        lname,
        age,
        city,
      });
      alert("het is gelukt, dankjewel");
    } catch (error) {
      alert(error.message);
    }

        setfname();
        setlname();
        setage();
        setcity();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Voornaam..." value={fname} onChange={(e) => setfname(e.target.value)} />
            <input placeholder="Achternaam..." value={lname} onChange={(e) => setlname(e.target.value)} />
            <input placeholder="Leeftijd..." value={age} onChange={(e) => setage(e.target.value)} />
            <input placeholder="Stad..." value={city} onChange={(e) => setcity(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};