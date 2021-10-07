/* export interface Restaurante {
  footer: Footer;
  logo: string;
  section_1: Section1;
  section_2: Section2;
  slide_header: Slide[];
}

export interface Footer {
  contacto: Contacto;
  logo_footer: string;
  redes: Redes;
}

export interface Contacto {
  direccion: string;
  mail: string;
  telefono: string;
}

export interface Redes {
  facebook: string;
  instagram: string;
}

export interface Section1 {
  menu_photo: string;
  menu_text: string;
  slide_promo: Slide[];
}

export interface Slide {
  img: string;
}

export interface Section2 {
  type_menu: TypeMenu[];
}

export interface TypeMenu {
  menu: Menu[];
  type: string;
}

export interface Menu {
  description: string;
  img: string;
  price: string;
  title: string;
}
 */
export interface Restaurante {
  footer: Footer;
  logo: string;
  section_1: Section1;
  section_2: Section2;
  section_3: Section3;
  section_4: Section4;
  slide_header: SlideHeader[];
}

export interface Footer {
  contacto: Contacto;
  logo_footer: string;
  redes: Redes;
}

export interface Contacto {
  direccion: string;
  mail: string;
  telefono: string;
}

export interface Redes {
  facebook: string;
  instagram: string;
}

export interface Section1 {
  menu_photo: string;
  menu_text: string;
  slide_promo: SlideHeader[];
}

export interface SlideHeader {
  img: string;
}

export interface Section2 {
  type_menu: TypeMenu[];
}

export interface TypeMenu {
  menu: Menu[];
  type: string;
}

export interface Menu {
  description: Description;
  img: string;
  price: string;
  title: Title;
}

export enum Description {
  TorrijasCubiertasDeChocolate = 'Torrijas cubiertas de chocolate...',
}

export enum Title {
  TorrijaDeChocolate = 'Torrija de chocolate',
}

export interface Section3 {
  moments: SlideHeader[];
  restaurant: SlideHeader[];
}

export interface Section4 {
  map: Map;
}

export interface Map {
  lat: string;
  lng: string;
}
