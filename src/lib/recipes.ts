export type Recipe = {
  id: string;
  category: 'food' | 'drink';
  title: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  ingredients: {
    en: string[];
    id: string[];
  };
  steps: {
    en: string[];
    id: string[];
  };
  prepTime: string;
  servings: number;
};

export const recipes: Recipe[] = [
  {
    id: '1',
    category: 'food',
    title: {
      en: 'Classic Beef Rendang',
      id: 'Rendang Daging Sapi Klasik',
    },
    description: {
      en: 'A rich and tender coconut beef stew which is explosively flavorful.',
      id: 'Daging sapi yang dimasak dengan santan hingga empuk dan kaya akan rasa.',
    },
    prepTime: '4 hours',
    servings: 6,
    ingredients: {
      en: [
        '1 kg beef, cut into cubes',
        '400ml thick coconut milk',
        '200ml thin coconut milk',
        '2 lemongrass stalks, bruised',
        '4 kaffir lime leaves',
        '2 turmeric leaves, tied into a knot',
        '2 asam kandis (dried sour fruit)',
        'Spice paste (bumbu): 15 shallots, 8 cloves garlic, 25g ginger, 25g galangal, 50g red chili peppers, 1 tbsp coriander, 1 tsp cumin, 1 tsp fennel, 1/2 tsp nutmeg, salt to taste',
      ],
      id: [
        '1 kg daging sapi, potong dadu',
        '400ml santan kental',
        '200ml santan encer',
        '2 batang serai, memarkan',
        '4 lembar daun jeruk',
        '2 lembar daun kunyit, ikat simpul',
        '2 buah asam kandis',
        'Bumbu halus: 15 bawang merah, 8 siung bawang putih, 25g jahe, 25g lengkuas, 50g cabai merah, 1 sdm ketumbar, 1 sdt jintan, 1 sdt adas, 1/2 sdt pala, garam secukupnya',
      ],
    },
    steps: {
      en: [
        'Blend all spice paste ingredients until smooth.',
        'In a large pot, combine beef, spice paste, lemongrass, lime leaves, and turmeric leaves.',
        'Pour in the thin coconut milk and bring to a boil.',
        'Reduce heat and simmer, stirring occasionally, until the liquid has almost evaporated.',
        'Add the thick coconut milk and asam kandis. Continue to simmer and stir until the oil separates and the beef is tender and dark brown.',
        'Serve hot with steamed rice.',
      ],
      id: [
        'Haluskan semua bahan bumbu halus.',
        'Dalam panci besar, campurkan daging, bumbu halus, serai, daun jeruk, dan daun kunyit.',
        'Tuangkan santan encer dan masak hingga mendidih.',
        'Kecilkan api dan masak sambil sesekali diaduk hingga cairan hampir menguap.',
        'Masukkan santan kental dan asam kandis. Lanjutkan memasak dan aduk hingga minyak keluar dan daging empuk dan berwarna cokelat tua.',
        'Sajikan panas dengan nasi putih.',
      ],
    },
  },
  {
    id: '2',
    category: 'food',
    title: {
      en: 'Gado-Gado',
      id: 'Gado-Gado',
    },
    description: {
      en: 'An Indonesian salad of slightly boiled, blanched or steamed vegetables and hard-boiled eggs, fried tofu and tempeh, served with a peanut sauce dressing.',
      id: 'Salad khas Indonesia berisi sayuran rebus, telur rebus, tahu dan tempe goreng, disajikan dengan saus kacang.',
    },
    prepTime: '45 minutes',
    servings: 4,
    ingredients: {
      en: [
        '200g tempeh, fried',
        '200g firm tofu, fried',
        '4 hard-boiled eggs, halved',
        '100g bean sprouts, blanched',
        '100g cabbage, shredded and blanched',
        '100g long beans, cut and blanched',
        '1 cucumber, sliced',
        'Peanut sauce: 200g roasted peanuts, 3 cloves garlic, 5 red chili peppers, 50g palm sugar, 1 tbsp tamarind paste, 200ml water, salt to taste',
      ],
      id: [
        '200g tempe, goreng',
        '200g tahu, goreng',
        '4 butir telur rebus, belah dua',
        '100g tauge, seduh air panas',
        '100g kol, iris tipis dan seduh air panas',
        '100g kacang panjang, potong dan rebus',
        '1 buah timun, iris',
        'Saus kacang: 200g kacang tanah sangrai, 3 siung bawang putih, 5 cabai merah, 50g gula merah, 1 sdm pasta asam jawa, 200ml air, garam secukupnya',
      ],
    },
    steps: {
      en: [
        'For the sauce, grind peanuts, garlic, chili, and salt. Add palm sugar and tamarind paste. Gradually add water until you get a smooth, thick sauce.',
        'Arrange all the vegetables, tofu, tempeh, and eggs on a serving platter.',
        'Pour the peanut sauce over the arranged ingredients.',
        'Garnish with fried shallots and serve with prawn crackers (krupuk).',
      ],
      id: [
        'Untuk saus, haluskan kacang tanah, bawang putih, cabai, dan garam. Tambahkan gula merah dan pasta asam jawa. Tambahkan air sedikit demi sedikit hingga saus halus dan kental.',
        'Susun semua sayuran, tahu, tempe, dan telur di piring saji.',
        'Siram saus kacang di atas bahan-bahan yang telah disusun.',
        'Taburi dengan bawang goreng dan sajikan dengan kerupuk udang.',
      ],
    },
  },
  {
    id: '3',
    category: 'food',
    title: {
      en: 'Chicken Satay with Peanut Sauce',
      id: 'Sate Ayam dengan Saus Kacang',
    },
    description: {
      en: 'Skewered and grilled chicken, served with a flavorful peanut sauce.',
      id: 'Daging ayam yang ditusuk dan dipanggang, disajikan dengan saus kacang yang lezat.',
    },
    prepTime: '1 hour',
    servings: 4,
    ingredients: {
      en: [
        '500g chicken breast, cut into small cubes',
        '2 tbsp sweet soy sauce (kecap manis)',
        '1 tbsp oil',
        'Bamboo skewers, soaked in water',
        'Lontong or rice cakes for serving',
        'For peanut sauce see Gado-Gado recipe',
      ],
      id: [
        '500g dada ayam, potong dadu kecil',
        '2 sdm kecap manis',
        '1 sdm minyak',
        'Tusuk sate, rendam dalam air',
        'Lontong atau nasi untuk penyajian',
        'Untuk saus kacang lihat resep Gado-Gado',
      ],
    },
    steps: {
      en: [
        'Marinate chicken cubes with sweet soy sauce and oil for at least 30 minutes.',
        'Thread the chicken onto skewers.',
        'Grill the satay over charcoal or on a grill pan until cooked through and slightly charred.',
        'Serve hot with peanut sauce, sliced shallots, and chopped chilies.',
      ],
      id: [
        'Marinasi potongan ayam dengan kecap manis dan minyak selama minimal 30 menit.',
        'Tusuk ayam ke tusuk sate.',
        'Bakar sate di atas arang atau wajan panggangan hingga matang dan sedikit gosong.',
        'Sajikan panas dengan saus kacang, irisan bawang merah, dan potongan cabai.',
      ],
    },
  },
  {
    id: '4',
    category: 'food',
    title: {
      en: 'Nasi Goreng',
      id: 'Nasi Goreng',
    },
    description: {
      en: 'Indonesian style fried rice, a popular staple.',
      id: 'Nasi goreng ala Indonesia, makanan pokok yang populer.',
    },
    prepTime: '20 minutes',
    servings: 2,
    ingredients: {
      en: [
        '2 plates of day-old cooked rice',
        '2 tbsp oil',
        '2 eggs, lightly beaten',
        '100g chicken or shrimp, chopped',
        '2 cloves garlic, minced',
        '3 shallots, sliced',
        '1 red chili, sliced (optional)',
        '2 tbsp sweet soy sauce (kecap manis)',
        '1 tbsp soy sauce',
        'Salt and pepper to taste',
      ],
      id: [
        '2 piring nasi putih sisa kemarin',
        '2 sdm minyak',
        '2 butir telur, kocok lepas',
        '100g ayam atau udang, cincang',
        '2 siung bawang putih, cincang halus',
        '3 bawang merah, iris',
        '1 cabai merah, iris (opsional)',
        '2 sdm kecap manis',
        '1 sdm kecap asin',
        'Garam dan merica secukupnya',
      ],
    },
    steps: {
      en: [
        'Heat oil in a wok or large pan. Sauté garlic, shallots, and chili until fragrant.',
        'Add chicken/shrimp and cook until it changes color.',
        'Push ingredients to one side, pour in the egg and scramble.',
        'Add the rice, sweet soy sauce, and soy sauce. Stir-fry until everything is well combined and the rice is heated through.',
        'Season with salt and pepper. Serve hot with a fried egg on top and cucumber slices.',
      ],
      id: [
        'Panaskan minyak di wajan. Tumis bawang putih, bawang merah, dan cabai hingga harum.',
        'Masukkan ayam/udang dan masak hingga berubah warna.',
        'Sisihkan bahan ke satu sisi wajan, tuang telur dan buat orak-arik.',
        'Masukkan nasi, kecap manis, dan kecap asin. Aduk rata hingga semua tercampur dan nasi panas.',
        'Bumbui dengan garam dan merica. Sajikan panas dengan telur mata sapi di atasnya dan irisan timun.',
      ],
    },
  },
  {
    id: '5',
    category: 'drink',
    title: {
      en: 'Es Cendol',
      id: 'Es Cendol',
    },
    description: {
      en: 'A traditional Indonesian iced sweet dessert with droplets of green rice flour jelly, coconut milk and palm sugar syrup.',
      id: 'Minuman penutup manis tradisional Indonesia dengan jeli tepung beras hijau, santan, dan sirup gula aren.',
    },
    prepTime: '30 minutes',
    servings: 4,
    ingredients: {
      en: [
        'For Cendol: 100g rice flour, 50g tapioca flour, 600ml water with pandan extract',
        'For Syrup: 250g palm sugar, 100ml water, 1 pandan leaf',
        'Coconut milk sauce: 400ml thick coconut milk, 1/2 tsp salt, 1 pandan leaf',
        'Ice cubes',
        'Jackfruit, diced (optional)',
      ],
      id: [
        'Untuk Cendol: 100g tepung beras, 50g tepung tapioka, 600ml air pandan',
        'Untuk Sirup: 250g gula aren, 100ml air, 1 lembar daun pandan',
        'Saus Santan: 400ml santan kental, 1/2 sdt garam, 1 lembar daun pandan',
        'Es batu',
        'Nangka, potong dadu (opsional)',
      ],
    },
    steps: {
      en: [
        'Cendol: Mix flours with half the water. Bring the rest of the water to a boil, then pour in the flour mixture. Cook until thick and glossy. Press through a cendol strainer into a bowl of cold water.',
        'Syrup: Boil palm sugar, water, and pandan leaf until the sugar dissolves. Strain.',
        'Coconut Milk Sauce: Boil coconut milk with salt and pandan leaf, stirring constantly. Let it cool.',
        'To serve: Place cendol, syrup, and jackfruit in a glass. Top with coconut milk sauce and ice cubes.',
      ],
      id: [
        'Cendol: Campur tepung dengan setengah bagian air. Didihkan sisa air, lalu tuang adonan tepung. Masak hingga kental dan mengkilat. Cetak menggunakan cetakan cendol ke dalam baskom berisi air es.',
        'Sirup: Rebus gula aren, air, dan daun pandan hingga gula larut. Saring.',
        'Saus Santan: Rebus santan dengan garam dan daun pandan sambil terus diaduk. Dinginkan.',
        'Penyajian: Masukkan cendol, sirup, dan nangka ke dalam gelas. Tuangi saus santan dan tambahkan es batu.',
      ],
    },
  },
  {
    id: '6',
    category: 'drink',
    title: {
      en: 'Bandrek',
      id: 'Bandrek',
    },
    description: {
      en: 'A traditional Sundanese hot and spicy drink that is very warming.',
      id: 'Minuman hangat dan pedas tradisional Sunda yang sangat menghangatkan badan.',
    },
    prepTime: '20 minutes',
    servings: 2,
    ingredients: {
      en: [
        '500ml water',
        '100g ginger, bruised',
        '1 lemongrass stalk, bruised',
        '2-inch cinnamon stick',
        '75g palm sugar',
        'A pinch of salt',
        'Young coconut meat (optional)',
        'Sweetened condensed milk (optional)',
      ],
      id: [
        '500ml air',
        '100g jahe, memarkan',
        '1 batang serai, memarkan',
        '5 cm kayu manis',
        '75g gula aren',
        'Sejumput garam',
        'Daging kelapa muda (opsional)',
        'Susu kental manis (opsional)',
      ],
    },
    steps: {
      en: [
        'In a pot, combine water, ginger, lemongrass, cinnamon, palm sugar, and salt.',
        'Bring to a boil, then reduce heat and simmer for about 15 minutes for the flavors to meld.',
        'Strain the drink into cups.',
        'Add young coconut meat or sweetened condensed milk if desired. Serve hot.',
      ],
      id: [
        'Dalam panci, campurkan air, jahe, serai, kayu manis, gula aren, dan garam.',
        'Masak hingga mendidih, lalu kecilkan api dan rebus selama sekitar 15 menit agar rasa menyatu.',
        'Saring minuman ke dalam cangkir.',
        'Tambahkan daging kelapa muda atau susu kental manis jika suka. Sajikan selagi panas.',
      ],
    },
  },
];

export const getFoodRecipes = () => recipes.filter(recipe => recipe.category === 'food');
export const getDrinkRecipes = () => recipes.filter(recipe => recipe.category === 'drink');

export const getRecipeById = (id: string) => recipes.find(recipe => recipe.id === id);
