"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, MessageSquare } from "lucide-react"

export default function Home() {
  const [headerVisible, setHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollingDown, setScrollingDown] = useState(false)
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null)

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

  return (
    <div className="min-h-screen bg-[rgb(235, 240, 225)]">
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 bg-[rgb(240,239,225)] border-b border-gray-200"
        style={{ transform: headerVisible ? "translateY(0)" : "translateY(-100%)" }}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-10">
          <div>
            <Image
              src="/icon.png"
              alt="icon"
              width={64}
              height={64}
              className="text-gray-700"
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg" style={headingStyle}>Aatmik Life Studio</h2>
          </div>
          <div>
            {/* <button className="text-gray-700">+Menu</button> */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[rgb(240,239,225)] py-16 pt-[187px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col">
            <div className="mb-8">
              <h1 
                className="mb-4 text-6xl tracking-tight text-center uppercase"
                style={{
                  fontFamily: 'cormorantgaramond-light, cormorantgaramond, "cormorant garamond", serif',
                  letterSpacing: '0.04em',
                  fontSize: '90px',
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
                  <button className="border border-gray-800 px-6 py-2 text-sm hover:bg-gray-100">Explore More</button>
                  <button className="border border-gray-800 px-6 py-2 text-sm hover:bg-gray-100">Contact us</button>
                </div>
              </div>
              <div className="flex items-center justify-center h-[800px]">
                <Image
                  src="/pexels-olia-danilevich-8964938.jpg"
                  alt="Woman meditating"
                  width={300}
                  height={600}
                  className="rounded-md object-cover rotate-90 w-full h-[600px]"
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
                src="/IMG_2418.JPEG"
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
      <section className="bg-[rgb(240,239,225)] py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-4xl font-light" style={headingStyle}>Process</h2>
          <p className="mb-12 text-sm">Simple and Effective</p>

          <div className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-xl font-light">Assessment</h3>
                <p className="text-sm text-gray-700">Custom Health Evaluation</p>
              </div>
              <div>
                <p className="text-sm leading-relaxed">
                  Our initial assessment involves a detailed analysis of your health status and goals to create a
                  personalized plan that suits your requirements. We prioritize understanding your needs to provide the
                  best recommendations for your well-being.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 py-8"></div>

          <div className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-xl font-light">Nutrition</h3>
                <p className="text-sm text-gray-700">Personalized Meal Plans</p>
              </div>
              <div>
                <p className="text-sm leading-relaxed">
                  Nutrition plans are tailored to meet your dietary preferences and health objectives. We focus on
                  creating balanced and sustainable meal plans that support your overall health and well-being.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 py-8"></div>

          <div className="mb-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-xl font-light">Coaching</h3>
                <p className="text-sm text-gray-700">Guidance and Support</p>
              </div>
              <div>
                <p className="text-sm leading-relaxed">
                  Our lifestyle coaching sessions aim to motivate and inspire you towards a healthier lifestyle. We
                  provide guidance on mindfulness, stress management, and physical fitness, all personalized to help you
                  achieve your well-being goals.
                </p>
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
            src="/pexels-yaroslav-shuraev-4938111.jpg"
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
            src="/pexels-taryn-elliott-7565936.jpg"
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
              <form className="space-y-4">
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
                <button type="submit" className="w-full border border-[rgb(240,239,225)] py-3 text-center text-sm text-[rgb(240,239,225)] hover:bg-[rgb(240,239,225)] hover:text-gray-800">
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
