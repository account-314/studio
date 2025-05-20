"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, MessageSquare } from "lucide-react"
import { useForm, ValidationError } from '@formspree/react';

export default function Home() {
  const [headerVisible, setHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollingDown, setScrollingDown] = useState(false)
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null)

  const [formState, handleFormspreeSubmit] = useForm("xzzroeok");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine scroll direction
      const isScrollingDown = currentScrollY > lastScrollY
      setScrollingDown(isScrollingDown)

      // Update last scroll position
      setLastScrollY(currentScrollY)

      // Hide header immediately when scrolling down
      if (isScrollingDown && currentScrollY > 700) {
        setHeaderVisible(false)
        // Clear any existing timeout
        if (hideTimeout) {
          clearTimeout(hideTimeout)
          setHideTimeout(null)
        }
      } else if (!isScrollingDown) {
        // When scrolling up, immediately show the header
        setHeaderVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (hideTimeout) clearTimeout(hideTimeout)
    }
  }, [lastScrollY, hideTimeout])

  // Create a reusable style object for the headings
  const headingStyle = {
    fontFamily: 'cormorantgaramond-light, cormorantgaramond, "cormorant garamond", serif',
    fontWeight: '300',
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Get form values
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    // Construct email body
    const emailBody = `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `.trim();

    // Create mailto URL with encoded parameters
    const mailtoUrl = `mailto:aatmiklifestudio@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;

    // Open default email client
    window.location.href = mailtoUrl;
  };

  const scrollToJourney = () => {
    const journeySection = document.querySelector('#journey-section')
    if (journeySection) {
      journeySection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[rgb(235, 240, 225)]">
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 bg-[rgb(240,239,225)] border-b border-gray-200"
        style={{ transform: headerVisible ? "translateY(0)" : "translateY(-100%)" }}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-7">
          <div>
            <Image
              src="/studio/icon.png"
              alt="icon"
              width={64}
              height={64}
              className="text-gray-700"
            />
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 
              className="text-3xl text-orange-600" 
              style={headingStyle}
            >
              Aatmik Life Studio
            </h1>
          </div>
          <div>
            {/* <button className="text-gray-700">+Menu</button> */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[rgb(240,239,225)] py-16 pt-[180px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col">
            <div className="mb-8">
              <h1 
                className="mb-4 text-6xl tracking-tight text-center uppercase"
                style={{
                  fontFamily: 'cormorantgaramond-light, cormorantgaramond, "cormorant garamond", serif',
                  letterSpacing: '0.04em',
                  fontSize: '50px',
                  fontWeight: '300',
                  textAnchor: 'middle',
                  direction: 'ltr',
                  fill: 'rgb(0, 0, 0)',
                  textAlign: 'center'
                }}
              >
                EMPOWER YOUR HEALTH
              </h1>
              <p className="text-lg text-center">Personalized Wellness Solutions</p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <p className="mb-8 text-sm leading-relaxed">
                  We as humans always want to grow and move forward in our lives. We all have different areas of life like health, wealth, relationships, social life, dreams, spirituality, joy etc. that are important to us, when we balance these areas it gives real purpose to life. However, the everyday pressures of modern life and our past and future worries frequently trap us in a never-ending cycle of stress and purposelessness.
                  In this retreat, you will not only learn various aspects of life but also perform some exercises or techniques that will help you to come out from the situation whenever you feel stuck.
                  Our experienced instructors and wellness experts will lead you through energizing activities, yoga sessions, and nutritionally balanced meals designed to nourish your body and increase your vitality.
                  Your mental health is as vital as your physical health. Our mindfulness and meditation programs are designed to help you find inner peace, reduce stress, and enhance your emotional resilience. Through guided practices, you'll learn how to quiet the mind, achieve mental clarity, and cultivate a positive mindset.
                  We believe that connecting with your inner self is essential for a balanced and fulfilling life. Our spiritual guidance and contemplative sessions will help you explore your spiritual dimension, nurturing a sense of purpose, inner strength, and tranquility.
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={scrollToJourney} 
                    className="border border-gray-800 px-6 py-2 text-sm hover:bg-gray-100"
                  >
                    Explore More
                  </button>
                  <a 
                    href="https://calendly.com/aatmiklifestudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-800 px-6 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    Contact us
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center h-[800px]">
                <Image
                  src="/studio/yoga.jpg"
                  alt="Woman meditating"
                  width={300}
                  height={600}
                  className="rounded-md object-cover  w-full h-[600px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet your guide */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <Image
                src="/studio/IMG_2418.JPEG"
                alt="Stacked stones"
                width={800}
                height={600}
                className="rounded-md object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 text-4xl font-light" style={headingStyle}>Meet your guide</h2>
              <p className="mb-2 text-lg">Mrs Sushma Malik</p>
              <p className="mb-4 text-sm leading-relaxed">
                I'm an internationally certified yoga instructor, I blend traditional yoga practices with modern techniques to guide individuals toward physical and mental harmony. With a deep understanding of alternative medicine, I incorporate natural healing methods into my teachings, promoting overall wellness.
              </p>
              
              <p className="mb-4 text-sm leading-relaxed">
                As a life coach, I empower others to unlock their full potential, offering guidance on personal development, physical well-being, and achieving a balanced life.
              </p>
              
              <p className="text-sm leading-relaxed">
                Through my multifaceted expertise, I strive to create a supportive and uplifting environment for individuals on their journey to holistic well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="journey-section" className="bg-[rgb(240,239,225)] py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-4xl font-light" style={headingStyle}>Your Journey Starts Here</h2>
          <p className="mb-12 text-sm">Tailored Sessions to Guide, Heal, and Empower</p>

          <div className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-xl font-light">Aatmik Bliss Retreat</h3>
                <p className="text-sm text-gray-700">Rejuvenate. Reflect. Realign.</p>
              </div>
              <div>
                <p className="text-sm leading-relaxed">
                  Escape to the serene foothills of Rishikesh for a soulful wellness retreat. This immersive experience blends ancient yogic practices, guided meditation, breathwork, sound healing, and nature-based therapies to help you reconnect with your inner light. Ideal for those seeking clarity, vitality, and purpose. Open to all levels—no prior experience needed.
                </p>
                <p className="mt-2 text-sm">Duration: Multi-day immersive program</p>
                <p className="text-sm">Inquire for Pricing & Availability</p>
                <a 
                  href="/Aatmik-Retreat.pdf" 
                  download
                  className="mt-4 inline-flex items-center text-sm text-orange-600 hover:text-orange-700"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="mr-2 h-5 w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </svg>
                  Download Retreat Brochure
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 py-8"></div>

          <div className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-xl font-light">Life Coaching</h3>
                <p className="text-sm text-gray-700">Transformative Personal Guidance</p>
              </div>
              <div>
                <p className="text-sm leading-relaxed">
                  Our life coaching sessions are designed to help you unlock your full potential. Through thoughtful conversation and actionable strategies, we support you in navigating life's challenges and achieving personal clarity.
                </p>
                <p className="mt-2 text-sm">Duration: 1 hour</p>
                <p className="text-sm">Fee: ₹2,999</p>
                <a 
                  href="https://calendly.com/aatmiklifestudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block border border-gray-800 px-6 py-2 text-sm hover:bg-gray-100"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 py-8"></div>

          <div className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-xl font-light">Crisis Management</h3>
                <p className="text-sm text-gray-700">Immediate Support in Difficult Times</p>
              </div>
              <div>
                <p className="text-sm leading-relaxed">
                  Get professional support during emotional or situational crises. This session provides you with the tools and clarity needed to handle high-stress moments with strength and balance.
                </p>
                <p className="mt-2 text-sm">Duration: 1 hour</p>
                <p className="text-sm">Fee: ₹2,999</p>
                <a 
                  href="https://calendly.com/aatmiklifestudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block border border-gray-800 px-6 py-2 text-sm hover:bg-gray-100"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 py-8"></div>

          <div className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-xl font-light">Initial Advice & Consultation</h3>
                <p className="text-sm text-gray-700">Start Your Journey with Expert Insight</p>
              </div>
              <div>
                <p className="text-sm leading-relaxed">
                  A focused 15-minute session ideal for first-time clients. Share your concerns, receive immediate guidance, and discover how our services can benefit you.
                </p>
                <p className="mt-2 text-sm">Duration: 15 minutes</p>
                <p className="text-sm">Fee: ₹499</p>
                <a 
                  href="https://calendly.com/aatmiklifestudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block border border-gray-800 px-6 py-2 text-sm hover:bg-gray-100"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 py-8"></div>

          <div className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-xl font-light">Follow-Up Session</h3>
                <p className="text-sm text-gray-700">Continued Support for Ongoing Clients</p>
              </div>
              <div>
                <p className="text-sm leading-relaxed">
                  Designed for returning clients, this session allows us to build on previous work, track progress, and refine your strategy for continued growth and support.
                </p>
                <p className="mt-2 text-sm">Duration: 1 hour</p>
                <p className="text-sm">Fee: ₹2,499</p>
                <a 
                  href="https://calendly.com/aatmiklifestudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block border border-gray-800 px-6 py-2 text-sm hover:bg-gray-100"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 py-8"></div>

          <div className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-xl font-light">Spiritual Tour Planning</h3>
                <p className="text-sm text-gray-700">Curated Experiences for the Soul</p>
              </div>
              <div>
                <p className="text-sm leading-relaxed">
                  Let us help you plan spiritually enriching and adventurous journeys. We blend travel with meaning to create memorable, soul-refreshing itineraries tailored to your interests.
                </p>
                <p className="mt-2 text-sm">Duration: 1 hour</p>
                <p className="text-sm">Fee: ₹499</p>
                <a 
                  href="https://calendly.com/aatmiklifestudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block border border-gray-800 px-6 py-2 text-sm hover:bg-gray-100"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 py-8"></div>

          <div className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-xl font-light">Online Personal Yoga Session</h3>
                <p className="text-sm text-gray-700">One-on-One Guided Practice</p>
              </div>
              <div>
                <p className="text-sm leading-relaxed">
                  Experience a personalized yoga session from the comfort of your home. Tailored to your level and goals, these sessions promote physical strength, flexibility, and inner peace.
                </p>
                <p className="mt-2 text-sm">Duration: 1 hour</p>
                <p className="text-sm">Fee: ₹999</p>
                <a 
                  href="https://calendly.com/aatmiklifestudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block border border-gray-800 px-6 py-2 text-sm hover:bg-gray-100"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-4xl font-light" style={headingStyle}>Testimonials</h2>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div></div>
            <div className="space-y-12">
              <div>
                <p className="mb-2 text-sm italic leading-relaxed">
                  "I am Vishal Narang, owner of Industrial Switchgears, an electrical goods trading firm operating in Gurgaon since last 29 years.

                    I would like to take this opportunity to acknowledge Ms Sushma Malik from Aatmik Life Studio.

                    I recommended her to my brother in law Mr Geet to provide an immediate therapy for his severe high blood pressure problem & we were happily astonished to see great result. She even attended him during odd hours that too when he collapsed & was being taken to doctor. In my brother in law's words she is very knowledgeable and compassionate.

                    I wholeheartedly recommend her for highly effective therapy and yoga sessions.

                    </p>
                    <p className="mb-2 text-sm italic leading-relaxed">
                    Regards"
                </p>
                <p className="text-sm">Vishal Narang</p>
              </div>

              <div>
                <p className="mb-2 text-sm italic leading-relaxed">
                  "Dear Sushma, </p>

                  <p  className="mb-2 text-sm italic leading-relaxed">

                    When I joined your yoga class in September, I was having slight backpain, general lethargy, severe PMS and I was finding it particularly hard to concentrate on my studies. Seven months have passed since then and I am delighted to accept that all the above-mentioned problems have waned. It is difficult to describe your dedication towards your students in words. You not only design classes to ensure general well-being of the attendees but you meticulously teach variations of the asanas as per individual's limitations/problems. Your eagerness to teach asanas and pranayam with correct technique and your insistence on correct posture has spilled positivity beyond the class as well. Now in my daily routine I keep in mind to breathe properly and to maintain good posture. Your instructions about good food habits have also proven to be extremely beneficial. Your subtle but firm way of assertion makes it possible for your students to follow you willingly, for coercion is not what you adhere to. Your positivity, patient persona and calming voice help immensely in concentrating in the yoga class with equal fervor on a daily basis.

                    Best wishes for your future endeavours Sushma. I hope a lot of people benefit from your passion to spread the knowledge of yoga and your enthusiasm to usher in good health to people around you.</p>
                    <p className="mb-2 text-sm italic leading-relaxed">
                    All the very best! </p>
                    <p className="mb-2 text-sm italic leading-relaxed">

                    Warm regards"
                </p>
                <p className="text-sm">Anu Choudhury</p>
                <p className="text-sm">Research Scholar, Centre for the Study of Law and Governance</p>
                <p className="text-sm">Jawaharlal Nehru University</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Food Image Section */}
      <section className="bg-[rgb(240,239,225)]">
        <div className="w-full h-screen">
          <Image
            src="/studio/pexels-yaroslav-shuraev-4938111.jpg"
            alt="Healthy food display"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[rgb(240,239,225)] py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-4xl font-light" style={headingStyle}>Frequently Asked Questions</h2>

          <div className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-sm font-medium">Consultation Process</h3>
              </div>
              <div>
                <p className="text-sm leading-relaxed">
                  Our consultation process involves an initial assessment to understand your health goals and concerns.
                  We then create a customized plan to address your specific needs and guide you towards holistic
                  well-being.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 py-8"></div>

          <div className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-sm font-medium">Program Duration and Results</h3>
              </div>
              <div>
                <p className="text-sm leading-relaxed">
                  The duration of our programs varies based on individual requirements and goals. Results are typically
                  noticeable within a few weeks, but long-term benefits are achieved through consistent dedication and
                  adherence to the program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[rgb(240,239,225)] relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/studio/pexels-taryn-elliott-7565936.jpg"
            alt="Fruit bowl background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-4xl font-light text-[rgb(240,239,225)]" style={headingStyle}>Leave Us a Message and We'll Get Back to You</h2>
            </div>
            <div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="firstName" className="mb-1 block text-sm text-[rgb(240,239,225)]">
                    First name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full border-b border-[rgb(240,239,225)] bg-transparent py-2 text-[rgb(240,239,225)] placeholder-[rgb(240,239,225)] focus:border-[rgb(240,239,225)] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-1 block text-sm text-[rgb(240,239,225)]">
                    Last name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full border-b border-[rgb(240,239,225)] bg-transparent py-2 text-[rgb(240,239,225)] placeholder-[rgb(240,239,225)] focus:border-[rgb(240,239,225)] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm text-[rgb(240,239,225)]">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border-b border-[rgb(240,239,225)] bg-transparent py-2 text-[rgb(240,239,225)] placeholder-[rgb(240,239,225)] focus:border-[rgb(240,239,225)] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm text-[rgb(240,239,225)]">
                    Phone
                  </label>
                  <div className="flex items-center">
                    <div className="mr-2 flex items-center border-b border-[rgb(240,239,225)]">
                      <span className="text-sm text-[rgb(240,239,225)]">+1</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 text-[rgb(240,239,225)]"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full border-b border-[rgb(240,239,225)] bg-transparent py-2 text-[rgb(240,239,225)] placeholder-[rgb(240,239,225)] focus:border-[rgb(240,239,225)] focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm text-[rgb(240,239,225)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full border-b border-[rgb(240,239,225)] bg-transparent py-2 text-[rgb(240,239,225)] placeholder-[rgb(240,239,225)] focus:border-[rgb(240,239,225)] focus:outline-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full border border-[rgb(240,239,225)] py-3 text-center text-sm text-[rgb(240,239,225)] hover:bg-[rgb(240,239,225)] hover:text-gray-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[rgb(240,236,228)] py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-light" style={headingStyle}>Aatmik Life Studio</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm">+91 9266155633</p>
              <p className="text-sm">aatmiklifestudio@gmail.com</p>
              <p className="mt-4 text-sm">G-081 Enigma Indiabulls, Gurgaon</p>
            </div>
            <div className="flex flex-col items-end space-y-1 text-sm">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Accessibility Statement
              </a>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </div>
          </div>

          <div className="mt-16 text-right text-xs text-gray-600">
            © 2025 by Aatmik Life Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
