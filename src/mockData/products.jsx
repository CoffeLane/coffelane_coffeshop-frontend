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
        name: "Jacobs Barista Editions Americano",
        description: "Instant coffee Jacobs Barista Editions Americano. Finely ground 100% Arabica beans combined with instant coffee give your cup of Americano a rich yet balanced flavor. Experience the magic of Jacobs’ Aromagold Velvet in every sip of Jacobs Barista Editions Americano. Enjoy it as a classic black coffee or with a splash of milk. Jacobs Barista Editions Americano tastes just like a barista-made coffee from your favorite café!",
        photos_url: [image1],
        price: "12",
        supplies: [
            { id: 1, weight: "250g", price: "20.05", quantity: 1, serving_type: "bag" },
            { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
            { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
        ],
        coffee_brew_guide: "For coffee enthusiasts seeking to unlock the full spectrum of flavor from their beloved Blind Dog Coffee, the journey to the perfect cup begins not just with quality beans, but with the brewing method itself. From delicate notes to robust intensity, how you prepare your coffee dramatically impacts its taste profile. Our individual Blind Dog Coffee roasts can be prepared in a variety of ways, including popular brewing types such as the nuanced clarity of a pour-over, the rich immersion of a French press, the classic simplicity of a drip coffee maker, the elegant precision of a Chemex, and the bold punch of an espresso machine.",
        sustainability: "Our coffee is sourced from sustainable farms, ensuring minimal environmental impact.",
        shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
    },
    {
        id: 2,
        name: "Lavazza Qualita Oro",
        description: "Coffee in grains Lavazza Qualita Oro",
        photos_url: [image2],
        price: "20.05",
        supplies: [
            { id: 1, weight: "250g", price: "20.05", quantity: 1, serving_type: "bag" },
            { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
            { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
        ],
        coffee_brew_guide: "For coffee enthusiasts seeking to unlock the full spectrum of flavor from their beloved Blind Dog Coffee, the journey to the perfect cup begins not just with quality beans, but with the brewing method itself. From delicate notes to robust intensity, how you prepare your coffee dramatically impacts its taste profile. Our individual Blind Dog Coffee roasts can be prepared in a variety of ways, including popular brewing types such as the nuanced clarity of a pour-over, the rich immersion of a French press, the classic simplicity of a drip coffee maker, the elegant precision of a Chemex, and the bold punch of an espresso machine.",
        sustainability: "Our coffee is sourced from sustainable farms, ensuring minimal environmental impact.",
        shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
    },
    {
        id: 3,
        name: "Starbucks Veranda Blend",
        description: "Coffee Starbucks Veranda Blend",
        photos_url: [image3],
        price: "21.22",
        supplies: [
            { id: 1, weight: "250g", price: "21.22", quantity: 1, serving_type: "bag" },
            { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
            { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
        ],
        coffee_brew_guide: "For coffee enthusiasts seeking to unlock the full spectrum of flavor from their beloved Blind Dog Coffee, the journey to the perfect cup begins not just with quality beans, but with the brewing method itself. From delicate notes to robust intensity, how you prepare your coffee dramatically impacts its taste profile. Our individual Blind Dog Coffee roasts can be prepared in a variety of ways, including popular brewing types such as the nuanced clarity of a pour-over, the rich immersion of a French press, the classic simplicity of a drip coffee maker, the elegant precision of a Chemex, and the bold punch of an espresso machine.",
        sustainability: "Our coffee is sourced from sustainable farms, ensuring minimal environmental impact.",
        shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
    },
    {
        id: 4,
        name: " Blonde Starbucks Roast",
        description: "Coffee Starbucks Blonde Starbucks Roast",
        photos_url: [image4],
        price: "15",
        supplies: [
            { id: 1, weight: "250g", price: "15", quantity: 1, serving_type: "bag" },
            { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
            { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
        ],
        coffee_brew_guide: "For coffee enthusiasts seeking to unlock the full spectrum of flavor from their beloved Blind Dog Coffee, the journey to the perfect cup begins not just with quality beans, but with the brewing method itself. From delicate notes to robust intensity, how you prepare your coffee dramatically impacts its taste profile. Our individual Blind Dog Coffee roasts can be prepared in a variety of ways, including popular brewing types such as the nuanced clarity of a pour-over, the rich immersion of a French press, the classic simplicity of a drip coffee maker, the elegant precision of a Chemex, and the bold punch of an espresso machine.",
        sustainability: "Our coffee is sourced from sustainable farms, ensuring minimal environmental impact.",
        shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
    },
    {
        id: 5,
        name: "L'OR Espresso Chocolate Supremo",
        description: "Ground coffee L'OR Espresso Chocolate Supremo",
        photos_url: [image5],
        price: "16",
        supplies: [
            { id: 1, weight: "250g", price: "16", quantity: 1, serving_type: "bag" },
            { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
            { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
        ],
        coffee_brew_guide: "For coffee enthusiasts seeking to unlock the full spectrum of flavor from their beloved Blind Dog Coffee, the journey to the perfect cup begins not just with quality beans, but with the brewing method itself. From delicate notes to robust intensity, how you prepare your coffee dramatically impacts its taste profile. Our individual Blind Dog Coffee roasts can be prepared in a variety of ways, including popular brewing types such as the nuanced clarity of a pour-over, the rich immersion of a French press, the classic simplicity of a drip coffee maker, the elegant precision of a Chemex, and the bold punch of an espresso machine.",
        sustainability: "Our coffee is sourced from sustainable farms, ensuring minimal environmental impact.",
        shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
    },
    {
        id: 6,
        name: "L'OR Espresso Caramel Vanille",
        description: "Ground coffee L'OR Espresso Caramel Vanille",
        photos_url: [image6],
        price: "25",
        supplies: [
            { id: 1, weight: "250g", price: "25", quantity: 1, serving_type: "bag" },
            { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
            { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
        ],
        coffee_brew_guide: "For coffee enthusiasts seeking to unlock the full spectrum of flavor from their beloved Blind Dog Coffee, the journey to the perfect cup begins not just with quality beans, but with the brewing method itself. From delicate notes to robust intensity, how you prepare your coffee dramatically impacts its taste profile. Our individual Blind Dog Coffee roasts can be prepared in a variety of ways, including popular brewing types such as the nuanced clarity of a pour-over, the rich immersion of a French press, the classic simplicity of a drip coffee maker, the elegant precision of a Chemex, and the bold punch of an espresso machine.",
        sustainability: "Our coffee is sourced from sustainable farms, ensuring minimal environmental impact.",
        shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
    },
    {
        id: 7,
        name: "Jacobs Monarch",
        description: "Instant coffee Jacobs Monarch. Finely ground 100% Arabica beans combined with instant coffee give your cup of Americano a rich yet balanced flavor. Experience the magic of Jacobs’ Aromagold Velvet in every sip of Jacobs Barista Editions Americano. Enjoy it as a classic black coffee or with a splash of milk. Jacobs Barista Editions Americano tastes just like a barista-made coffee from your favorite café!",
        photos_url: [image7],
        price: "20",
        supplies: [
            { id: 1, weight: "250g", price: "20", quantity: 1, serving_type: "bag" },
            { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
            { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
        ],
        coffee_brew_guide: "For coffee enthusiasts seeking to unlock the full spectrum of flavor from their beloved Blind Dog Coffee, the journey to the perfect cup begins not just with quality beans, but with the brewing method itself. From delicate notes to robust intensity, how you prepare your coffee dramatically impacts its taste profile. Our individual Blind Dog Coffee roasts can be prepared in a variety of ways, including popular brewing types such as the nuanced clarity of a pour-over, the rich immersion of a French press, the classic simplicity of a drip coffee maker, the elegant precision of a Chemex, and the bold punch of an espresso machine.",
        sustainability: "Our coffee is sourced from sustainable farms, ensuring minimal environmental impact.",
        shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
    },
    {
        id: 8,
        name: "Blaser Dom Kofe UA Ballerina",
        description: "Coffee in grains Blaser Dom Kofe UA Ballerina",
        photos_url: [image8],
        price: "19",
        supplies: [
            { id: 1, weight: "250g", price: "19", quantity: 1, serving_type: "bag" },
            { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
            { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
        ],
        coffee_brew_guide: "For coffee enthusiasts seeking to unlock the full spectrum of flavor from their beloved Blind Dog Coffee, the journey to the perfect cup begins not just with quality beans, but with the brewing method itself. From delicate notes to robust intensity, how you prepare your coffee dramatically impacts its taste profile. Our individual Blind Dog Coffee roasts can be prepared in a variety of ways, including popular brewing types such as the nuanced clarity of a pour-over, the rich immersion of a French press, the classic simplicity of a drip coffee maker, the elegant precision of a Chemex, and the bold punch of an espresso machine.",
        sustainability: "Our coffee is sourced from sustainable farms, ensuring minimal environmental impact.",
        shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
    },
    {
        id: 9,
        name: "Blasercafe Sera",
        description: "Coffee in grains Blasercafe Sera",
        photos_url: [image9],
        price: "16",
        supplies: [
            { id: 1, weight: "250g", price: "16", quantity: 1, serving_type: "bag" },
            { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
            { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
        ],
        coffee_brew_guide: "For coffee enthusiasts seeking to unlock the full spectrum of flavor from their beloved Blind Dog Coffee, the journey to the perfect cup begins not just with quality beans, but with the brewing method itself. From delicate notes to robust intensity, how you prepare your coffee dramatically impacts its taste profile. Our individual Blind Dog Coffee roasts can be prepared in a variety of ways, including popular brewing types such as the nuanced clarity of a pour-over, the rich immersion of a French press, the classic simplicity of a drip coffee maker, the elegant precision of a Chemex, and the bold punch of an espresso machine.",
        sustainability: "Our coffee is sourced from sustainable farms, ensuring minimal environmental impact.",
        shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
    },
    {
        id: 10,
        name: "Lavazza Crema&Gusto",
        description: "Lavazza Crema&Gusto",
        photos_url: [image10],
        price: "25",
        supplies: [
            { id: 1, weight: "250g", price: "25", quantity: 1, serving_type: "bag" },
            { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
            { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
        ],
        coffee_brew_guide: "For coffee enthusiasts seeking to unlock the full spectrum of flavor from their beloved Blind Dog Coffee, the journey to the perfect cup begins not just with quality beans, but with the brewing method itself. From delicate notes to robust intensity, how you prepare your coffee dramatically impacts its taste profile. Our individual Blind Dog Coffee roasts can be prepared in a variety of ways, including popular brewing types such as the nuanced clarity of a pour-over, the rich immersion of a French press, the classic simplicity of a drip coffee maker, the elegant precision of a Chemex, and the bold punch of an espresso machine.",
        sustainability: "Our coffee is sourced from sustainable farms, ensuring minimal environmental impact.",
        shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
    },
    {
        id: 11,
        name: "NESCAFE Classic",
        description: "Instant coffee NESCAFE Classic 100% granular",
        photos_url: [image11],
        price: "27",
        supplies: [
            { id: 1, weight: "250g", price: "27", quantity: 1, serving_type: "bag" },
            { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
            { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
        ],
        coffee_brew_guide: "For coffee enthusiasts seeking to unlock the full spectrum of flavor from their beloved Blind Dog Coffee, the journey to the perfect cup begins not just with quality beans, but with the brewing method itself. From delicate notes to robust intensity, how you prepare your coffee dramatically impacts its taste profile. Our individual Blind Dog Coffee roasts can be prepared in a variety of ways, including popular brewing types such as the nuanced clarity of a pour-over, the rich immersion of a French press, the classic simplicity of a drip coffee maker, the elegant precision of a Chemex, and the bold punch of an espresso machine.",
        sustainability: "Our coffee is sourced from sustainable farms, ensuring minimal environmental impact.",
        shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
    },
    {
        id: 12,
        name: "Nescafe Espresso",
        description: "Nescafe Espresso instant coffee powder",
        photos_url: [image12],
        price: "23.09",
        supplies: [
            { id: 1, weight: "250g", price: "23.09", quantity: 1, serving_type: "bag" },
            { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
            { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
        ],
        coffee_brew_guide: "For coffee enthusiasts seeking to unlock the full spectrum of flavor from their beloved Blind Dog Coffee, the journey to the perfect cup begins not just with quality beans, but with the brewing method itself. From delicate notes to robust intensity, how you prepare your coffee dramatically impacts its taste profile. Our individual Blind Dog Coffee roasts can be prepared in a variety of ways, including popular brewing types such as the nuanced clarity of a pour-over, the rich immersion of a French press, the classic simplicity of a drip coffee maker, the elegant precision of a Chemex, and the bold punch of an espresso machine.",
        sustainability: "Our coffee is sourced from sustainable farms, ensuring minimal environmental impact.",
        shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
    },
    {
        id: 1,
        name: "Jacobs Barista Editions Americano",
        description: "Instant coffee Jacobs Barista Editions Americano. Finely ground 100% Arabica beans combined with instant coffee give your cup of Americano a rich yet balanced flavor. Experience the magic of Jacobs’ Aromagold Velvet in every sip of Jacobs Barista Editions Americano. Enjoy it as a classic black coffee or with a splash of milk. Jacobs Barista Editions Americano tastes just like a barista-made coffee from your favorite café!",
        photos_url: [image1],
        price: "12",
        supplies: [
            { id: 1, weight: "250g", price: "20.05", quantity: 1, serving_type: "bag" },
            { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
            { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
        ],
        coffee_brew_guide: "For coffee enthusiasts seeking to unlock the full spectrum of flavor from their beloved Blind Dog Coffee, the journey to the perfect cup begins not just with quality beans, but with the brewing method itself. From delicate notes to robust intensity, how you prepare your coffee dramatically impacts its taste profile. Our individual Blind Dog Coffee roasts can be prepared in a variety of ways, including popular brewing types such as the nuanced clarity of a pour-over, the rich immersion of a French press, the classic simplicity of a drip coffee maker, the elegant precision of a Chemex, and the bold punch of an espresso machine.",
        sustainability: "Our coffee is sourced from sustainable farms, ensuring minimal environmental impact.",
        shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
    },
    {
        id: 2,
        name: "Lavazza Qualita Oro",
        description: "Coffee in grains Lavazza Qualita Oro",
        photos_url: [image2],
        price: "20.05",
        supplies: [
            { id: 1, weight: "250g", price: "20.05", quantity: 1, serving_type: "bag" },
            { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
            { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
        ],
        coffee_brew_guide: "For coffee enthusiasts seeking to unlock the full spectrum of flavor from their beloved Blind Dog Coffee, the journey to the perfect cup begins not just with quality beans, but with the brewing method itself. From delicate notes to robust intensity, how you prepare your coffee dramatically impacts its taste profile. Our individual Blind Dog Coffee roasts can be prepared in a variety of ways, including popular brewing types such as the nuanced clarity of a pour-over, the rich immersion of a French press, the classic simplicity of a drip coffee maker, the elegant precision of a Chemex, and the bold punch of an espresso machine.",
        sustainability: "Our coffee is sourced from sustainable farms, ensuring minimal environmental impact.",
        shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
    },
    {
        id: 3,
        name: "Starbucks Veranda Blend",
        description: "Coffee Starbucks Veranda Blend",
        photos_url: [image3],
        price: "21.22",
        supplies: [
            { id: 1, weight: "250g", price: "21.22", quantity: 1, serving_type: "bag" },
            { id: 2, weight: "500g", price: "35.50", quantity: 1, serving_type: "bag" },
            { id: 3, weight: "1kg", price: "65.00", quantity: 1, serving_type: "bag" },
        ],
        coffee_brew_guide: "For coffee enthusiasts seeking to unlock the full spectrum of flavor from their beloved Blind Dog Coffee, the journey to the perfect cup begins not just with quality beans, but with the brewing method itself. From delicate notes to robust intensity, how you prepare your coffee dramatically impacts its taste profile. Our individual Blind Dog Coffee roasts can be prepared in a variety of ways, including popular brewing types such as the nuanced clarity of a pour-over, the rich immersion of a French press, the classic simplicity of a drip coffee maker, the elegant precision of a Chemex, and the bold punch of an espresso machine.",
        sustainability: "Our coffee is sourced from sustainable farms, ensuring minimal environmental impact.",
        shipping_details: "Ships within 3-5 business days. Free shipping on orders over $50."
    },
];

export default products;