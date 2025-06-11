// export const drawerList = [
//   {
//     name: 'My Profile',
//     icon: require('../assets/images/MyProfile.png'),
//   },
//   {
//     name: 'Contacts',
//     icon: require('../assets/images/Contact.png'),
//   },
//   {
//     name: 'Calls',
//     icon: require('../assets/images/Phone.png'),
//   },
//   {
//     name: 'Saved Message',
//     icon: require('../assets/images/Saved.png'),
//   },
//   {
//     name: 'Settings',
//     icon: require('../assets/images/Setting.png'),
//   },
// ];

export const drawerList = [
  {
    name: 'My Profile',
    icon: require('../assets/images/drawerNavigationImages/MyProfile.png'),
    navigate: 'MyProfile',
  },
  {
    name: 'Contacts',
    icon: require('../assets/images/drawerNavigationImages/Contact.png'),
    navigate: 'Contacts',
  },
  {
    name: 'Calls',
    icon: require('../assets/images/drawerNavigationImages/Phone.png'),
    navigate: 'Calls',
  },
  {
    name: 'Saved Message',
    icon: require('../assets/images/drawerNavigationImages/Saved.png'),
    navigate: 'SavedMessage',
  },
  {
    name: 'Settings',
    icon: require('../assets/images/drawerNavigationImages/Setting.png'),
    navigate: 'Settings',
  },
];


export const message = [];

export const profileImages = [
  require('../assets/images/drawerNavigationImages/Profile1.png'),
  require('../assets/images/drawerNavigationImages/Profile2.png'),
  require('../assets/images/drawerNavigationImages/Profile3.png'),
  require('../assets/images/drawerNavigationImages/Profile4.png'),
  require('../assets/images/drawerNavigationImages/Profile5.png'),
  require('../assets/images/drawerNavigationImages/Profile6.png'),
  require('../assets/images/drawerNavigationImages/Profile7.png'),
  require('../assets/images/drawerNavigationImages/Profile8.png'),
  require('../assets/images/drawerNavigationImages/Profile9.png'),
  require('../assets/images/drawerNavigationImages/Profile10.png'),
];

const names = [
  'Peter Parker',
  'Tony Stark',
  'Steve Rogers',
  'Thor',
  'Bruce Banner',
  'Natasha Romanoff',
  'Clint Barton',
  'Loki',
  'Stephen Strange',
  'Carol Danvers',
  'Scott Lang',
  'Hope van Dyne',
  'Wanda Maximoff',
  'Vision',
  'Sam Wilson',
  'Bucky Barnes',
  'Peter Quill',
  'Gamora',
  'Drax',
  'Rocket',
];

const greetings = [
  'Hello',
  'Hi there',
  'Hey',
  'Greetings',
  'Dear',
  'Good day',
];

const feelings = [
  'I hope you are well today.',
  "How's your day going?",
  'I wanted to say hello.',
  "I've always admired your work.",
];

const hopes = [
  "I hope you're having a fantastic day.",
  'Wishing you a wonderful day ahead.',
  'I hope life is treating you kindly.',
  'Keep shining!',
];

for (let i = 1; i <= 20; i++) {
  const randomProfileIndex = Math.floor(Math.random() * profileImages.length);
  const randomNameIndex = Math.floor(Math.random() * names.length);
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  const randomFeeling = feelings[Math.floor(Math.random() * feelings.length)];
  const randomHope = hopes[Math.floor(Math.random() * hopes.length)];

  const messages = `${randomGreeting}, it's ${names[randomNameIndex]}. ${randomFeeling} ${randomHope}`;

  message.push({
    name: names[randomNameIndex],
    image: profileImages[randomProfileIndex],
    message: messages,
  });
}
