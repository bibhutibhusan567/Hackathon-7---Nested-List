import React, { useState } from 'react';
import ListCity from './Cities';

function ListState(props) {
    const [ShowCity, setShowCity] = useState(false);

    return <>
        <li onClick={() => setShowCity(!ShowCity)} id={"state" + (props.id + 1)}>{props.StateName.name}</li>
        {ShowCity ? <ul>
            {props.StateName.cities.map((Cityname, cityIndex) => {
                return <ListCity CityName={Cityname} key={cityIndex} id={cityIndex} />
            })}
        </ul> : null}
    </>
}
export default ListState;

// return (<div id="main">
//     {states.map((state, idx) =>
//       <div
//         id={"state" + idx}
//         onClick={showCities}
//         key={idx}>
//         {state.name}

//         <ol>
//           {state.cities.map((city, idx) =>
//             <li
//               id={"city" + idx}
//               key={city.name + idx}
//               onClick={showTowns}>
//               {city[idx] ? city.name : null}
//               <ul>
//                 {city.towns.map((town) =>
//                   <li
//                     id={"city" + idx}
//                     key={town.name + idx}>
//                     {town.name}
//                   </li>
//                 )}
//               </ul>
//             </li>
//           )}

//         </ol>

//       </div>
//     )}
//   </div>);