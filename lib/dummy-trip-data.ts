export interface TripData {
  id: string
  title: string
  slug: string
  shortDescription: string
  fullDescription: string
  duration: string
  price: number
  difficultyLevel: 'EASY' | 'MODERATE' | 'CHALLENGING' | 'STRENUOUS'
  guestCapacity: number
  meetingPoint: string
  dropOffPoint: string
  maxAltitude: string
  distance: string
  trekType: string
  accommodationType: string
  bestTime: string
  groupSize: string
  travelStyle: string
  locations: string[]
  images: string[]
  itinerary: ItineraryDay[]
  faqs: FAQ[]
  highlights: string[]
  inclusions: string[]
  exclusions: string[]
  additionalInfo: AdditionalInfo[]
  ratings: Rating
}

export interface ItineraryDay {
  day: number
  title: string
  description: string
  altitude?: string
  duration?: string
  image?: string
  highlights?: string[]
  meals?: string
  accommodation?: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface AdditionalInfo {
  title: string
  description: string
}

export interface Rating {
  average: number
  count: number
  googleRating?: number
  googleCount?: number
  recommendedPercentage?: number
}

export const manasluCircuitTrek: TripData = {
  id: 'manaslu-circuit',
  title: 'Manaslu Circuit Trek',
  slug: 'manaslu-circuit-trek',
  shortDescription:
    'The Manaslu Circuit Trek is a stunning alpine trek around Mt. Manaslu, the 8th highest mountain in the world. This 12-day trek takes you through remote Himalayan valleys, pristine rhododendron forests, and high-altitude passes with breathtaking panoramic views.',
  fullDescription:
    'Experience the untamed beauty of the Manaslu Conservation Area on this incredible 12-day circuit trek. Journey through steep Budi Gandaki Valley, secluded villages, pristine rhododendron forests, and high-altitude settlements. The trek remains peaceful and less crowded, offering both natural grandeur and cultural immersion.',
  duration: '12 Days',
  price: 950,
  difficultyLevel: 'CHALLENGING',
  guestCapacity: 8,
  meetingPoint: 'Kathmandu',
  dropOffPoint: 'Kathmandu',
  maxAltitude: '5,106 m',
  distance: '177 km',
  trekType: 'Round Trek / Restricted Area Trek',
  accommodationType: 'Teahouses / Guesthouses',
  bestTime: 'September – November, March – May',
  groupSize: 'upto 8',
  travelStyle: 'Trekking, Touring and Hiking',
  locations: ['Kathmandu', 'Soti Khola', 'Jagat', 'Sama Gaun', 'Larkya La Pass'],
  images: [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
  ],
  itinerary: [
    {
      day: 1,
      title: 'Drive from Kathmandu (1,400m) to Machakhola (930m) – 7-8 hours',
      description:
        'Start with breakfast at 7:00 AM in your Kathmandu hotel and get ready for the drive ahead. Leave Kathmandu as you begin on the scenic Prithvi Highway, passing through Naubise and Malekhu before arriving in Dhading Besi, where the road becomes slightly rougher. After lunch at Jyamire, continue onwards through villages, terraced fields, and winding roads to Arughat. From Arughat, most roads are off-road tracks until Maccha Khola via Soti Khola, where we arrive around 4:00 pm.',
      altitude: '930m',
      duration: '7-8 hours',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      meals: 'Breakfast, Lunch, Dinner',
      accommodation: 'Teahouse',
    },
    {
      day: 2,
      title: 'Trek from Machakhola (930m) to Tatopani (1,280m) – 5 hours',
      description:
        'Today begins your trekking adventure proper. The trail follows the Budi Gandaki River, initially through subtropical forests. You\'ll walk through oak and rhododendron forests, passing small villages and traditional Nepali settlements. The teahouse in Tatopani offers hot springs, and many trekkers enjoy a relaxing soak in the thermal waters after the day\'s walk.',
      altitude: '1,280m',
      duration: '5 hours',
      meals: 'Breakfast, Lunch, Dinner',
      accommodation: 'Teahouse',
    },
    {
      day: 3,
      title: 'Trek from Tatopani (1,280m) to Jagat (1,340m) – 6-7 hours',
      description:
        'Continuing the hike of the day from Tatopani for 1 hour, you reach your lunch stop at Thulo Dhunga. The final part of the day\'s trek includes a 2.5-hour uphill climb, with most trekkers arriving by 3 pm. Jagat is a village of about 40 houses dotted with Mani walls, stupas, and typical Nepali architecture. It\'s the main checkpoint for the Manaslu Conservation Area Project (MCAP)—you actually feel that you\'re now entering the mountainous upper regions from the lower subtropical areas.',
      altitude: '1,340m',
      duration: '6-7 hours',
      meals: 'Breakfast, Lunch, Dinner',
      accommodation: 'Teahouse',
    },
  ],
  faqs: [
    {
      question: 'Are there emergency services along the Manaslu Circuit Trek?',
      answer:
        'Emergency services are limited, but there are basic healthcare facilities in some villages along the trek. It\'s strongly recommended you go with a guide and have travel insurance for helicopter evacuation.',
    },
    {
      question: 'Is there internet access during the trek?',
      answer:
        'Internet access is available in some teahouses in larger villages, but connectivity is inconsistent and slow. Be prepared for limited connectivity during most of the trek.',
    },
    {
      question: 'How physically fit do I need to be for trekking?',
      answer:
        'The trek is challenging with long walking days and high altitude. A good fitness level and prior trekking experience is recommended. Acclimatization days are included in the itinerary.',
    },
    {
      question: 'Can I trek alone without a guide?',
      answer:
        'The Manaslu Circuit Trek requires a permit that typically requires booking through a licensed trekking company with guides. Solo trekking without a guide is not permitted in this restricted area.',
    },
    {
      question: 'Are there any vegetarian options available?',
      answer:
        'Yes, most teahouses offer vegetarian meal options. It\'s best to inform your guide about dietary preferences beforehand.',
    },
    {
      question: 'What gear do I need for trekking?',
      answer:
        'Essential gear includes sturdy hiking boots, warm layers, waterproof jacket, sleeping bag (for high altitude), and a good backpack. Detailed gear list will be provided upon confirmation.',
    },
  ],
  highlights: [
    'Mount Manaslu (8163 m) is the 8th-highest peak in the world.',
    'Larkya La Pass (5106 m) is a tough but beautiful mountain pass.',
    'Journey through two of Nepal\'s most iconic regions.',
    'Visit the historic Nubri Monastery and Pungyen Monastery.',
    'Visit monasteries, chortens, mani walls, and the tranquil Birendra Lake.',
    'Experience multiethnic villages inhabited by Brahmins, Chhetris, Dalits, Gurung, Sherpa, and Tibetans.',
    'Supported by experienced local guides and customized Manaslu trekking itineraries.',
    'Hike near Manaslu Base Camp, located at the world\'s 8th-highest peak.',
    'A peaceful and less crowded trek in the Mangsiri Himal range.',
    'Panoramic views of some of the highest Himalayan peaks, including Manaslu, Annapurna II, and Lamjung Himal.',
    'Discover the ancient monasteries, which are more than 200 years old.',
    'Trek to the Tibetan border from Samdo Village.',
  ],
  inclusions: [
    'Accommodation in Kathmandu and Pokhara at 3-star hotels with breakfast',
    'Accommodation in local teahouses during the trek',
    'Breakfast, lunch, and dinner throughout the trek',
    'Welcome and farewell dinners with cultural programs',
    'Airport pick-up and drop-off by private vehicle',
    'Ground transportation from Kathmandu to trailhead and return',
    'Manaslu Circuit Trek Permit',
    'TIMS Card',
    'Experienced guide and porter support',
  ],
  exclusions: [
    'Nepal Visa Fee (obtainable upon arrival)',
    'International Airfare',
    'Travel Insurance (must cover high-altitude trekking)',
    'Excess Baggage Fees',
    'Lunch and Dinner in Pokhara (only breakfast included)',
    'Additional accommodation nights',
    'Personal expenses and tips',
  ],
  additionalInfo: [
    {
      title: 'Manaslu Circuit Trek Facts',
      description:
        'Duration: 12 Days | Distance: 177 km | Max Altitude: 5,106 m | Difficulty: Moderate to Strenuous | Trek Type: Round Trek | Best Time: September–November, March–May',
    },
  ],
  ratings: {
    average: 4.8,
    count: 456,
    googleRating: 4.7,
    googleCount: 104,
    recommendedPercentage: 99,
  },
}
