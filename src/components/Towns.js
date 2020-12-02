import React from 'react';

const ListTown = (props) => {
    return <li id={"town" + (props.id + 1)}>{props.TownName.name}</li>
}
export default ListTown;

// import React from "react";

// function Towns(props) {
//     return (<>
//         {
//             props.states.map((state) => {
//                 return (
//                     state.cities.map((city) => {
//                         return (
//                             city.towns.map((town, idx) => {
//                                 return (<div key={idx} > { town.name}</div>);
//                             })

//                         )
//                     })
//                 )
//             })
//         }</>
//     );

// }
// export default Towns;