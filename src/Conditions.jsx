// import React from 'react'

// const Conditions = () => {

  
//         let age=17;
//         if(age >= 18){
//             return (<h1>He can vote</h1>)
//         }
//         else{
//             return (<h1>He can't vote</h1>)
//         }

      

 
// }

// export default Conditions



//if statement type 2

// import React from 'react'

// const conditions = () => {
//     let age=18
//     let content;
//     if(age>=18){
//         content=<h1>ok to vote</h1>
//     }
//     else{
//         content=<h1>not ok to vote</h1>
//     }
//   return (
//     content
//   )
// }

// export default conditions


import React from 'react'

const conditions = () => {

    //()?:
    let age =19;
    return(
        (age>=18) ? <h1 className='bg-primary' > can vote</h1> :<h2>cant vote</h2>
    )
}

export default conditions

