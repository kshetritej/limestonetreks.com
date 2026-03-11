export interface TripData {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  price: number;
  maximumAltitude: string;
  difficultyLevel: "EASY" | "MODERATE" | "CHALLENGING" | "STRENUOUS";
  guestCapacity: number;
  meetingPoint: string;
  dropOffPoint: string;
  maxAltitude: string;
  distance: string;
  trekType: string;
  accommodationType: string;
  bestTime: string;
  groupSize: string;
  travelStyle: string;
  locations: string[];
  images: string[];
  itinerary: ItineraryDay[];
  faqs: FAQ[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  additionalInfo: AdditionalInfo[];
  ratings: Rating;
  accommodations: string[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  altitude?: string;
  duration?: string;
  image?: string;
  highlights?: string[];
  meals?: string;
  accommodation?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface AdditionalInfo {
  title: string;
  description: string;
}

export interface Rating {
  average: number;
  count: number;
  googleRating?: number;
  googleCount?: number;
  recommendedPercentage?: number;
}
