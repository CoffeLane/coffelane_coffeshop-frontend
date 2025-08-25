import image1 from '../assets/images/coffe/image_1.png';
import image2 from '../assets/images/coffe/image_2.png';
import image3 from '../assets/images/coffe/image_3.png';
import image4 from '../assets/images/coffe/image_4.png';
import image5 from '../assets/images/coffe/image_5.png';
import image6 from '../assets/images/coffe/image_6.png';
import image7 from '../assets/images/coffe/image_7.png';
import image8 from '../assets/images/coffe/image_8.png';
import image9 from '../assets/images/coffe/image_9.png';
import image10 from '../assets/images/coffe/image_10.png';
import image11 from '../assets/images/coffe/image_11.png';
import image12 from '../assets/images/coffe/image_12.png';

const products = [
  {
    id: 1,
    sku: "SKU-001",
    name: "Jacobs Barista Editions Americano",
    brend: "Jacobs",
    caffeine_type: "regular",
    sort: "arabica",
    roast: "medium",
    description: "Instant coffee Jacobs Barista Editions Americano. Finely ground 100% Arabica beans combined with instant coffee give your cup of Americano a rich yet balanced flavor.",
    photos_url: [{ id: 1, url: image1, position: 1 }],
    supplies: [
      { id: 1, weight: "250g", price: "20.05", quantity: 1, serving_type: "beans" },
      { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "beans" },
      { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "beans" },
    ],
    flavor_profiles: [{ id: 1, name: "Fruity" }],
    coffee_brew_guide: "From pour-over to espresso, Jacobs Barista Editions Americano unlocks a full spectrum of flavors.",
    sustainability: "Sourced from sustainable farms.",
    shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
  },
  {
    id: 2,
    sku: "SKU-002",
    name: "Lavazza Qualita Oro",
    brend: "Lavazza",
    caffeine_type: "regular",
    sort: "arabica",
    roast: "medium",
    description: "Coffee in grains Lavazza Qualita Oro.",
    photos_url: [{ id: 2, url: image2, position: 1 }],
    supplies: [
      { id: 1, weight: "250g", price: "20.05", quantity: 1, serving_type: "bag" },
      { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
      { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
    ],
    flavor_profiles: [{ id: 2, name: "Chocolate" }],
    coffee_brew_guide: "Can be prepared via French press, espresso machine, or pour-over.",
    sustainability: "Sourced from sustainable farms.",
    shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
  },
  {
    id: 3,
    sku: "SKU-003",
    name: "Starbucks Veranda Blend",
    brend: "Starbucks",
    caffeine_type: "regular",
    sort: "arabica",
    roast: "light",
    description: "Coffee Starbucks Veranda Blend.",
    photos_url: [{ id: 3, url: image3, position: 1 }],
    supplies: [
      { id: 1, weight: "250g", price: "21.22", quantity: 1, serving_type: "bag" },
      { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
      { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
    ],
    flavor_profiles: [{ id: 3, name: "Nutty" }],
    coffee_brew_guide: "Best brewed as pour-over or drip coffee for light, smooth taste.",
    sustainability: "Sourced from sustainable farms.",
    shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
  },
  {
    id: 4,
    sku: "SKU-004",
    name: "Blonde Starbucks Roast",
    brend: "Starbucks",
    caffeine_type: "regular",
    sort: "arabica_robusta",
    roast: "light",
    description: "Coffee Starbucks Blonde Roast.",
    photos_url: [{ id: 4, url: image4, position: 1 }],
    supplies: [
      { id: 1, weight: "250g", price: "15.00", quantity: 1, serving_type: "bag" },
      { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
      { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
    ],
    flavor_profiles: [{ id: 4, name: "Floral" }],
    coffee_brew_guide: "Light roasted coffee, perfect for a gentle morning cup.",
    sustainability: "Sourced from sustainable farms.",
    shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
  },
  {
    id: 5,
    sku: "SKU-005",
    name: "L'OR Espresso Chocolate Supremo",
    brend: "L'OR",
    caffeine_type: "regular",
    sort: "robusta",
    roast: "dark",
    description: "Ground coffee L'OR Espresso Chocolate Supremo.",
    photos_url: [{ id: 5, url: image5, position: 1 }],
    supplies: [
      { id: 1, weight: "250g", price: "16.00", quantity: 1, serving_type: "bag" },
      { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
      { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
    ],
    flavor_profiles: [{ id: 5, name: "Caramel" }],
    coffee_brew_guide: "Rich chocolate aroma, perfect for espresso lovers.",
    sustainability: "Sourced from sustainable farms.",
    shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
  },
  {
    id: 6,
    sku: "SKU-006",
    name: "L'OR Espresso Caramel Vanille",
    brend: "L'OR",
    caffeine_type: "regular",
    sort: "arabica_robusta",
    roast: "medium",
    description: "Ground coffee L'OR Espresso Caramel Vanille.",
    photos_url: [{ id: 6, url: image6, position: 1 }],
    supplies: [
      { id: 1, weight: "250g", price: "25.00", quantity: 1, serving_type: "bag" },
      { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
      { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
    ],
    flavor_profiles: [{ id: 6, name: "Vanilla" }],
    coffee_brew_guide: "Sweet caramel and vanilla notes for a smooth espresso experience.",
    sustainability: "Sourced from sustainable farms.",
    shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
  },
  {
    id: 7,
    sku: "SKU-007",
    name: "Jacobs Monarch",
    brend: "Jacobs",
    caffeine_type: "regular",
    sort: "arabica",
    roast: "medium",
    description: "Instant coffee Jacobs Monarch.",
    photos_url: [{ id: 7, url: image7, position: 1 }],
    supplies: [
      { id: 1, weight: "250g", price: "20.00", quantity: 1, serving_type: "bag" },
      { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
      { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
    ],
    flavor_profiles: [{ id: 7, name: "Nutty" }],
    coffee_brew_guide: "Classic instant coffee with rich aroma.",
    sustainability: "Sourced from sustainable farms.",
    shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
  },
  {
    id: 8,
    sku: "SKU-008",
    name: "Blaser Dom Kofe UA Ballerina",
    brend: "Blaser",
    caffeine_type: "regular",
    sort: "arabica",
    roast: "medium",
    description: "Coffee in grains Blaser Dom Kofe UA Ballerina.",
    photos_url: [{ id: 8, url: image8, position: 1 }],
    supplies: [
      { id: 1, weight: "250g", price: "19.00", quantity: 1, serving_type: "bag" },
      { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
      { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
    ],
    flavor_profiles: [{ id: 8, name: "Fruity" }],
    coffee_brew_guide: "Smooth grains for pour-over and French press.",
    sustainability: "Sourced from sustainable farms.",
    shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
  },
  {
    id: 9,
    sku: "SKU-009",
    name: "Blasercafe Sera",
    brend: "Blasercafe",
    caffeine_type: "regular",
    sort: "robusta",
    roast: "dark",
    description: "Coffee in grains Blasercafe Sera.",
    photos_url: [{ id: 9, url: image9, position: 1 }],
    supplies: [
      { id: 1, weight: "250g", price: "16.00", quantity: 1, serving_type: "bag" },
      { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
      { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
    ],
    flavor_profiles: [{ id: 9, name: "Spicy" }],
    coffee_brew_guide: "Strong robusta coffee for espresso lovers.",
    sustainability: "Sourced from sustainable farms.",
    shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
  },
  {
    id: 10,
    sku: "SKU-010",
    name: "Lavazza Crema&Gusto",
    brend: "Lavazza",
    caffeine_type: "regular",
    sort: "arabica_robusta",
    roast: "dark",
    description: "Lavazza Crema&Gusto.",
    photos_url: [{ id: 10, url: image10, position: 1 }],
    supplies: [
      { id: 1, weight: "250g", price: "25.00", quantity: 1, serving_type: "bag" },
      { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
      { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
    ],
    flavor_profiles: [{ id: 10, name: "Chocolate" }],
    coffee_brew_guide: "Rich and creamy espresso blend.",
    sustainability: "Sourced from sustainable farms.",
    shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
  },
  {
    id: 11,
    sku: "SKU-011",
    name: "Starbucks Pike Place",
    brend: "Starbucks",
    caffeine_type: "regular",
    sort: "arabica",
    roast: "medium",
    description: "Medium roasted Starbucks Pike Place.",
    photos_url: [{ id: 11, url: image11, position: 1 }],
    supplies: [
      { id: 1, weight: "250g", price: "20.00", quantity: 1, serving_type: "bag" },
      { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
      { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
    ],
    flavor_profiles: [{ id: 11, name: "Nutty" }],
    coffee_brew_guide: "Smooth, balanced flavor, ideal for any time of day.",
    sustainability: "Sourced from sustainable farms.",
    shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
  },
  {
    id: 12,
    sku: "SKU-012",
    name: "Nespresso Ristretto",
    brend: "Nespresso",
    caffeine_type: "regular",
    sort: "arabica_robusta",
    roast: "dark",
    description: "Nespresso Ristretto capsules for intense espresso.",
    photos_url: [{ id: 12, url: image12, position: 1 }],
    supplies: [
      { id: 1, weight: "10caps", price: "8.00", quantity: 1, serving_type: "capsules" },
      { id: 2, weight: "30caps", price: "22.00", quantity: 1, serving_type: "capsules" },
      { id: 3, weight: "50caps", price: "35.00", quantity: 1, serving_type: "capsules" },
    ],
    flavor_profiles: [{ id: 12, name: "Intense" }],
    coffee_brew_guide: "Use with Nespresso machines for strong espresso.",
    sustainability: "Sourced from sustainable farms.",
    shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
  }
];

export default products;
