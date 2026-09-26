export const services = [
  { title: "Van Dead Locks", slug: "van-dead-locks" },
  { title: "Van Hook Locks", slug: "van-hook-locks" },
  { title: "Van Slam Locks", slug: "van-slam-locks" },
  { title: "Van Statement Lock", slug: "van-statement-lock" },
  { title: "Replacement Lock for Ford", slug: "replacement-lock-for-ford" },
  { title: "Repair Plate or External Shield", slug: "repair-plate-or-external-shield" },
  { title: "Air Vent Installation", slug: "air-vent-installation" },
];

export const makes = [
  ["Citroen", "citroen"], ["Fiat", "fiat"], ["Ford", "ford"], ["Isuzu", "isuzu"],
  ["IVECO", "iveco"], ["Land Rover", "land-rover"], ["LEVC", "levc"], ["MAN", "man-vans"],
  ["Maxus", "maxus"], ["Mercedes-Benz", "mercedes-benz"], ["Nissan", "nissan"],
  ["Peugeot", "peugeot"], ["Renault", "renault"], ["Toyota", "toyota"],
  ["Vauxhall", "vauxhall"], ["Volkswagen", "volkswagen"],
] as const;

export const vans = [
  { brand: "Ford", name: "Custom 2023", slug: "/ford/custom-2023", image: "/vanlock/ford-custom-2023.png" },
  { brand: "Ford", name: "Custom 2012-2023", slug: "/ford/custom-2012-2023", image: "/vanlock/ford-custom-2012.png" },
  { brand: "Ford", name: "Transit 2014", slug: "/ford/transit-2014", image: "/vanlock/ford-transit.png" },
  { brand: "Renault", name: "Trafic 2014", slug: "/renault/trafic-2014", image: "/vanlock/renault-trafic.jpeg" },
  { brand: "Vauxhall", name: "Vivaro 2019", slug: "/vauxhall/vivaro-2019", image: "/vanlock/vauxhall-vivaro.png" },
  { brand: "Volkswagen", name: "Transporter T6.1 2020", slug: "/volkswagen/transporter-t6-1-2020", image: "/vanlock/vw-transporter.jpeg" },
  { brand: "Fiat", name: "Talento 2014", slug: "/fiat/talento-2014", image: "/vanlock/fiat-talento-2014.png" },
  { brand: "Citroen", name: "Relay 2006", slug: "/citroen/relay-2006", image: "/vanlock/citroen-relay.png" },
];

export const mainLinks = [
  ["Home", "/"], ["About Us", "/about-us"], ["Fleets", "/fleets"], ["Contact", "/contact"],
] as const;
