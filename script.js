// getMenu() function
function getMenu() {
    fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
      .then(response => response.json())
      .then(data => {
        // Displaying food items to the user
        console.log('Menu:', data);
      })
      .catch(error => {
        // Handle any errors that occur during the fetch request
        console.error('Error fetching menu:', error);
      });
  }
  
  // TakeOrder() function
  function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const burgers = ['Cheeseburger', 'Veggie Burger', 'Chicken Burger'];
        const order = {
          burgers: burgers.sort(() => 0.5 - Math.random()).slice(0, 3)
        };
        resolve(order);
      }, 2500);
    });
  }
  
  // orderPrep() function
  function orderPrep() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }
  
  // payOrder() function
  function payOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }
  
  // thankyouFnc() function
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }
  
  // Promise handling and chaining
  getMenu(); // Fetch and display the menu
  
  takeOrder()
    .then(order => {
      console.log('Order:', order);
      return orderPrep();
    })
    .then(orderStatus => {
      console.log('Order Preparation:', orderStatus);
      return payOrder();
    })
    .then(orderStatus => {
      console.log('Payment:', orderStatus);
      if (orderStatus.paid) {
        thankyouFnc();
      }
    })
    .catch(error => {
      // Handle any errors that occur during promise resolutions
      console.error('Error:', error);
    });
  