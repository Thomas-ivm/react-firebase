import { useState } from "react";
import moment from "moment";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const Form = () => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [age, setage] = useState("");
    const [city, setcity] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const db = getFirestore(); // Access Firestore instance
        const timestamp = moment().format();
        try {
            await addDoc(collection(db, "gegevens"), {
                fname,
                lname,
                age,
                city,
                timestamp,
            });
            // alert("het is gelukt, dankjewel");
            navigate('./detail');
            setfname("");
            setlname("");
            setage("");
            setcity("");
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
            <input required placeholder="Voornaam..." value={fname} onChange={(e) => setfname(e.target.value)} />
            <input required placeholder="Achternaam..." value={lname} onChange={(e) => setlname(e.target.value)} />
            <input required placeholder="Leeftijd..." value={age} onChange={(e) => setage(e.target.value)} />
            <input required placeholder="Stad..." value={city} onChange={(e) => setcity(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};