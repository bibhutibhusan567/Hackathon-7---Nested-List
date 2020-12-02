import React, { useState } from 'react';
import ListTown from './Towns';

const ListCity = (props) => {
    const [ShowTown, setShowTown] = useState(false);
    return <><li onClick={() => setShowTown(!ShowTown)} id={"city" + (props.id + 1)}>{props.CityName.name}</li>
        {ShowTown ? <ul>
            {props.CityName.towns.map((Townname, TownIndex) => {
                return <ListTown TownName={Townname} key={TownIndex} id={TownIndex} />
            })}
        </ul> : null}
    </>
}
export default ListCity;
// import React from "react"

// function Cities(props) {

//     return (<>
//         {props.states.map((state) => {
//             return (
//                 state.cities.map((city, idx) => {
//                     return (<div key={idx}>{city.name}</div>);
//                 })
//             )
//         })}
//     </>
//     );
// }
// export default Cities;