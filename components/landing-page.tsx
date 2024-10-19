'use client'

import { Star, MapPin, Phone, Clock, ChevronRight, Menu, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <motion.header 
        className="bg-white shadow"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img src="/placeholder.svg?height=50&width=50" alt="Jyoti Hardware Tools Logo" className="h-10 w-10 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Jyoti Hardware Tools</h1>
            </motion.div>
            <nav className="hidden md:flex space-x-4">
              {['about', 'owner', 'reviews', 'write-review', 'contact', 'map'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-500 hover:text-gray-900"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                </motion.button>
              ))}
            </nav>
            <motion.button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="h-6 w-6 text-gray-500" />
            </motion.button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {['about', 'owner', 'reviews', 'write-review', 'contact', 'map'].map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.section 
            id="hero" 
            className="bg-blue-600 rounded-lg shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="px-6 py-12 md:px-12 text-center md:text-left flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <motion.h2 
                  className="text-3xl font-extrabold text-white sm:text-4xl"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <span className="block">Your One-Stop Shop for</span>
                  <span className="block text-yellow-400">Quality Hardware Tools</span>
                </motion.h2>
                <motion.p 
                  className="mt-3 text-lg text-blue-200"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Serving Patna with a wide range of professional-grade tools and equipment.
                </motion.p>
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Button 
                    className="bg-white text-blue-600 hover:bg-blue-50" 
                    onClick={() => scrollToSection('contact')}
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </div>
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <img 
                  src="/placeholder.svg?height=400&width=600" 
                  alt="Jyoti Hardware Tools Store Front" 
                  className="rounded-lg shadow-md"
                />
              </motion.div>
            </div>
          </motion.section>

          {['about', 'owner', 'reviews', 'write-review', 'contact', 'map'].map((section, index) => (
            <motion.section 
              key={section}
              id={section}
              className="mt-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
              </h2>
              <motion.div 
                className="bg-white rounded-lg shadow-md p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {section === 'about' && (
                  <p className="text-gray-600">
                    Jyoti Hardware Tools is a leading wholesaler of high-quality hardware and tools in Patna, Bihar. 
                    With years of experience, we pride ourselves on offering a vast selection of products at competitive prices.
                  </p>
                )}
                {section === 'owner' && (
                  <div className="flex flex-col md:flex-row items-center md:items-start">
                    <img 
                      src="/placeholder.svg?height=200&width=200" 
                      alt="Jitendra Tiwary" 
                      className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6"
                    />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Jitendra Tiwary</h3>
                      <p className="text-gray-600 mb-4">
                        Jitendra Tiwary is the proud owner of Jyoti Hardware Tools. With over 20 years of experience in the hardware industry, 
                        Jitendra has built a reputation for providing top-quality tools and exceptional customer service.
                      </p>
                      <p className="text-gray-600">
                        "Our goal is to empower local craftsmen and DIY enthusiasts with the best tools in the market. We're not just selling 
                        hardware; we're building relationships and supporting our community's projects and dreams."
                      </p>
                    </div>
                  </div>
                )}
                {section === 'reviews' && (
                  <>
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">4.8 out of 5 (9 reviews)</span>
                    </div>
                    <blockquote className="text-gray-600 italic">
                      "Great product and price. Very nice shop with a wide variety of tools."
                    </blockquote>
                    <p className="mt-2 text-gray-500">- MD Asif Anwar</p>
                  </>
                )}
                {section === 'write-review' && (
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                      <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required />
                    </div>
                    <div>
                      <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
                      <select id="rating" name="rating" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required>
                        <option value="">Select a rating</option>
                        <option value="5">5 stars</option>
                        <option value="4">4 stars</option>
                        <option value="3">3 stars</option>
                        <option value="2">2 stars</option>
                        <option value="1">1 star</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="review" className="block text-sm font-medium text-gray-700">Review</label>
                      <textarea id="review" name="review" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required></textarea>
                    </div>
                    <Button type="submit" className="w-full">Submit Review</Button>
                  </form>
                )}
                {section === 'contact' && (
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                      <span>Helios bhawan, New Market Station Rd, Goriya Toli, Patna, Bihar 800001</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-600 mr-2" />
                      <span>093861 92357</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-blue-600 mr-2" />
                      <span>Open · Closes 9 PM</span>
                    </div>
                  </div>
                )}
                {section === 'map' && (
                  <>
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.5718393419!2d85.13694731501636!3d25.594091883714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732867%3A0x4b0e2fbe6a099d5b!2sNew%20Market%20Station%20Rd%2C%20Patna%2C%20Bihar%20800001!5e0!3m2!1sen!2sin!4v1634720416365!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full rounded-lg"
                      ></iframe>
                    </div>
                    <div className="mt-4">
                      <a
                        href="https://www.google.com/maps/place/New+Market+Station+Rd,+Patna,+Bihar+800001/@25.5940919,85.1369473,17z/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                      >
                        View larger map
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.section>
          ))}
        </div>
      </main>

      <motion.footer 
        className="bg-gray-800 text-white mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-8">
          <p className="text-center">© 2024 Jyoti Hardware Tools. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  )
}

export default LandingPage