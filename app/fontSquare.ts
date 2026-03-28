import localFont from 'next/font/local'

export const myCustomFont = localFont({
  src: '../public/fonts/qbicle.ttf', // Ruta a tu archivo de fuente
  variable: '--font-custom', // Definimos una variable CSS
  display: 'swap',
})