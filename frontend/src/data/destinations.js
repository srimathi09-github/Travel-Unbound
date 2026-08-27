const destinations = [
  {
    id: "kerala",
    name: "Kerala",
    country: "India",
    category: "India",
    tagline: "God's Own Country",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=85",
    description:
      "Drift through serene backwaters, discover lush landscapes and experience Kerala at an unhurried pace.",
    longDescription:
      "Kerala combines tropical landscapes, quiet backwaters, rich traditions and exceptional hospitality. From private houseboats to spice plantations, every journey can be shaped around the traveller.",
    price: "₹35,000",
    highlights: [
      "Alleppey backwaters",
      "Munnar tea plantations",
      "Thekkady wildlife",
      "Traditional Kerala cuisine"
    ],
    activities: [
      "Private houseboat cruise",
      "Tea plantation visit",
      "Wildlife experience",
      "Cultural experiences"
    ]
  },

  {
    id: "himachal",
    name: "Himachal Pradesh",
    country: "India",
    category: "India",
    tagline: "Mountains, valleys & timeless villages",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=85",
    description:
      "Explore dramatic Himalayan valleys, pine forests and mountain towns.",
    longDescription:
      "Himachal Pradesh is a journey through towering mountains, winding roads and peaceful Himalayan communities.",
    price: "₹28,000",
    highlights: [
      "Manali",
      "Kasol",
      "Spiti Valley",
      "Shimla"
    ],
    activities: [
      "Mountain drives",
      "Trekking",
      "Village experiences",
      "River activities"
    ]
  },

  {
    id: "ladakh",
    name: "Ladakh",
    country: "India",
    category: "India",
    tagline: "Where the mountains touch the sky",
    image:
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1600&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=2200&q=90",
    description:
      "Discover monasteries, high-altitude roads and extraordinary Himalayan landscapes.",
    longDescription:
      "Ladakh offers a raw and dramatic Himalayan experience shaped by high passes, ancient monasteries and vast landscapes.",
    price: "₹42,000",
    highlights: [
      "Leh",
      "Pangong Lake",
      "Nubra Valley",
      "Monasteries"
    ],
    activities: [
      "Mountain road trips",
      "Monastery visits",
      "Camping",
      "Photography"
    ]
  },

  {
    id: "andaman",
    name: "Andaman",
    country: "India",
    category: "India",
    tagline: "Blue waters. Wild islands.",
    image:
      "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?auto=format&fit=crop&w=1600&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?auto=format&fit=crop&w=2200&q=90",
    description:
      "Escape to tropical islands surrounded by turquoise waters and untouched beaches.",
    longDescription:
      "Andaman is ideal for travellers looking for clear waters, island landscapes and relaxed coastal experiences.",
    price: "₹38,000",
    highlights: [
      "Havelock Island",
      "Radhanagar Beach",
      "Neil Island",
      "Coral reefs"
    ],
    activities: [
      "Scuba diving",
      "Snorkelling",
      "Island hopping",
      "Beach experiences"
    ]
  },

  {
    id: "goa",
    name: "Goa",
    country: "India",
    category: "India",
    tagline: "Coastal living, reimagined",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2200&q=90",
    description:
      "Discover Goa beyond the usual beaches through food, culture and hidden coastal escapes.",
    longDescription:
      "Goa blends beaches, Portuguese architecture, local food and a relaxed coastal lifestyle.",
    price: "₹25,000",
    highlights: [
      "North Goa",
      "South Goa",
      "Old Goa",
      "Local cuisine"
    ],
    activities: [
      "Beach hopping",
      "Food tours",
      "Heritage walks",
      "Sunset experiences"
    ]
  },

  {
    id: "kenya",
    name: "Kenya",
    country: "Kenya",
    category: "International",
    tagline: "Meet the wild",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2200&q=90",
    description:
      "Experience unforgettable wildlife encounters across the Masai Mara.",
    longDescription:
      "Kenya is built around extraordinary wildlife, vast savannahs and authentic safari experiences.",
    price: "₹1,25,000",
    highlights: [
      "Masai Mara",
      "Big Five",
      "Nairobi",
      "Maasai culture"
    ],
    activities: [
      "Game drives",
      "Wildlife photography",
      "Cultural visits",
      "Bush experiences"
    ]
  },

  {
    id: "vietnam",
    name: "Vietnam",
    country: "Vietnam",
    category: "International",
    tagline: "Ancient culture, unforgettable landscapes",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1600&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=2200&q=90",
    description:
      "From Ha Long Bay to vibrant cities, experience Vietnam through its landscapes and culture.",
    longDescription:
      "Vietnam brings together limestone islands, historic cities, street food and remarkable local culture.",
    price: "₹75,000",
    highlights: [
      "Ha Long Bay",
      "Hanoi",
      "Hoi An",
      "Ho Chi Minh City"
    ],
    activities: [
      "Bay cruise",
      "Food experiences",
      "Cultural walks",
      "Cycling"
    ]
  },

  {
    id: "tanzania",
    name: "Tanzania",
    country: "Tanzania",
    category: "International",
    tagline: "The heart of the Serengeti",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2200&q=90",
    description:
      "Witness the scale and beauty of the Serengeti and Ngorongoro.",
    longDescription:
      "Tanzania is an extraordinary safari destination with dramatic landscapes and unforgettable wildlife.",
    price: "₹1,45,000",
    highlights: [
      "Serengeti",
      "Ngorongoro",
      "Arusha",
      "Great Migration"
    ],
    activities: [
      "Safari",
      "Wildlife photography",
      "Nature walks",
      "Cultural experiences"
    ]
  },

  {
    id: "iceland",
    name: "Iceland",
    country: "Iceland",
    category: "International",
    tagline: "A landscape unlike anywhere else",
    image:
      "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1600&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=2200&q=90",
    description:
      "Explore waterfalls, glaciers, black beaches and dramatic volcanic landscapes.",
    longDescription:
      "Iceland is a journey through powerful natural landscapes shaped by fire, ice and ocean.",
    price: "₹1,65,000",
    highlights: [
      "Golden Circle",
      "South Coast",
      "Black Sand Beach",
      "Glaciers"
    ],
    activities: [
      "Road trips",
      "Glacier walks",
      "Waterfall visits",
      "Northern Lights"
    ]
  },

  {
    id: "sri-lanka",
    name: "Sri Lanka",
    country: "Sri Lanka",
    category: "International",
    tagline: "Island stories",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=85",
    heroImage:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2200&q=90",
    description:
      "Travel through tea country, beaches, forests and ancient cultural sites.",
    longDescription:
      "Sri Lanka combines tropical beaches, tea plantations, wildlife and centuries of cultural history.",
    price: "₹58,000",
    highlights: [
      "Ella",
      "Kandy",
      "Galle",
      "Tea plantations"
    ],
    activities: [
      "Train journeys",
      "Safari",
      "Tea experiences",
      "Heritage tours"
    ]
  }
];

export default destinations;