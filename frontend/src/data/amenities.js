const amenities = [
  {
    id: 1,
    name: 'Iron and Ironing Board',
    img: 'https://cdn-icons-png.flaticon.com/128/2446/2446430.png',
  },
  {
    id: 2,
    name: 'Cooking Utensils',
    img: 'https://cdn-icons-png.flaticon.com/128/830/830395.png',
  },
  {
    id: 3,
    name: 'Coffee Maker',
    img: 'https://cdn-icons-png.flaticon.com/128/1687/1687369.png',
  },
  {
    id: 4,
    name: 'Air Conditioning',
    img: 'https://cdn-icons-png.flaticon.com/128/1530/1530481.png',
  },
  {
    id: 5,
    name: 'TV Cable',
    img: 'https://cdn-icons-png.flaticon.com/128/7733/7733346.png',
  },
  {
    id: 6,
    name: 'Smoke Detector',
    img: 'https://cdn-icons-png.flaticon.com/128/5501/5501122.png',
  },
  {
    id: 7,
    name: 'Fire Extinguisher',
    img: 'https://cdn-icons-png.flaticon.com/128/394/394610.png',
  },
  {
    id: 8,
    name: 'First Aid',
    img: 'https://cdn-icons-png.flaticon.com/128/2760/2760491.png',
  },
  {
    id: 9,
    name: 'BBQ Grill',
    img: 'https://cdn-icons-png.flaticon.com/128/2946/2946598.png',
  },
  {
    id: 10,
    name: 'Work Space',
    img: 'https://cdn-icons-png.flaticon.com/128/3374/3374170.png',
  },
  {
    id: 11,
    name: 'Laundry',
    img: 'https://cdn-icons-png.flaticon.com/128/3322/3322056.png',
  },
  {
    id: 12,
    name: 'Hot Tub',
    img: 'https://cdn-icons-png.flaticon.com/128/5569/5569540.png',
  },
  {
    id: 13,
    name: 'Fitness Equipment',
    img: 'https://cdn-icons-png.flaticon.com/128/2382/2382679.png',
  },
  {
    id: 14,
    name: 'Recycling bins',
    img: 'https://cdn-icons-png.flaticon.com/128/2514/2514330.png',
  },
  {
    id: 15,
    name: 'WI-FI',
    img: 'https://cdn-icons-png.flaticon.com/128/1183/1183657.png',
  },
  {
    id: 16,
    name: 'Dish Washer',
    img: 'https://cdn-icons-png.flaticon.com/128/3629/3629638.png',
  },
  {
    id: 17,
    name: 'Swimming Pool',
    img: 'https://cdn-icons-png.flaticon.com/128/9629/9629334.png',
  },
  {
    id: 18,
    name: 'Barbecue Area',
    img: 'https://cdn-icons-png.flaticon.com/128/2946/2946598.png',
  },
  {
    id: 19,
    name: 'Sauna',
    img: 'https://cdn-icons-png.flaticon.com/128/5906/5906240.png',
  },
  {
    id: 20,
    name: 'Gym',
    img: 'https://cdn-icons-png.flaticon.com/128/2382/2382679.png',
  },
  {
    id: 22,
    name: 'Parking',
    img: 'https://cdn-icons-png.flaticon.com/128/1011/1011866.png',
  },
  {
    id: 23,
    name: 'Pet-friendly',
    img: 'https://cdn-icons-png.flaticon.com/128/489/489399.png',
  },
  {
    id: 24,
    name: 'Security System',
    img: 'https://cdn-icons-png.flaticon.com/128/6926/6926473.png',
  },
  {
    id: 25,
    name: 'Balcony',
    img: 'https://cdn-icons-png.flaticon.com/128/3062/3062518.png',
  },
  {
    id: 26,
    name: 'Fireplace',
    img: 'https://cdn-icons-png.flaticon.com/128/2315/2315547.png',
  },
  {
    id: 27,
    name: 'Elevator',
    img: 'https://cdn-icons-png.flaticon.com/128/2084/2084189.png',
  },
  {
    id: 28,
    name: 'Playground',
    img: 'https://cdn-icons-png.flaticon.com/128/5599/5599373.png',
  },
  {
    id: 29,
    name: 'Tennis Court',
    img: 'https://cdn-icons-png.flaticon.com/128/3136/3136304.png',
  },
  {
    id: 30,
    name: 'Basketball Court',
    img: 'https://cdn-icons-png.flaticon.com/128/5190/5190480.png',
  },
  {
    id: 31,
    name: 'Football (Soccer) Field',
    img: 'https://cdn-icons-png.flaticon.com/128/1286/1286241.png',
  },
  {
    id: 32,
    name: 'Jacuzzi',
    img: 'https://cdn-icons-png.flaticon.com/128/1023/1023135.png',
  },
  {
    id: 33,
    name: 'Conference Room',
    img: 'https://cdn-icons-png.flaticon.com/128/2645/2645420.png',
  },
  {
    id: 34,
    name: 'Concierge Service',
    img: 'https://cdn-icons-png.flaticon.com/128/3474/3474535.png',
  },
  {
    id: 35,
    name: 'Library',
    img: 'https://cdn-icons-png.flaticon.com/128/904/904820.png',
  },
  {
    id: 36,
    name: 'Movie Theatre',
    img: 'https://cdn-icons-png.flaticon.com/128/5224/5224556.png',
  },
  {
    id: 37,
    name: 'Business Center',
    img: 'https://cdn-icons-png.flaticon.com/128/4580/4580314.png',
  },
  {
    id: 38,
    name: 'Yoga Studio',
    img: 'https://cdn-icons-png.flaticon.com/128/1303/1303638.png',
  },
  {
    id: 40,
    name: 'Game Room',
    img: 'https://cdn-icons-png.flaticon.com/128/11935/11935783.png',
  },
  {
    id: 41,
    name: 'Bike Storage',
    img: 'https://cdn-icons-png.flaticon.com/128/13516/13516796.png',
  },
  {
    id: 42,
    name: 'Electric Car Charging Stations',
    img: 'https://cdn-icons-png.flaticon.com/128/4430/4430939.png',
  },
  {
    id: 44,
    name: 'Golf Course Access',
    img: 'https://cdn-icons-png.flaticon.com/128/8598/8598127.png',
  },
  {
    id: 45,
    name: 'Dry Cleaning Service',
    img: 'https://cdn-icons-png.flaticon.com/128/2383/2383938.png',
  },
  {
    id: 46,
    name: 'Valet Parking',
    img: 'https://cdn-icons-png.flaticon.com/128/3005/3005435.png',
  },
  {
    id: 48,
    name: 'Parcel Lockers',
    img: 'https://cdn-icons-png.flaticon.com/128/1832/1832687.png',
  },
  {
    id: 49,
    name: 'Art Studio',
    img: 'https://cdn-icons-png.flaticon.com/128/3461/3461314.png',
  },
  {
    id: 50,
    name: 'Community Garden',
    img: 'https://cdn-icons-png.flaticon.com/128/2545/2545548.png',
  },
  {
    id: 51,
    name: 'Sun Deck',
    img: 'https://cdn-icons-png.flaticon.com/128/12502/12502651.png',
  },
  {
    id: 52,
    name: 'Ping Pong Table',
    img: 'https://cdn-icons-png.flaticon.com/128/10786/10786755.png',
  },
  {
    id: 53,
    name: 'Karaoke Room',
    img: 'https://cdn-icons-png.flaticon.com/128/4066/4066005.png',
  },
  {
    id: 54,
    name: 'Volleyball Court',
    img: 'https://cdn-icons-png.flaticon.com/128/5029/5029622.png',
  },
  {
    id: 55,
    name: 'Badminton Court',
    img: 'https://cdn-icons-png.flaticon.com/128/3027/3027745.png',
  },
  {
    id: 56,
    name: 'Hiking Trails',
    img: 'https://cdn-icons-png.flaticon.com/128/1974/1974052.png',
  },
  {
    id: 57,
    name: 'Bowling Alley',
    img: 'https://cdn-icons-png.flaticon.com/128/3976/3976384.png',
  },
  {
    id: 59,
    name: 'Fishing Pond',
    img: 'https://cdn-icons-png.flaticon.com/128/1886/1886614.png',
  },
  {
    id: 60,
    name: 'Snooker/Pool Table',
    img: 'https://cdn-icons-png.flaticon.com/128/1711/1711985.png',
  },
]

export default amenities
