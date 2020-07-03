export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getRandomName() {
  const cities = [
    'London',
    'Birmingham',
    'Leeds',
    'Glasgow',
    'Sheffield',
    'Bradford',
    'Edinburgh',
    'Liverpool',
    'Manchester',
    'Bristol',
    'Wakefield',
    'Cardiff',
    'Coventry',
    'Nottingham',
    'Leicester',
    'Sunderland',
    'Belfast',
    'Newcastle upon Tyne',
    'Brighton',
    'Hull',
  ];

  const venues = [
    'Arena',
    'Roundhouse',
    'Hall',
    'Apollo',
    'Theatre',
    'House',
    'Coliseum',
    'Opera House',
    'Hippodrome',
    'Club',
    'Arches',
    'Rooms',
    'Exchange',
    'Forum',
    'Mills',
    'Union',
    'Pavilion',
    'Arts Centre',
    'Gardens',
    'Academy',
  ];

  return `${rando(cities)}-${rando(venues)}`;
}
