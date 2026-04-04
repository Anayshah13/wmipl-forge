/**
 * fonts.ts  —  add this to your src/lib/ or src/app/ folder
 *
 * Import these into your root layout.tsx and add the CSS
 * variable classNames to your <html> or <body> element.
 *
 * Usage in layout.tsx:
 *   import { playfair, sourceSans, sourceSerif } from '@/lib/fonts'
 *
 *   <html className={`${playfair.variable} ${sourceSans.variable} ${sourceSerif.variable}`}>
 */

import { Playfair_Display, Source_Sans_3, Source_Serif_4 } from 'next/font/google'

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

export const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-serif',
  display: 'swap',
})
