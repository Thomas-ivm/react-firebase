import { useState } from "react";
import { db } from "../config/firebase";


export const Form = () => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [age, setage] = useState("");
    const [city, setcity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('gegevens').add({
            fname:fname,
            lmane:lname,
            age:age,
            city:city,
        })
        .then(() => {
            //still in progress
            alert('het is gelukt 👍, dankjewel')
        })
        .catch((error) => {
            alert(error.message);
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Voornaam..." value={fname} onChange={(e) => setfname(e.target.value)} />
            <input placeholder="Achternaam..." value={lname} onChange={(e) => setlname(e.target.value)} />
            <input placeholder="Leeftijd..." value={age} onChange={(e) => setage(e.target.value)} />
            <input placeholder="Stad..." value={city} onChange={(e) => setcity(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}