import { useLocation } from 'react-router-dom';
import React from 'react';

function Logement({ data }) {
    // let url = useLocation();
    // console.log(url);
    // const categories = plantList.reduce(
    //     (acc, logement) =>
    //         acc.includes(url.slice(1)) ? acc : acc.concat(plant.category),
    //     []
    // )
    // let url = useLocation();
    return <div>Fiche logement</div>;
}

export default Logement;

// const categories = plantList.reduce(
//     (acc, plant) =>
//         acc.includes(plant.category) ? acc : acc.concat(plant.category),
//     []
// )

// return (
//     <div>
//         <ul>
//             {categories.map((cat) => (
//                 <li key={cat}>{cat}</li>
//             ))}
//         </ul>
//         <ul className='lmj-plant-list'>
//             {plantList.map((plant) => (
//                 <li key={plant.id} className='lmj-plant-item'>
//                     {plant.name}
//                     {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
//                 </li>
//             ))}
//         </ul>
//     </div>
// )
