// callback
// const preparingCoffee = (callback) => {
//   console.log('preparing coffee')

//   setTimeout(() => {
//     console.log('burger is coffee!')
//     callback()
//   }, 1000)
// }

// const preparingBreakfast = (callback) => {
//   console.log('preparing breakfast')

//   setTimeout(() => {
//     console.log('breakfast is ready!')
//     callback()
//   }, 1000)
// }

// const eatBreakfast = _ => {
//   console.log('eat breakfast damn!')
// }

// preparingCoffee(() => {
//   preparingBreakfast(() => {
//     eatBreakfast()
//   })
// })



// async/await with error handling
const preparation = (food) => {
  return new Promise((resolve, reject) => {
    console.log(`preparing ${food}`);

    if (food === "ice") {
      reject("wa nay ice sir");
    } else {
      setTimeout(() => {
        console.log(`${food} is ready!`);
        resolve();
      }, 1000);
    }
  });
};

const cookingTime = async (_) => {
  try {
    await preparation("pizza");
    await preparation("ice");
  } catch (err) {
    console.error(err);
  }
};

cookingTime();


// promise
// const preparation = (food) => {
//   let timer = food === 'pizza' ? 4000 : 1000

//   return new Promise((resolve) => {
//     console.log(`preparing ${food}...`)
//     setTimeout(() => {
//       console.log(`${food} is ready`)
//       resolve()
//     }, timer)
//   })
// }

// preparation('burger')
//   .then(() => preparation('fries'))
//   .then(() => preparation('pizza'))
//   .then(() => console.log('eat well nigga')