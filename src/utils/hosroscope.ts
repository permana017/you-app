// lib/horoscope.ts
import { horoscopes } from "./horoscopeData";

export const getHoroscope = (zodiacSign: string): string => {
  const horoscope = horoscopes.find((h) => h.sign === zodiacSign);
  return horoscope
    ? horoscope.horoscope
    : "No horoscope available for this sign.";
};
