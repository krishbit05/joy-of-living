"use client";

import Image from "next/image";
import ContactForm from "/components/ContactForm";
import { motion } from "framer-motion";

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};


export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-light pt-16">
        <div className="max-w-7xl mx-auto px-6 py-2 grid md:grid-cols-2 gap-12">

          {/* TEXT */}
          <div>
            <h1 className="flex flex-col gap-2 text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Care You Can <span className="text-primary">Count On</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Joy of Living Nursing and Disability Care provides
              compassionate, professional support for NDIS participants,
              helping people live safely and independently.
            </p>

            <p className="mt-4 text-gray-600 text-lg">
              We offer nursing care, domestic assistance, transport,
              and support coordination tailored to individual needs.
            </p>

            {/* GET IN TOUCH BUTTON */}
            <div className="mt-8">
              <a
                href="/contact"
                className="
            inline-block
            bg-primary text-white
            px-8 py-4
            rounded-md
            font-semibold
            text-lg
            hover:bg-teal-700
            transition
          "
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <Image
            src="/images/hero_hands.png"
            alt="Disability care support"
            width={560}
            height={260}
            className="rounded-xl"
          />

        </div>
      </section>


      {/* SERVICES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* SECTION HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Person-centred care designed to support independence,
              dignity, and quality of life.
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: "Community Nursing",
                color: "bg-teal-100 text-teal-700",
                desc: "Clinical nursing care including wound care, medication management, and chronic condition support.",
              },
              {
                title: "NDIS Support",
                color: "bg-indigo-100 text-indigo-700",
                desc: "Reliable supports to help NDIS participants live safely and confidently.",
              },
              {
                title: "Daily Living Assistance",
                color: "bg-amber-100 text-amber-700",
                desc: "Support with personal care, hygiene, meal preparation, and daily routines.",
              },
              {
                title: "In-Home Care",
                color: "bg-rose-100 text-rose-700",
                desc: "Comfortable, respectful care delivered in the familiarity of your home.",
              },
              {
                title: "After Hospital Care",
                color: "bg-sky-100 text-sky-700",
                desc: "Post-hospital recovery support to ensure a smooth and safe transition home.",
              },
              {
                title: "Support Coordination",
                color: "bg-emerald-100 text-emerald-700",
                desc: "Helping you understand, manage, and get the most from your NDIS plan.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="
            group
            relative
            border border-gray-200
            rounded-xl
            p-8
            bg-white
            transition
            hover:-translate-y-1
            hover:shadow-xl
          "
              >
                {/* TOP ACCENT BAR */}
                <span
                  className="
              absolute top-0 left-0
              w-full h-1
              rounded-t-xl
              bg-primary
              opacity-0
              group-hover:opacity-100
              transition
            "
                />

                {/* ICON BADGE */}
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${service.color}`}
                >
                  <span className="text-xl font-bold">
                    {service.title.charAt(0)}
                  </span>
                </div>

                {/* CONTENT */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-28">

          {/* WHY CHOOSE US */}
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Why Choose Joy of Living?
            </h2>

            {/* INTRO */}
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Choosing our services means choosing a compassionate and dedicated
              team committed to providing the highest level of personalised care
              for your loved ones.
            </p>

            {/* BODY */}
            <p className="text-gray-600 mb-2 leading-relaxed">
              Our experienced and skilled nurses are not just healthcare
              professionals — they are caregivers who understand the importance
              of creating a nurturing, respectful, and comfortable environment
              within the home.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              We prioritise the well-being and comfort of every individual we
              support, tailoring our services to meet unique needs while
              maintaining independence, dignity, and quality of life.
            </p>

            {/* HIGHLIGHT POINTS */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">
                  Person-Centred Care
                </h4>
                <p className="text-gray-600 text-sm">
                  Every service is tailored to individual goals, needs, and
                  preferences.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">
                  Experienced Professionals
                </h4>
                <p className="text-gray-600 text-sm">
                  Qualified nurses and support workers with real-world experience.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">
                  Respect & Dignity
                </h4>
                <p className="text-gray-600 text-sm">
                  We treat every individual with compassion, respect, and empathy.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-gray-900 mb-1">
                  Supporting Independence
                </h4>
                <p className="text-gray-600 text-sm">
                  Our focus is on empowering individuals to live confidently.
                </p>
              </div>
            </div>
          </div>

          {/* SERVICE 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold text-primary mb-4">
                Assistance With Activities of Daily Living
              </h3>

              <p className="text-gray-600">
                We take pride in offering exceptional assistance with daily living
                to enhance the quality of life for our clients. Our dedicated team
                understands the importance of maintaining independence while
                providing the support needed for a comfortable and fulfilling
                lifestyle.
              </p>

              <p className="text-gray-600 mt-3">
                Whether it’s assistance with personal hygiene, meal preparation,
                mobility support, or companionship, we tailor our services to meet
                the unique needs and preferences of each individual.
              </p>
            </div>

            <div className="">
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex justify-center"
              >
                <Image
                  src="/images/assistance.jpg"
                  alt="Daily living assistance"
                  width={420}
                  height={288}
                  className="w-full h-72 rounded-xl"
                />
              </motion.div>
            </div>
          </div>

          {/* SERVICE 2 (ALTERNATE) */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="order-2 md:order-1 flex justify-center"
              >
                <Image
                  src="/images/social.jpg"
                  alt="Social participation"
                  width={420}
                  height={288}
                  className="w-full h-72 rounded-xl"
                />
              </motion.div>

            </div>

            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-semibold text-primary mb-4">
                Social and Community Participation
              </h3>

              <p className="text-gray-600">
                At Joy of Living, our commitment goes beyond medical care. We
                believe in fostering social and community participation to enrich
                the lives of those under our care.
              </p>

              <p className="text-gray-600 mt-3">
                We recognise the importance of maintaining connections, engaging
                in meaningful activities, and being an active part of the
                community.
              </p>
            </div>
          </div>

          {/* SERVICE 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold text-primary mb-4">
                Dedicated Nursing Care
              </h3>

              <p className="text-gray-600">
                Welcome to our home nursing service, where we bring compassionate
                and expert healthcare right to your doorstep.
              </p>

              <p className="text-gray-600 mt-3">
                Our skilled nurses deliver post-operative care, medication
                management, wound care, and chronic condition support — ensuring
                the highest standard of healthcare without leaving your home.
              </p>
            </div>

            <div className="">
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="order-2 md:order-1 flex justify-center"
              >
                <Image
                  src="/images/nursing.jpg"
                  alt="Social participation"
                  width={420}
                  height={288}
                  className="w-full h-72 rounded-xl"
                />
              </motion.div>

            </div>
          </div>

          {/* SERVICE 4 (ALTERNATE) */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4}}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="order-2 md:order-1 flex justify-center"
              >
                <Image
                  src="/images/travel_escort.jpg"
                  alt="Social participation"
                  width={620}
                  height={288}
                  className="w-full h-72 rounded-xl"
                />
              </motion.div>

            </div>

            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-semibold text-primary mb-4">
                Transport and Travel Escorts
              </h3>

              <p className="text-gray-600">
                Our dedicated support workers provide safe, reliable, and respectful
                transport services to help individuals attend medical appointments,
                therapy sessions, social outings, and community events.
              </p>

              <p className="text-gray-600 mt-3">
                We understand that travel can sometimes feel overwhelming. That’s why
                our team offers calm, patient, and supportive assistance throughout
                the journey — from door to destination and back again.
              </p>

            </div>
          </div>

        </div>
      </section>


      {/* CONTACT FORM SECTION (IMPORTED COMPONENT) */}
      <section className="bg-light py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Get in Touch
          </h2>

          <ContactForm />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary py-8 text-center text-white">
        <h2 className="text-3xl font-bold">
          Supporting You to Live a Meaningful Life
        </h2>
        <p className="mt-4 max-w-2xl mx-auto">
          You are the expert in your own life — we are here to support you.
        </p>
      </section>
    </>
  );
}
