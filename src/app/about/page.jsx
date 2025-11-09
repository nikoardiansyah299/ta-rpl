'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FiCheck, FiUsers, FiAward, FiGlobe, FiShield, FiTrendingUp, FiAnchor, FiTarget } from 'react-icons/fi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const missionCardsRef = useRef([]);
  const valuesRef = useRef(null);
  const timelineRef = useRef(null);
  const statsRef = useRef([]);
  const teamRef = useRef(null);

  // Add to mission cards ref
  const addToMissionRefs = (el) => {
    if (el && !missionCardsRef.current.includes(el)) {
      missionCardsRef.current.push(el);
    }
  };

  // Add to stats ref
  const addToStatsRefs = (el) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  useEffect(() => {
    // keep references to GSAP timelines/tweens and ScrollTriggers so we can clean them
    const createdScrollTriggers = [];
    const createdTweens = [];
    const createdIntervals = [];

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
    createdTweens.push(heroTimeline);

    // Mission cards animation (store ScrollTriggers)
    missionCardsRef.current.forEach((card, index) => {
      const tween = gsap.fromTo(card,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
      createdTweens.push(tween);
      // if gsap created a ScrollTrigger, collect it
      if (tween.scrollTrigger) createdScrollTriggers.push(tween.scrollTrigger);
    });

    // Values section animation
    const valuesTween = gsap.fromTo(valuesRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: valuesRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    createdTweens.push(valuesTween);
    if (valuesTween.scrollTrigger) createdScrollTriggers.push(valuesTween.scrollTrigger);

    // Timeline animation
    const tlTween = gsap.fromTo(timelineRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    createdTweens.push(tlTween);
    if (tlTween.scrollTrigger) createdScrollTriggers.push(tlTween.scrollTrigger);

    // Stats counter animation dengan GSAP (menggantikan Anime.js)
    statsRef.current.forEach((stat, index) => {
      const st = ScrollTrigger.create({
        trigger: stat,
        start: 'top 85%',
        onEnter: () => {
          const target = parseInt(stat.getAttribute('data-target'));
          const timer = animateCounter(stat, target, index);
          if (timer) createdIntervals.push(timer);
        },
        once: true
      });
      createdScrollTriggers.push(st);
    });

    // Team section animation
    const teamTween = gsap.fromTo(teamRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    createdTweens.push(teamTween);
    if (teamTween.scrollTrigger) createdScrollTriggers.push(teamTween.scrollTrigger);

    // Floating animation untuk background elements dengan GSAP
    const float1 = gsap.to('.floating-element-1', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    const float2 = gsap.to('.floating-element-2', {
      y: 15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5
    });
    const float3 = gsap.to('.floating-element-3', {
      y: -25,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1
    });
    createdTweens.push(float1, float2, float3);

    // Hover animations untuk cards: attach named handlers so we can remove them
    const cards = Array.from(document.querySelectorAll('.hover-card'));
    const enterHandlers = new Map();
    const leaveHandlers = new Map();
    cards.forEach(card => {
      const onEnter = () => {
        gsap.to(card, {
          y: -10,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          duration: 0.3,
          ease: 'power2.out'
        });
      };
      const onLeave = () => {
        gsap.to(card, {
          y: 0,
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          duration: 0.3,
          ease: 'power2.out'
        });
      };
      enterHandlers.set(card, onEnter);
      leaveHandlers.set(card, onLeave);
      card.addEventListener('mouseenter', onEnter);
      card.addEventListener('mouseleave', onLeave);
    });

    // Cleanup: remove event listeners, clear intervals, kill tweens and ScrollTriggers
    return () => {
      // remove card handlers
      cards.forEach(card => {
        const onEnter = enterHandlers.get(card);
        const onLeave = leaveHandlers.get(card);
        if (onEnter) card.removeEventListener('mouseenter', onEnter);
        if (onLeave) card.removeEventListener('mouseleave', onLeave);
      });

      // clear any intervals created by counters
      createdIntervals.forEach((id) => clearInterval(id));

      // kill GSAP timelines/tweens
      createdTweens.forEach((t) => { try { t.kill && t.kill(); } catch (e) {} });

      // kill ScrollTriggers created in this effect
      createdScrollTriggers.forEach((st) => { try { st.kill && st.kill(); } catch (e) {} });
    };
  }, []);

  const animateCounter = (element, target, index) => {
    let count = 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / (duration / steps);
    
    const timer = setInterval(() => {
      count += increment;
      if (count >= target) {
        count = target;
        clearInterval(timer);
      }
      element.innerHTML = Math.floor(count) + (element.getAttribute('data-suffix') || '');
    }, duration / steps);
    return timer;
  };

  const milestones = [
    { year: '2010', title: 'Company Establishment', description: 'PT. Deepsea Nusantara was founded with the vision of becoming a trusted exporter.' },
    { year: '2013', title: 'First Export', description: 'Made the first shipment to Japan with the highest quality standards.' },
    { year: '2016', title: 'International Certification', description: 'Obtained HACCP and ISO 22000 certification for food safety systems.' },
    { year: '2019', title: 'European Market Expansion', description: 'Entered the European Union market with premium tuna and skipjack products.' },
    { year: '2022', title: 'Technological Innovation', description: 'Implementing a digital traceability system for full transparency.' },
    { year: '2024', title: 'Industry Leader', description: 'Becoming one of the largest fishery exporters in Indonesia.' }
  ];

  const teamMembers = [
    { name: 'Nuru Syahrirramadhan', position: 'CEO & Founder', expertise: '15+ years of experience in the fisheries industry' },
    { name: 'Reva Aliya Putri P.', position: 'Head of Quality Control', expertise: 'Specialist in international food safety standards' },
    { name: 'Niko Ardiansyah', position: 'Export Manager', expertise: 'Expert in export regulations and international relations' },
    { name: 'Naura Yumna Z.', position: 'Sustainability Officer', expertise: 'Sustainable fisheries management' }
  ];

  return (<>
    <Navbar textColor='text-black'/>
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl h-screen flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 
              ref={heroTitleRef}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Building Trust Through 
              <span className="text-blue-600"> Quality</span>
            </h1>
            <p 
              ref={heroSubtitleRef}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              PT. Deepsea Nusantara - Trusted Partner in Exporting High-Quality Marine Products 
              to Global Markets since 2010
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="floating-element-1 absolute top-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-20"></div>
        <div className="floating-element-2 absolute bottom-20 right-10 w-20 h-20 bg-blue-300 rounded-full opacity-30"></div>
        <div className="floating-element-3 absolute top-1/2 left-1/3 w-12 h-12 bg-blue-100 rounded-full opacity-25"></div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div 
              ref={addToMissionRefs}
              className="hover-card bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <FiTarget className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To be the bridge connecting Indonesia's marine potential with the 
                global market by providing high-quality, 
                sustainable, and reliable fishery products.
              </p>
              <ul className="space-y-3">
                {[
                  'Maintaining product quality and safety in accordance with international standards',
                  'Promoting sustainable fishing practices',
                  'Building long-term relationships with business partner.',
                  'Contributing to the national economy'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <FiCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div 
              ref={addToMissionRefs}
              className="hover-card bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <FiGlobe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To be a leading seafood export company recognized 
                globally for its quality, reliability, and commitment to 
                sustainability.
              </p>
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-semibold text-blue-900 mb-3">Core Values of Our Company</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {[
                    { icon: FiShield, text: 'Integrity' },
                    { icon: FiAward, text: 'Quality' },
                    { icon: FiUsers, text: 'Collaboration' },
                    { icon: FiTrendingUp, text: 'Innovation' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-blue-800">
                      <item.icon className="w-4 h-4" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: 14, suffix: '+', label: 'Year experience' },
              { number: 25, suffix: '+', label: 'Country Destination' },
              { number: 500, suffix: '+', label: 'Partner Business' },
              { number: 99, suffix: '%', label: 'Customer Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="space-y-3">
                <div 
                  ref={addToStatsRefs}
                  data-target={stat.number}
                  data-suffix={stat.suffix}
                  className="text-4xl md:text-5xl font-bold"
                >
                  0{stat.suffix}
                </div>
                <div className="text-blue-100 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Values */}
            <div ref={valuesRef}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Values & Commitment</h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Transparency & Trust',
                    description: 'Every transaction is accompanied by complete documentation and a traceability system accessible to business partners.',
                    features: ['Complete certification', 'Real-time documentation', 'Regular audits']
                  },
                  {
                    title: 'Quality & Standards',
                    description: 'Following the strictest international standards with a multi-stage quality control system.',
                    features: ['HACCP & ISO 22000', 'Cold chain management', 'Laboratory testing']
                  },
                  {
                    title: 'Sustainability',
                    description: 'Committed to sustainable fishing practices and marine ecosystem conservation.',
                    features: ['Sustainable sourcing', 'Eco-friendly packaging', 'Community development']
                  }
                ].map((value, index) => (
                  <div key={index} className="hover-card bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 mb-4">{value.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {value.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div ref={timelineRef}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Journey</h2>
              <div className="space-y-8 relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                      <FiAnchor className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                        <div className="text-blue-600 font-bold text-lg mb-2">
                          {milestone.year}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">
                          {milestone.title}
                        </h4>
                        <p className="text-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Supported by a professional team with extensive experience in the fisheries and international export industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="hover-card bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100"
              >
                <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.expertise}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Recognition</h2>
            <p className="text-xl text-gray-600">
              Our commitment to quality is recognized through various international certifications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'HACCP', desc: 'Food Safety System' },
              { name: 'ISO 22000', desc: 'Food Safety Management' },
              { name: 'MSC', desc: 'Sustainable Fishing' },
              { name: 'BRCGS', desc: 'Global Standard' }
            ].map((cert, index) => (
              <div 
                key={index}
                className="hover-card bg-blue-50 rounded-xl p-6 text-center border-2 border-blue-100"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FiAward className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{cert.name}</h3>
                <p className="text-blue-700 text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </>);
};

export default AboutPage;