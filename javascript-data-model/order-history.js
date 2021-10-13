var orderHistory = [
  {
    orderPlaced: 'August 4, 2020',
    totalPrice: 34.00,
    shipTo: 'JS Masher',
    orderNumber: 12345,
    deliveryConfirmation: 'Delivered Aug 8, 2020',
    productsOrdered: [
      {
        title: 'JavaScript for impatient programmers',
        author: 'Rauschmayer, Dr. Axel',
        returnWindow: 'Return window closed on Sep 7, 2020',
        price: 31.55,
        imageUrl: 'path to image'
      }
    ]
  },
  {
    orderPlaced: 'July 19,2020',
    totalPrice: 44.53,
    shipTo: 'JS Masher',
    orderNumber: 23456,
    deliveryConfirmation: 'Delivered Jul 20, 2020. Your package was delivered. It was handed directly to resident.',
    productsOrdered: [
      {
        title: 'The Timeless Way of Building',
        author: 'Alexander, Christopher',
        returnWindow: 'Return window closed on Aug 19, 2020',
        price: 41.33,
        imageUrl: 'path to image'
      }
    ]
  },
  {
    orderPlaced: 'July 4, 2020',
    totalPrice: 44.53,
    shipTo: 'JS Masher',
    orderNumber: 34567,
    deliveryConfirmation: 'Delivered July 7, 2020. Your package was delivered. It was handed directly to resident.',
    productsOrdered: [
      {
        title: 'Gamecube Controller Adapter',
        returnWindow: 'Return window closed on Aug 5, 2020',
        price: 15.98,
        imageUrl: 'path to image'
      }
    ]
  },
  {
    orderPlaced: 'July 3, 2020',
    totalPrice: 138.93,
    shipTo: 'JS Masher',
    orderNumber: 45678,
    deliveryConfirmation: 'Deliverd Jul 5, 2020',
    productsOrdered: [
      {
        title: 'Gamecube Controller',
        returnWindow: 'Return window closed on Aug 4, 2020',
        price: 94.95,
        imageUrl: 'path to image'
      },
      {
        title: 'The Art of Sql',
        author: 'Faroult, Stephanie',
        returnWindow: 'Return window closed on Aug 4, 2020',
        price: 33.99,
        imageUrl: 'path to image'
      }
    ]
  }
];

console.log('data model for order history:', orderHistory);
