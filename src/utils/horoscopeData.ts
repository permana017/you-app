// lib/horoscopeData.ts
export interface Horoscope {
  sign: string;
  horoscope: string;
}

export const horoscopes: Horoscope[] = [
  { sign: "Aries", horoscope: "Ram" },
  { sign: "Taurus", horoscope: "Bull" },
  { sign: "Gemini", horoscope: "Twins" },
  { sign: "Cancer", horoscope: "Crab" },
  { sign: "Leo", horoscope: "Lion" },
  { sign: "Virgo", horoscope: "Virgin" },
  { sign: "Libra", horoscope: "Ballance" },
  { sign: "Scorpio", horoscope: "Scorpion" },
  { sign: "Sagittarius", horoscope: "Archewr" },
  { sign: "Capricorn", horoscope: "Goat" },
  {
    sign: "Aquarius",
    horoscope: "Water Bearer",
  },
  { sign: "Pisces", horoscope: "Fish" },
];
