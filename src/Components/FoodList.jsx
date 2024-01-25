import React from "react";

// export default function FoodList(props) {
//     let item = props.item;
//   return (<>
//     <div className='container pt-4'>
//     <h3 className='pb-3'>Food Items</h3>
//     <ul  className='list-group'>
//         <li className='list-group-item'>{item[0]}</li>
//         <li className='list-group-item'>{item[1]}</li>
//         <li className='list-group-item'>{item[2]}</li>
//         <li className='list-group-item'>{item[3]}</li>
//     </ul>
//     </div>

//     </>
//   )
// }

//    Another way
// export default function FoodList({item}) {   //  here the {item <-- this name is same as the name in app.jsx}
//     // let item = props.item;
//   return (<>
//     <div className='container pt-4'>
//     <h3 className='pb-3'>Food Items</h3>
//     <ul  className='list-group'>
//         <li className='list-group-item'>{item[0]}</li>
//         <li className='list-group-item'>{item[1]}</li>
//         <li className='list-group-item'>{item[2]}</li>
//         <li className='list-group-item'>{item[3]}</li>
//         <li className='list-group-item'>{item[4]}</li>
//         <li className='list-group-item'>{item[5]}</li>
//     </ul>
//     </div>

//     </>
//   )
// }

// Another way to do using mapping

export default function FoodList({ item }) {
  //  here the {item <-- this name is same as the name in app.jsx}
  // let item = props.item;
  return (
    <>
      <div className="container pt-4">
        <h3 className="pb-3">Food Items</h3>
        <ul className="list-group">
          {item.map((x) => {
            return (
              <li key={x} className="list-group-item">
                {x}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
