const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`

export const HERO_IMAGE = u('photo-1488646953014-85cb44e25828')

export const CATEGORIES = ['All', 'Beach', 'Nature', 'City', 'Culture']

export const destinations = [
  {
    id: 'bali', name: 'Bali, Indonesia', category: 'Beach',
    image: u('photo-1537996194471-e657df975ab4'),
    alt: 'A stone temple gate overlooking green hills in Bali',
    short: 'Terraced rice fields, surf beaches and serene temples.',
    description: 'Bali blends tropical beaches with spiritual culture. Wake up to rice terraces in Ubud, surf at Uluwatu and watch sunset ceremonies at sea temples.',
    highlights: ['Tegallalang rice terraces', 'Uluwatu Temple at sunset', 'Snorkelling in Nusa Penida', 'Ubud art markets'],
    tips: ['Best time: April to October (dry season)', 'Rent a scooter only if you are experienced', 'Cover shoulders and knees at temples']
  },
  {
    id: 'swiss-alps', name: 'Swiss Alps, Switzerland', category: 'Nature',
    image: u('photo-1531366936337-7c912a4589a7'),
    alt: 'Snow-capped Swiss Alps above a green valley',
    short: 'Snowy peaks, alpine lakes and scenic mountain railways.',
    description: 'Dramatic peaks, crystal lakes and storybook villages make the Swiss Alps ideal for hiking in summer and skiing in winter.',
    highlights: ['Jungfraujoch railway', 'Lake Lucerne cruise', 'Zermatt and the Matterhorn', 'Grindelwald hiking trails'],
    tips: ['A Swiss Travel Pass can save money on trains', 'Pack layers; weather changes fast', 'Book mountain railways early in summer']
  },
  {
    id: 'kyoto', name: 'Kyoto, Japan', category: 'Culture',
    image: u('photo-1493976040374-85c8e12f0c0e'),
    alt: 'A traditional pagoda surrounded by autumn trees in Kyoto',
    short: 'Ancient temples, tea houses and tranquil bamboo groves.',
    description: 'Japan’s former capital preserves centuries of tradition, from golden temples and geisha districts to quiet moss gardens.',
    highlights: ['Fushimi Inari shrine gates', 'Arashiyama bamboo grove', 'Kinkaku-ji Golden Pavilion', 'Gion district evenings'],
    tips: ['Spring blossoms and autumn leaves are busiest', 'Visit famous sites at sunrise', 'Carry some cash; small shops may not take cards']
  },
  {
    id: 'paris', name: 'Paris, France', category: 'City',
    image: u('photo-1502602898657-3e91760cbb34'),
    alt: 'The Eiffel Tower rising above Paris rooftops',
    short: 'Iconic landmarks, world-class art and café culture.',
    description: 'Paris rewards slow wandering: world-famous museums, riverside walks, bakeries on every corner and a skyline crowned by the Eiffel Tower.',
    highlights: ['The Louvre', 'Seine river walk', 'Montmartre and Sacré-Cœur', 'Local bakeries and cafés'],
    tips: ['Greet shopkeepers with “Bonjour”', 'Buy museum tickets online', 'The metro is the fastest way around']
  },
  {
    id: 'kerala', name: 'Kerala, India', category: 'Nature',
    image: u('photo-1602216056096-3b40cc0c9944'),
    alt: 'A houseboat gliding through palm-lined backwaters in Kerala',
    short: 'Peaceful backwaters, tea hills and spice-scented cuisine.',
    description: 'Known as God’s Own Country, Kerala offers houseboat stays in the backwaters, misty tea plantations in Munnar and rich coastal food.',
    highlights: ['Alleppey houseboat cruise', 'Munnar tea gardens', 'Kathakali performances', 'Varkala cliff beach'],
    tips: ['Best time: October to March', 'Try a traditional sadya meal', 'Carry light cottons and a rain jacket in monsoon']
  },
  {
    id: 'santorini', name: 'Santorini, Greece', category: 'Beach',
    image: u('photo-1570077188670-e3a8d69ac5ff'),
    alt: 'White buildings with blue domes above the sea in Santorini',
    short: 'Whitewashed villages, blue domes and legendary sunsets.',
    description: 'Perched on a volcanic caldera, Santorini is famous for its white-and-blue architecture, volcanic beaches and Aegean sunsets.',
    highlights: ['Oia sunset', 'Fira to Oia caldera hike', 'Red Beach', 'Local wine tasting'],
    tips: ['Visit in May or September to avoid crowds', 'Expect lots of stairs; pack comfy shoes', 'Book sunset dinner tables ahead']
  }
]

export const tips = [
  { icon: 'Backpack', title: 'Packing', text: 'Pack light, roll clothes, bring layers and a universal adapter. Keep documents and medication in your carry-on.' },
  { icon: 'Wallet', title: 'Budgeting', text: 'Set a daily budget, track spending, keep a small emergency fund and compare prices before booking.' },
  { icon: 'Heart', title: 'Cultural Etiquette', text: 'Learn a few local phrases, dress respectfully at religious sites and ask before photographing people.' },
  { icon: 'Map', title: 'Travel Planning', text: 'Check visa rules, book key stays early, leave room for spontaneity and share your itinerary with someone.' }
]
