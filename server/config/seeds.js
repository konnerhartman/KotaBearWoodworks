const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Tables' },
    { name: 'Lights' },
    { name: 'Wall Decor' },
    { name: 'Misc' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'A Frame Wine Rack',
      description:
        'This one of a kind wine rack holds up to 6 bottles of wine.',
      image: 'a-frame-wine.jpg',
      availability: 'No',
      category: categories[3]._id,
    },
    {
      name: '"Blessed" Cross #1',
      description:
        'A metal cross attached to a wooden cross backing',
      image: 'blessed-1.jpg',
      availability: 'Yes',
      category: categories[3]._id,
    },
    {
      name: '"Blessed/Faith" Cross',
      category: categories[3]._id,
      description:
        'A metal cross attached to a framed wooden board',
      image: 'blessed-faith.jpg',
      availability: 'Yes',
    },
    {
      name: 'Bottle Cap Frame',
      category: categories[2]._id,
      description:
        'This shadow box has an opening at the top to allow for continued additions',
      image: 'bottle-top-frame.jpg',
      availability: 'Yes',
    },
    {
      name: 'Coffee Table with Burnt Effect',
      category: categories[0]._id,
      description:
        'This coffee table has steel legs and the top is made of 2x4s. The burnt effect was applied with actual fire.',
      image: 'burnt-coffee-table.jpg',
      availability: 'No',
    },
    {
      name: 'End Table with Burnt Effect',
      category: categories[0]._id,
      description:
        'This end table has steel legs. The burnt effect was applied with actual fire.',
      image: 'burnt-end-table.jpg',
      availability: 'No',
    },
    {
      name: 'C Clamp Coat Rack',
      category: categories[3]._id,
      description:
        'This coat rack was made from real C clamps.',
      image: 'c-clamp-rack.jpg',
      availability: 'No',
    },
    {
      name: 'Dallas Stars Wall Art',
      category: categories[2]._id,
      description:
        'This wooden wall art was made out of scraps. Each of the pieces were stained and painted with various shades/colors. Multiple types of wood were used as well.',
      image: 'dallas-stars.jpg',
      availability: 'No',
    },
    {
      name: '"Faith" Cross #1',
      category: categories[3]._id,
      description:
        'A metal cross attached to a framed wooden board',
      image: 'faith-1.jpg',
      availability: 'Yes',
    },
    {
      name: '"Grace" Cross #1',
      category: categories[3]._id,
      description:
        'A metal cross attached to a framed wooden board',
      image: 'grace-1.jpg',
      availability: 'Yes',
    },
    {
      name: 'Helmet Rack with Burnt Effect',
      category: categories[3]._id,
      description:
        'This hemlet rack uses steel piping to hang a helmet and large nails to hang coats, gloves, etc.',
      image: 'helmet-rack.jpg',
      availability: 'No',
    },
    {
      name: 'Mason Jar Light Fixture',
      category: categories[1]._id,
      description:
        'This light fixture uses refurbished materials, including the wood, metal paneling, and mason jars.',
      image: 'mason-jar-light.jpg',
      availability: 'No',
    },
    {
      name: 'Whiskey Dispensers',
      category: categories[3]._id,
      description:
        'These whiskey dispensers are made of refurbished glass milk jugs.',
      image: 'milk-jugs.jpg',
      availability: 'No',
    },
    {
      name: 'Mountainscape/Headboard',
      category: categories[2]._id,
      description:
        'This wooden mountainscape shows a beautiful day/night image. It was built with recycled wood scraps. The headboard is also custom.',
      image: 'mountain-headboard.jpg',
      availability: 'No',
    },
    {
      name: 'Stove Top Cover',
      category: categories[3]._id,
      description:
        'This hard wood stove top cover acts as a great cutting board or a simple way to hide your stove burners.',
      image: 'oven-topper.jpg',
      availability: 'No',
    },
    {
      name: 'Western Star Shelf',
      category: categories[3]._id,
      description:
        'This western styled shelf features recycled wood with a live edge. The wooden designs were all cut by hand and the center star is metal.',
      image: 'star-shelf.jpg',
      availability: 'Yes',
    },
    {
      name: 'Texas Flag (Rectangle)',
      category: categories[2]._id,
      description:
        'This flag was made from recycled wood',
      image: 'texas-flag-1.jpg',
      availability: 'No',
    },
    {
      name: 'Texas Flag (Round)',
      category: categories[2]._id,
      description:
        'This flag was made from wood and is incased in a recycle metal barrel ring.',
      image: 'texas-flag-2.jpg',
      availability: 'Yes',
    },
    {
      name: '"Welcome" Sign',
      category: categories[2]._id,
      description:
        'This simple welcome sign features a metal "Welcome" attached to a wooden background',
      image: 'welcome.jpg',
      availability: 'Yes',
    },
    {
      name: 'Recycled Window with Two Shelves',
      category: categories[2]._id,
      description:
        'This recycled window features two shelves made of old house siding',
      image: 'window-shelf-2.jpg',
      availability: 'No',
    },
    {
      name: 'Recycled Window with a Shelf',
      category: categories[2]._id,
      description:
        'This recycled window features a single shelf',
      image: 'window-shelf-1.jpg',
      availability: 'Yes',
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
