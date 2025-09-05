import React ,{useEffect,useState} from "react";

export default function Flight() {
    const [flights, setFlights] = useState([]);
    return(
            useEffect(() => {
            fetch('/flights')
                .then(response => response.json())
                .then(data => setFlights(data))
                .catch(error => console.error('Error fetching flights:', error));
                console.log(flights)
        })
    )
}