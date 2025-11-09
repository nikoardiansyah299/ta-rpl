'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const formRef = useRef(null);
  const ceoCardRef = useRef(null);
  const titleRef = useRef(null);
  const floating1Ref = useRef(null);
  const floating2Ref = useRef(null);
  const floating3Ref = useRef(null);

  useEffect(() => {
    // Animasi title
    gsap.fromTo(titleRef.current, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    // Animasi form
    gsap.fromTo(formRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animasi CEO card
    gsap.fromTo(ceoCardRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ceoCardRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animasi floating elements
    gsap.to(floating1Ref.current, {
      y: 20,
      rotation: 5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to(floating2Ref.current, {
      y: -15,
      rotation: -3,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.5
    });

    gsap.to(floating3Ref.current, {
      y: 25,
      rotation: 7,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1
    });

    // Hover animation untuk form inputs
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('mouseenter', () => {
        gsap.to(input, {
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      input.addEventListener('mouseleave', () => {
        gsap.to(input, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    return () => {
      // Cleanup event listeners
      inputs.forEach(input => {
        input.removeEventListener('mouseenter', () => {});
        input.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Animasi tombol submit
    const submitBtn = e.target.querySelector('button[type="submit"]');
    gsap.to(submitBtn, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.to(submitBtn, {
          scale: 1,
          duration: 0.1
        });
        
        // Simulasi pengiriman form
        console.log('Form submitted');
        alert('Pesan Anda telah terkirim! Kami akan menghubungi Anda segera.');
        e.target.reset();
      }
    });
  };

  return (<>
    <Navbar textColor='text-black'/>
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-16 mt-10">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Contact Us
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Let's collaborate to bring Indonesian marine fisheries products to the world
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Form Section */}
        <section ref={formRef} className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  placeholder="Your First Name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  placeholder="Your Last Name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                placeholder="Your Company"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
              >
                <option value="">Select Subject</option>
                <option value="export">Fishery Exports</option>
                <option value="partnership">Partnerships</option>
                <option value="inquiry">Frequently Asked Questions</option>
                <option value="other">Others</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 resize-vertical"
                placeholder="Write Your Message Here..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              Send Message
            </button>
          </form>
        </section>

        {/* CEO Card Section */}
        <section ref={ceoCardRef} className="flex flex-col items-center lg:items-start space-y-8">
          {/* CEO Profile Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-md border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="text-center">
              {/* Avatar dengan animasi */}
              <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-700 opacity-20 rounded-full"></div>
                <span className="text-white text-4xl font-bold relative z-10">NS</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Nuru Syahrirramadhan</h3>
              <p className="text-blue-600 font-semibold mb-4">Chief Executive Officer</p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 15 years of experience in the fishing industry, I am committed to
                bringing the best quality Indonesian seafood products to the international market.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-300">
                  <FiMail className="w-5 h-5 text-blue-600" />
                  <span className="text-sm md:text-base">nuru.syahrirramadhan@perikananindonesia.com</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-300">
                  <FiPhone className="w-5 h-5 text-blue-600" />
                  <span className="text-sm md:text-base">+62 812-3456-7890</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-300">
                  <FiMapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-sm md:text-base">Jakarta, Indonesia</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a 
                  href="#" 
                  className="p-3 text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300 transform hover:scale-110"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, { scale: 1.2, duration: 0.3 });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, { scale: 1, duration: 0.3 });
                  }}
                >
                  <FiLinkedin className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="p-3 text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300 transform hover:scale-110"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, { scale: 1.2, duration: 0.3 });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, { scale: 1, duration: 0.3 });
                  }}
                >
                  <FiTwitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Additional Company Info */}
          <div className="bg-blue-50 rounded-xl p-6 w-full max-w-md border border-blue-100 hover:shadow-lg transition-shadow duration-300">
            <h4 className="font-semibold text-blue-900 mb-4 text-lg">Company Information</h4>
            <div className="space-y-3 text-blue-800">
              <div className="flex items-center gap-3">
                <span>🏢</span>
                <span>PT. Deepsea Nusantara</span>
              </div>
              <div className="flex items-center gap-3">
                <span>📞</span>
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <span>🌐</span>
                <span>www.perikananindonesia.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Floating Background Elements dengan animasi */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div 
          ref={floating1Ref}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-100 rounded-full opacity-20"
        ></div>
        <div 
          ref={floating2Ref}
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-blue-200 rounded-full opacity-30"
        ></div>
        <div 
          ref={floating3Ref}
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-300 rounded-full opacity-40"
        ></div>
      </div>
    </div>
    <Footer />
  </>);
};

export default ContactPage;