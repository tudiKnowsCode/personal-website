// Real Google reviews only, quoted word for word ("…" marks where a passage was left out).
export type Testimonial = {
  name: string
  business: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Pay Villano',
    business: 'Meal prep business owner',
    quote:
      'Nick completely transformed the way I operate my meal prep business. He built my entire website and ordering platform from the ground up, creating a system that has allowed me to automate a significant portion of my business and save more than 15 hours of manual labor every week. … What impressed me most was how responsive and patient he was throughout the entire process.',
  },
  {
    name: 'Alyssa Tudino',
    business: 'Tudino Learning',
    quote:
      'I came in with a vision for a specific look and feel, and he was incredibly patient and accommodating throughout the entire process. … Beyond the design itself, the website has already started generating results! I’ve received multiple tutoring inquiries directly through my website, and its searchability has been a huge bonus in helping potential clients find me.',
  },
]
