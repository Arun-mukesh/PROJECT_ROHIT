export type Product = {
  id: string; name: string; slug: string; description: string; price: number;
  originalPrice?: number; categories: string[]; palette: string[]; artwork: string;
  sizes: string[]; featured?: boolean; bestseller?: boolean; badge?: string; stock: boolean; kind?: string
  customImage?: string
}

export const categories = [
  { name: 'Movies & Cinema', slug: 'movies-cinema', description: 'A little silver-screen magic for your everyday.', palette: ['#483532','#d08e63'], children: ['Tamil Movies','English Movies','Suriya Movies','Rajinikanth Movies','STR Movies','Vijay Movies','Fight Club','Stranger Things','Doomsday'] },
  { name: 'Superheroes', slug: 'superheroes', description: 'Legends, symbols and larger-than-life worlds.', palette: ['#222c42','#c4513e'], children: ['Spider-Man','Iron Man','Black Panther','Captain America','Loki'] },
  { name: 'Sports', slug: 'sports', description: 'For the moments that live on long after the final whistle.', palette: ['#244537','#d5a945'], children: ['CSK','RCB','MS Dhoni','Virat Kohli'] },
  { name: 'Automotive', slug: 'automotive', description: 'Beautiful machines. Open roads. Endless possibility.', palette: ['#4b5359','#c5a178'], children: ['Cars','Bikes'] },
  { name: 'Pop Culture', slug: 'pop-culture', description: 'Find your people, your sound, your next world.', palette: ['#594362','#da968e'], children: ['BTS','Anime','Games'] },
  { name: 'Collectibles', slug: 'collectibles', description: 'Little things worth holding on to.', palette: ['#71614a','#d6c4a2'], children: ['Cool Posters','Special Posters','Crochet','Special Edition Bookmarks','Customization'] },
]

const make = (id: string, name: string, categories: string[], price: number, palette: string[], artwork: string, opts: Partial<Product> = {}): Product => ({ id, name, slug: id, description: `An original PIKO studio artwork inspired by ${name.toLowerCase()}. Printed with care on heavyweight, gallery-ready stock, made to bring a little more of what you love into your space.`, price, categories, palette, artwork, sizes: ['A4', 'A3', 'A2'], stock: true, ...opts })

export const initialProducts: Product[] = [
  make('midnight-drive','Midnight Drive',['Cars','Automotive','Cool Posters'],299,['#152431','#db7e42'],'orbit',{featured:true,bestseller:true,badge:'Bestseller',originalPrice:399}),
  make('blue-hour','Blue Hour No. 04',['Tamil Movies','Suriya Movies','Movies & Cinema'],249,['#293c4b','#d29a71'],'sunset',{featured:true,badge:'Trending'}),
  make('the-last-light','The Last Light',['English Movies','Movies & Cinema','Special Posters'],349,['#38292a','#dd9a6c'],'moon',{featured:true,badge:'Limited edition'}),
  make('redline','Redline — Track Study',['Bikes','Automotive'],279,['#492a28','#e4623e'],'speed'),
  make('monsoon-raga','Monsoon Raga',['Tamil Movies','Rajinikanth Movies','Movies & Cinema'],299,['#424537','#d1a06e'],'rain',{bestseller:true}),
  make('cosmic-web','Cosmic Web',['Spider-Man','Superheroes'],299,['#182c42','#d54d45'],'web',{badge:'New'}),
  make('golden-hour-7','Golden Hour / 07',['MS Dhoni','CSK','Sports'],279,['#1f4335','#dfbd5a'],'sun',{bestseller:true}),
  make('after-the-arcade','After the Arcade',['Games','Pop Culture'],249,['#252447','#d362c3'],'pixel'),
  make('quietly-loud','Quietly Loud',['BTS','Pop Culture'],299,['#4c4056','#d0a5d8'],'flower',{badge:'New'}),
  make('still-standing','Still Standing',['Vijay Movies','Tamil Movies','Movies & Cinema'],299,['#41332b','#d9ad72'],'figure'),
  make('emerald-echo','Emerald Echo',['Black Panther','Superheroes'],349,['#143b36','#d5b96a'],'halo'),
  make('orbit-01','Orbit Study No. 01',['Iron Man','Superheroes'],299,['#462e2b','#e7a149'],'orbit'),
  make('the-ninth-inning','The Ninth Inning',['RCB','Virat Kohli','Sports'],299,['#481f2b','#db8b52'],'sunset'),
  make('parallel-lines','Parallel Lines',['STR Movies','Tamil Movies','Movies & Cinema'],249,['#373333','#d48563'],'lines'),
  make('strange-weather','Strange Weather',['Stranger Things','English Movies','Movies & Cinema'],349,['#302b3d','#c24e3f'],'moon'),
  make('good-company','Good Company',['Anime','Pop Culture'],279,['#54756b','#e5b89d'],'flower'),
  make('green-mile','Green Mile',['English Movies','Fight Club','Movies & Cinema'],299,['#39433e','#c5a36e'],'figure'),
  make('timekeeper','The Timekeeper',['Loki','Superheroes'],329,['#365348','#d49d54'],'clock'),
  make('national-colours','National Colours',['Captain America','Superheroes'],299,['#263a51','#bd554c'],'stripes'),
  make('daybreak','Daybreak on Marina',['Tamil Movies','Movies & Cinema'],249,['#426374','#dfaf78'],'sun'),
  make('silver-screen','Silver Screen Study',['Suriya Movies','Tamil Movies'],349,['#3b3634','#c4a18c'],'portrait'),
  make('the-fifth-season','The Fifth Season',['Doomsday','English Movies','Movies & Cinema'],349,['#332b38','#d26748'],'moon'),
  make('champions-study','Champions Study',['CSK','Sports'],279,['#194638','#d5b44f'],'stripes'),
  make('number-eighteen','Number Eighteen',['Virat Kohli','RCB','Sports'],299,['#432c37','#d6855c'],'speed'),
  make('coastal-run','Coastal Run',['Bikes','Automotive'],249,['#34535e','#d7a776'],'rain'),
  make('paper-moon','Paper Moon',['Anime','Pop Culture'],279,['#55495d','#e4c9a7'],'moon'),
  make('arcade-noir','Arcade Noir',['Games','Pop Culture'],299,['#252b49','#63c1b3'],'pixel'),
  make('warm-static','Warm Static',['Special Posters','Cool Posters'],249,['#51423b','#d89f68'],'lines'),
  make('little-worlds','Little Worlds',['Special Edition Bookmarks','Collectibles'],149,['#5c493a','#d6b17b'],'bookmark',{sizes:['Set of 2','Set of 4'],kind:'Bookmark',badge:'Giftable'}),
  make('soft-forms','Soft Forms — Crochet Daisy',['Crochet','Collectibles'],399,['#e5d7bf','#b96c58'],'crochet',{sizes:['Single','Set of 3'],kind:'Crochet'}),
  make('red-room','The Red Room',['Special Posters','Rajinikanth Movies','Tamil Movies'],399,['#432724','#c34c36'],'portrait',{badge:'Limited edition'}),
  make('fifth-dimension','Fifth Dimension',['Anime','Pop Culture'],279,['#463a5b','#9ec7d0'],'orbit'),
  make('fast-lane','Fast Lane No. 01',['Cars','Automotive'],299,['#303b43','#d6654f'],'speed'),
  make('the-long-game','The Long Game',['MS Dhoni','CSK','Sports'],299,['#29483a','#c9a954'],'figure'),
  make('violet-signal','Violet Signal',['BTS','Pop Culture'],299,['#554362','#d9a9ce'],'halo'),
  make('daydream-collective','Daydream Collective',['Customization','Collectibles'],499,['#e8d8c7','#a9705b'],'flower',{sizes:['A4','A3'],kind:'Custom enquiry',badge:'Made for you'}),
]
