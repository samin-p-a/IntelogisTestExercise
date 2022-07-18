export const dummyPoints = [
  {id:1, name:"ООО Рога", position:[55.7, 37.7]},
  {id:2, name:"ООО Копыта", position:[55.9, 37.8]},
  {id:3, name:"ООО Ромашка", position:[55.8, 37.9]},
];

export const dummyRoutes = [
  {from:1, to:1, route:[]},
  {from:1, to:2, route:[[55.8,37.7],[55.8,37.8]]},
  {from:1, to:3, route:[[55.8,37.8]]},
  {from:2, to:1, route:[[55.8,37.8],[55.7,37.8]]},
  {from:2, to:2, route:[]},
  {from:2, to:3, route:[[55.9,37.9]]},
  {from:3, to:1, route:[[55.8,37.8]]},
  {from:3, to:2, route:[[55.8,37.8]]},
  {from:3, to:3, route:[]},
];

export const dummyRequests = [
  {from:1, to:2},
  {from:1, to:3},
  {from:3, to:2},
];
