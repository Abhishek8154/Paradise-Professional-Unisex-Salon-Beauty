/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Scissors, 
  User, 
  Sparkles, 
  Heart, 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  ChevronRight, 
  Star, 
  Menu, 
  X, 
  ArrowRight,
  Award,
  ShieldCheck,
  Gem,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Service {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

interface Testimonial {
  name: string;
  rating: number;
  text: string;
}

// --- Constants ---
const BUSINESS_NAME = "Paradise Professional Unisex Salon & Beauty";
const PHONE_NUMBER = "+91 96999 09889";
const WHATSAPP_NUMBER = "919699909889";
const ADDRESS = "Shop No. 6, Sana Inn Building, Marol Maroshi Rd, next to Delight Corner, near Uttam Dhaba, Bori Colony, Shivaji Nagar JJC, Marol, Andheri East, Mumbai, Maharashtra 400059, India";
const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/kJM16B4FnMTrMzqQ6";
const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.000000000000!2d72.88000000000001!3d19.110000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c86666666667%3A0x6666666666666666!2sParadise%20Professional%20Unisex%20Salon%20%26%20Beauty!5e0!3m2!1sen!2sin!4v1710695584000!5m2!1sen!2sin";

const SERVICES: Service[] = [
  {
    title: "Hair Services",
    icon: <Scissors className="w-6 h-6" />,
    items: ["Haircut & Styling", "Hair Coloring", "Hair Spa & Treatment", "Hair Smoothening / Keratin"]
  },
  {
    title: "Men's Grooming",
    icon: <User className="w-6 h-6" />,
    items: ["Beard Styling", "Hair Wash & Styling", "Head Massage"]
  },
  {
    title: "Beauty Services",
    icon: <Sparkles className="w-6 h-6" />,
    items: ["Facial & Skin Care", "Waxing & Threading", "Manicure & Pedicure"]
  },
  {
    title: "Makeup Services",
    icon: <Heart className="w-6 h-6" />,
    items: ["Bridal Makeup", "Party Makeup", "Engagement Makeup"]
  }
];

const WHY_CHOOSE_US = [
  {
    title: "Experienced Stylists",
    description: "Our team consists of highly trained professionals with years of experience in the industry.",
    icon: <Award className="w-8 h-8" />
  },
  {
    title: "Premium Products",
    description: "We use only high-end, professional-grade products to ensure the best results for your hair and skin.",
    icon: <Gem className="w-8 h-8" />
  },
  {
    title: "Hygienic Environment",
    description: "Your safety is our priority. We maintain strict hygiene standards and a comfortable salon atmosphere.",
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    title: "Affordable Luxury",
    description: "Experience premium salon services at competitive prices that won't break the bank.",
    icon: <CheckCircle2 className="w-8 h-8" />
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Best salon in Marol! The hair spa treatment was amazing and the staff is very professional. Highly recommended!"
  },
  {
    name: "Rahul Mehta",
    rating: 5,
    text: "Got a haircut and beard styling. The stylist really knew what they were doing. Very happy with the results."
  },
  {
    name: "Anjali Gupta",
    rating: 5,
    text: "Excellent facial services. My skin feels so refreshed. The ambiance is very relaxing and luxurious."
  }
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1595476108010-b4d1f8c2b1b1?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=800"
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="flex flex-col">
          <span className="text-gold-500 font-serif text-xl md:text-2xl font-bold tracking-wider leading-tight">PARADISE</span>
          <span className="text-white text-[10px] md:text-xs tracking-[0.2em] font-light">PROFESSIONAL SALON</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white/80 hover:text-gold-400 text-sm font-medium tracking-wide transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#booking" 
            className="bg-gold-600 hover:bg-gold-500 text-black px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105"
          >
            BOOK NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-white/10"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-white/80 hover:text-gold-400 text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#booking" 
                className="bg-gold-600 text-black text-center py-3 rounded-lg font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                BOOK APPOINTMENT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1920" 
          alt="Luxury Salon Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-gold-500 font-medium tracking-[0.3em] text-sm md:text-base mb-4 block">PREMIUM UNISEX SALON</span>
          <h1 className="text-4xl md:text-7xl font-serif text-white font-bold leading-tight mb-6">
            Best Professional <br />
            <span className="text-gold-500 italic">Unisex Salon</span> in Marol
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            Expert hair styling, beauty treatments and grooming services for men and women in the heart of Andheri East.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#booking" 
              className="bg-gold-600 hover:bg-gold-500 text-black px-8 py-4 rounded-full font-bold text-center transition-all flex items-center justify-center gap-2 group"
            >
              Book Appointment <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={`tel:${PHONE_NUMBER}`} 
              className="border-2 border-white/30 hover:border-gold-500 text-white hover:text-gold-500 px-8 py-4 rounded-full font-bold text-center transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" /> Call Now
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gold-500 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800" 
                alt="Stylist at work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-black p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="text-gold-500 text-4xl font-bold mb-1">10+</div>
              <div className="text-white text-sm tracking-widest uppercase">Years of Excellence</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-600 font-bold tracking-widest text-sm uppercase mb-4 block">OUR STORY</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Where Luxury Meets <br /> Professionalism
            </h2>
            <p className="text-zinc-600 text-lg mb-6 leading-relaxed">
              Paradise Professional Unisex Salon & Beauty is more than just a salon; it's a destination for transformation. Located in Marol, Andheri East, we have been serving the community with top-tier grooming and beauty services.
            </p>
            <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
              Our team of experienced stylists and beauty experts are dedicated to providing personalized care using premium international products. We believe in creating a comfortable and hygienic environment where you can relax while we enhance your natural beauty.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="font-semibold">Expert Stylists</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="font-semibold">Premium Products</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="font-semibold">Hygienic Setup</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="font-semibold">Modern Tech</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-600 font-bold tracking-widest text-sm uppercase mb-4 block">WHAT WE OFFER</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Our Premium Services</h2>
          <p className="text-zinc-600">From classic haircuts to advanced skin treatments, we offer a wide range of services tailored to your needs.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-zinc-100 group"
            >
              <div className="w-14 h-14 rounded-xl bg-black text-gold-500 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-zinc-600 text-sm">
                    <ChevronRight className="w-4 h-4 text-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-4 block">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              The Paradise Experience <br />
              <span className="text-gold-500 italic">Redefining Beauty</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {WHY_CHOOSE_US.map((item) => (
                <div key={item.title} className="space-y-4">
                  <div className="text-gold-500">{item.icon}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1595476108010-b4d1f8c2b1b1?auto=format&fit=crop&q=80&w=400" alt="Salon 1" className="rounded-2xl w-full aspect-[3/4] object-cover" />
                <img src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=400" alt="Salon 2" className="rounded-2xl w-full aspect-square object-cover" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400" alt="Salon 3" className="rounded-2xl w-full aspect-square object-cover" />
                <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=400" alt="Salon 4" className="rounded-2xl w-full aspect-[3/4] object-cover" />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold-500/10 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-600 font-bold tracking-widest text-sm uppercase mb-4 block">OUR WORK</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Visual Transformations</h2>
          <p className="text-zinc-600">Take a look at some of our recent hairstyles, beauty work, and salon interior.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img src={img} alt={`Gallery ${index}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-600 font-bold tracking-widest text-sm uppercase mb-4 block">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 relative">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-zinc-600 italic mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 font-bold">
                  {t.name[0]}
                </div>
                <span className="font-bold">{t.name}</span>
              </div>
              <div className="absolute top-8 right-8 text-gold-100">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1 21L1 18C1 16.8954 1.89543 16 3 16H6C6.55228 16 7 15.5523 7 15V9C7 8.44772 6.55228 8 6 8H3C1.89543 8 1 7.10457 1 6V5C1 3.89543 1.89543 3 3 3H6C8.20914 3 10 4.79086 10 7V15C10 18.3137 7.31371 21 4 21H1Z" /></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Paradise Salon, I would like to book an appointment.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Date:* ${formData.date}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-black rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-10 md:p-16 text-white flex flex-col justify-center">
            <span className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-4 block">APPOINTMENT</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Book Your Visit</h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Ready for a transformation? Fill out the form and we'll confirm your appointment via WhatsApp.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-widest">Call Us</div>
                  <div className="text-lg font-bold">{PHONE_NUMBER}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold-500">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-widest">Opening Hours</div>
                  <div className="text-lg font-bold">10:00 AM - 09:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-gold-500 p-10 md:p-16">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-black text-sm font-bold mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/90 border-none focus:ring-2 focus:ring-black outline-none transition-all"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-black text-sm font-bold mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-3 rounded-xl bg-white/90 border-none focus:ring-2 focus:ring-black outline-none transition-all"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-black text-sm font-bold mb-2">Service Interested In</label>
                <select 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/90 border-none focus:ring-2 focus:ring-black outline-none transition-all appearance-none"
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="">Select a Service</option>
                  <option value="Haircut">Haircut & Styling</option>
                  <option value="Coloring">Hair Coloring</option>
                  <option value="Hair Spa">Hair Spa & Treatment</option>
                  <option value="Beauty">Beauty Services</option>
                  <option value="Makeup">Makeup Services</option>
                  <option value="Grooming">Men's Grooming</option>
                </select>
              </div>
              <div>
                <label className="block text-black text-sm font-bold mb-2">Preferred Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/90 border-none focus:ring-2 focus:ring-black outline-none transition-all"
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-black text-sm font-bold mb-2">Message (Optional)</label>
                <textarea 
                  placeholder="Any special requests?"
                  className="w-full px-4 py-3 rounded-xl bg-white/90 border-none focus:ring-2 focus:ring-black outline-none transition-all h-24 resize-none"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-black text-gold-500 py-4 rounded-xl font-bold text-lg hover:bg-zinc-900 transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-6 h-6" /> Confirm on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-gold-600 font-bold tracking-widest text-sm uppercase mb-4 block">CONTACT US</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Visit Our Salon</h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-zinc-600 leading-relaxed">{ADDRESS}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-zinc-600 leading-relaxed">{PHONE_NUMBER}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                  <p className="text-zinc-600 leading-relaxed">Mon - Sun: 10:00 AM - 09:00 PM</p>
                </div>
              </div>
            </div>

            <a 
              href={GOOGLE_MAPS_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all"
            >
              Get Directions <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="rounded-[2rem] overflow-hidden shadow-2xl h-[400px] lg:h-auto border-4 border-white">
            <iframe 
              src={MAP_EMBED_URL} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#home" className="flex flex-col">
              <span className="text-gold-500 font-serif text-2xl font-bold tracking-wider">PARADISE</span>
              <span className="text-white text-xs tracking-[0.2em] font-light">PROFESSIONAL SALON</span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed">
              Premium unisex salon in Marol & Andheri East, Mumbai offering expert hair styling, beauty treatments, and grooming services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-black transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gold-500 font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#home" className="hover:text-gold-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-gold-500 transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="hover:text-gold-500 transition-colors">Gallery</a></li>
              <li><a href="#booking" className="hover:text-gold-500 transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-500 font-bold mb-6 uppercase tracking-widest text-sm">Our Services</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>Haircut & Styling</li>
              <li>Hair Coloring</li>
              <li>Facial & Skin Care</li>
              <li>Bridal Makeup</li>
              <li>Men's Grooming</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-500 font-bold mb-6 uppercase tracking-widest text-sm">Contact Info</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <span>{PHONE_NUMBER}</span>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-gold-500 shrink-0" />
                <span>10:00 AM - 09:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-white/40 text-xs text-center">
            © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-gold-500">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.a>

      {/* Call Button (Mobile Only) */}
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`tel:${PHONE_NUMBER}`}
        className="md:hidden w-14 h-14 bg-gold-600 text-black rounded-full shadow-2xl flex items-center justify-center hover:bg-gold-500 transition-colors"
      >
        <Phone className="w-7 h-7" />
      </motion.a>
    </div>
  );
};

// --- Main App ---
export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <BookingForm />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
