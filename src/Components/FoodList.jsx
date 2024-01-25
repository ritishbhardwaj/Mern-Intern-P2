import React from "react";
import FoodItem from "./FoodItem";

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
//here we Are using the looping concept using mapping

export default function FoodList({ item }) {

    if (item.length===0){
        return <> 
        <div class="alert alert-danger container" role="alert">
 <h1> No Food Available</h1>
</div>
        </>
    }
    else{
        return (
            <>
              <div className="container pt-4">
                <h3 className="pb-3">Food Items</h3>
                <ul className="list-group">
                  {item.map((x) => {
                    return (
                      <FoodItem x={x}/>
                    );
                  })}
                </ul>
              </div>
            </>
          );
    }
  
}
