import Seram from "../../../../public/assets/images/seram.jpg";
import Binaiya from "../../../../public/assets/images/binaiya.jpg"
import Orabeach from "../../../../public//assets/images/orabeach1.jpg"

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const date = new Date();
let month = months[date.getMonth()];
let day = date.getDate();
let year = date.getFullYear();
let dateStr = `${month} ${day}, ${year}`;

const lstofcon = [
    {
        id: 1,
        name: "Seram Island:Beach Guide",
        category:["Travel ","Island"],
        src:Seram,
        min:"04 min read",
        Date:dateStr
    },
    {
        id: 2,
        name: "Mount Binaiya: A Traveler's Guide",
        category:["Mountain ","Adventure"],
        src: Binaiya,
        min:"06 min read",
        Date:dateStr
    },
    {
        id: 3,
        name: "Ora Beach: Beach Adventure Guide",
        category:["Travel ","Beach"],
        src:Orabeach,
        min:"05 min read",
        Date:dateStr
    },
]

export default lstofcon;
