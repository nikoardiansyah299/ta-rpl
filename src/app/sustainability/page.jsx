'use client'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FiUsers, FiGlobe, FiTrendingUp, FiAnchor, FiAward, FiHeart, FiBriefcase, FiRefreshCw, FiDroplet } from 'react-icons/fi';
import { FaLeaf } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const SustainabilityPage = () => {
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const sdgsSectionRef = useRef(null);
  const impactSectionRef = useRef(null);
  const commitmentSectionRef = useRef(null);
  const [activeSDG, setActiveSDG] = useState(null);
  
  const sdgsData = [
    {
      id: 2,
      number: '02',
      title: 'Zero Hunger',
      description: 'End hunger, achieve food security and improved nutrition, and promote sustainable agriculture',
      color: 'from-green-500 to-green-700',
      icon: FiHeart,
      iconColor: 'text-white',
      ourContribution: [
        'Providing sustainable seafood to combat malnutrition',
        'Supporting local fishing communities',
        'Reducing food waste through efficient supply chain',
        'Promoting nutritious seafood consumption'
      ]
    },
    {
      id: 8,
      number: '08',
      title: 'Decent Work & Economic Growth',
      description: 'Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all',
      color: 'from-red-500 to-red-700',
      icon: FiBriefcase,
      iconColor: 'text-white',
      ourContribution: [
        'Creating fair employment in coastal communities',
        'Providing training and skill development',
        'Ensuring safe working conditions',
        'Supporting local economic development'
      ]
    },
    {
      id: 12,
      number: '12',
      title: 'Responsible Consumption & Production',
      description: 'Ensure sustainable consumption and production patterns',
      color: 'from-yellow-500 to-yellow-700',
      icon: FiRefreshCw,
      iconColor: 'text-white',
      ourContribution: [
        'Implementing sustainable fishing practices',
        'Reducing packaging waste',
        'Energy-efficient processing facilities',
        'Traceability throughout supply chain'
      ]
    },
    {
      id: 14,
      number: '14',
      title: 'Life Below Water',
      description: 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development',
      color: 'from-blue-500 to-blue-700',
      icon: FiDroplet,
      iconColor: 'text-white',
      ourContribution: [
        'Protecting marine biodiversity',
        'Preventing overfishing',
        'Reducing marine pollution',
        'Supporting marine conservation'
      ]
    },
    {
      id: 17,
      number: '17',
      title: 'Partnerships for the Goals',
      description: 'Strengthen the means of implementation and revitalize the global partnership for sustainable development',
      color: 'from-indigo-500 to-indigo-700',
      icon: FiUsers,
      iconColor: 'text-white',
      ourContribution: [
        'Collaborating with international organizations',
        'Partnering with research institutions',
        'Working with local communities',
        'Global supply chain partnerships'
      ]
    }
  ];

  const impactMetrics = [
    { number: 5000, suffix: '+', label: 'Jobs Created', description: 'in coastal communities across Indonesia' },
    { number: 85, suffix: '%', label: 'Sustainable Sourcing', description: 'of our products from certified sustainable fisheries' },
    { number: 50, suffix: '+', label: 'Community Programs', description: 'supporting local fishing communities' },
    { number: 30, suffix: '%', label: 'Waste Reduction', description: 'in packaging materials since 2020' }
  ];

  useEffect(() => {
    // Hero section animation
    const heroTimeline = gsap.timeline();
    heroTimeline
      .fromTo(heroTitleRef.current, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
      )
      .fromTo(heroSubtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.5'
      );

    // SDGs section animation
    gsap.fromTo(sdgsSectionRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: sdgsSectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Impact section animation
    gsap.fromTo(impactSectionRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: impactSectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Commitment section animation
    gsap.fromTo(commitmentSectionRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: commitmentSectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Floating animation for SDG cards
    gsap.to('.sdg-card', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2
    });

    // Hover animations
    const cards = document.querySelectorAll('.hover-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -5,
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  const handleSDGHover = (sdgId) => {
    setActiveSDG(sdgId);
  };

  const handleSDGLeave = () => {
    setActiveSDG(null);
  };

  return (<>
    <Navbar textColor='text-black'/>
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 
              ref={heroTitleRef}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Sustainable 
              <span className="text-blue-600"> Future</span>
            </h1>
            <p 
              ref={heroSubtitleRef}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Committed to United Nations Sustainable Development Goals - 
              Building a better tomorrow through responsible fisheries practices
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="floating-element absolute top-20 left-10 w-16 h-16 bg-green-200 rounded-full opacity-20"></div>
        <div className="floating-element absolute bottom-20 right-10 w-20 h-20 bg-blue-300 rounded-full opacity-30"></div>
        <div className="floating-element absolute top-1/2 left-1/3 w-12 h-12 bg-green-100 rounded-full opacity-25"></div>
      </section>

      {/* SDGs Commitment Section */}
      <section ref={sdgsSectionRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Commitment to Sustainable Development Goals
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are proud to contribute to 5 key UN Sustainable Development Goals 
              through our operations and partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {sdgsData.map((sdg, index) => {
              const IconComponent = sdg.icon;
              return (
                <div
                  key={sdg.id}
                  className={`sdg-card hover-card relative bg-gradient-to-br ${sdg.color} rounded-2xl p-6 text-white cursor-pointer transform transition-all duration-500 ${
                    activeSDG === sdg.id ? 'scale-105 z-10 shadow-2xl' : 'scale-100'
                  }`}
                  onMouseEnter={() => handleSDGHover(sdg.id)}
                  onMouseLeave={handleSDGLeave}
                >
                  <div className="flex items-start justify-between mb-4">
                    <IconComponent className={`w-10 h-10 ${sdg.iconColor}`} />
                    <div className="text-3xl font-bold opacity-80">{sdg.number}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{sdg.title}</h3>
                  <p className="text-white text-opacity-90 text-sm leading-relaxed">
                    {sdg.description}
                  </p>
                  
                  {/* Expanded Content on Hover */}
                  <div className={`mt-4 transition-all duration-300 ${
                    activeSDG === sdg.id ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
                  } overflow-hidden`}>
                    <div className="pt-4 border-t border-white border-opacity-20">
                      <h4 className="font-semibold mb-3">Our Contribution:</h4>
                      <ul className="space-y-2 text-sm">
                        {sdg.ourContribution.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <FiCheck className="w-4 h-4 text-white" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* SDGs Summary */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Integrated Sustainable Approach
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to these SDGs reflects our holistic approach to sustainability - 
              from responsible sourcing and production to community development and global partnerships. 
              We believe that sustainable fisheries are essential for food security, economic growth, 
              and environmental conservation.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section ref={impactSectionRef} className="py-16 bg-gradient-to-r from-blue-600 to-green-300 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Sustainable Impact</h2>
            <p className="text-blue-100 text-xl">
              Measurable contributions towards a sustainable future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div 
                key={index}
                className="text-center hover-card bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="text-3xl text-blue-600 md:text-4xl font-bold mb-2">
                  {metric.number}{metric.suffix}
                </div>
                <div className="text-lg text-blue-600 font-semibold mb-2">{metric.label}</div>
                <div className="text-blue-300 text-sm">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitments Section */}
      <section ref={commitmentSectionRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Sustainability Pillars</h2>
            <p className="text-xl text-gray-600">
              Four key areas where we make a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FiUsers,
                title: 'Social Responsibility',
                description: 'Empowering communities and ensuring fair labor practices',
                features: ['Community development', 'Fair wages', 'Education programs']
              },
              {
                icon: FaLeaf,
                title: 'Environmental Stewardship',
                description: 'Protecting marine ecosystems and promoting biodiversity',
                features: ['Sustainable fishing practices', 'Marine conservation', 'Pollution reduction']
              },
              {
                icon: FiTrendingUp,
                title: 'Economic Sustainability',
                description: 'Creating lasting economic value through responsible business',
                features: ['Local economic growth', 'Market development', 'Value chain optimization']
              },
              {
                icon: FiGlobe,
                title: 'Global Partnerships',
                description: 'Collaborating for greater impact worldwide',
                features: ['International cooperation', 'Knowledge sharing', 'Joint initiatives']
              }
            ].map((pillar, index) => (
              <div 
                key={index}
                className="hover-card bg-gray-50 rounded-2xl p-6 text-center border border-gray-200"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{pillar.description}</p>
                <div className="space-y-2">
                  {pillar.features.map((feature, idx) => (
                    <div key={idx} className="text-blue-600 text-sm font-medium">
                      • {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-green-300 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Building a Sustainable Future</h2>
          <p className="text-xl mb-8 text-blue-100">
            Together, we can create lasting positive impact for our oceans, communities, and planet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Learn More About Our Initiatives
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Floating Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-100 rounded-full opacity-20 floating-element"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-blue-200 rounded-full opacity-30 floating-element"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-green-200 rounded-full opacity-40 floating-element"></div>
      </div>
    </div>
    <Footer />
  </>);
};

// FiCheck component untuk list items
const FiCheck = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default SustainabilityPage;