import { motion } from 'motion/react';
import { ShieldCheck, Handshake, PenTool as Tool, Users, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-surface-container-highest overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-display mb-6">Rooted in Naples, Built on Trust.</h1>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              We are more than just a roofing company; we are your neighbors. For over a decade, D' Roofing Group has been providing structural integrity and peace of mind to the homes and businesses of South Florida.
            </p>
          </motion.div>
          <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmgfazfiEiOyBZs2d7EqUZnTEVF-aNeNxK7IDSolEhDwzDBj_JQibRD-aOoUNk0b5rTzuJlrKVSa4W6Y1xs4kGdVzyB-zyVz_EeusbBuQcTRKirncxwCcy6R0MBErNmbNuOIhZAuNclADLGd6pZKW4fcTJlA-ilng6mxZc9Iix6F9MW79t3Ta71CMoxfpergvE4ALtV3HuNQRWvHY8cynl8KIAoQPSF1Ps8S6qIUUy_tJrtenUYCxXk-_BrTTLzjVTIvcv-i6knrY" 
              className="w-full h-full object-cover" 
              alt="House with new roof" 
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-12 lg:col-span-5 relative order-2 lg:order-1">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvQAEG1aukafRltgPSk9lgAf9Is8eaYTRcHcg0lCp08Fvk1KIzWMLJ9vQXhphLK3uGZuVt7lyYMhxYVh1sGcZM6qy7J4eczay3B3OEi2iGmNgo1LI4hmBFBGMaooZTqDN0qtTZqr6X2qkVZDDyNDbpcH6lEOjW1-dA4ZKdywem8O7rpeCs-nFYpnpxQ7uVYuhbP3QaDATfpn301TzIZCfjVN4lFUZqnD27jgD_oDcoCEW0dxB4TIBSuYJRSquKDQeY03WVwpId-wk" 
                   className="w-full h-full object-cover" 
                   alt="Roofer working" 
                />
              </div>
            </div>
            <div className="md:col-span-12 lg:col-span-7 order-1 lg:order-2">
              <h2 className="text-headline-lg mb-8">Our Story</h2>
              <div className="space-y-6 text-body-md text-on-surface-variant leading-relaxed">
                <p>
                  D' Roofing Group began with a simple mission: to provide the Naples community with roofing solutions that combine superior materials with uncompromising craftsmanship. Understanding the unique demands of the Florida climate, we established a company dedicated to building roofs that truly last.
                </p>
                <p>
                  What started as a small local crew has grown into a premier provider of residential and commercial roofing services. Despite our growth, our core philosophy remains unchanged. We treat every project as if it were our own home, ensuring meticulous attention to detail from the initial inspection to the final nail.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8">
                 <div className="p-6 bg-surface rounded-2xl border border-outline-variant/30">
                    <h3 className="text-headline-md text-xl mb-2 font-bold">Residential</h3>
                    <p className="text-caption">Protecting your family with durable shingle, tile, and metal roofs.</p>
                 </div>
                 <div className="p-6 bg-surface rounded-2xl border border-outline-variant/30">
                    <h3 className="text-headline-md text-xl mb-2 font-bold">Commercial</h3>
                    <p className="text-caption">Robust flat roofing designed to safeguard your business assets.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-headline-lg mb-4">Our Core Values</h2>
            <p className="text-body-md text-on-surface-variant italic">The principles that guide our hammers, our handshakes, and our business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck size={32} />, title: "Uncompromising Quality", desc: "We use only premium materials and proven techniques to ensure your roof withstands the harshest weather." },
              { icon: <Handshake size={32} />, title: "Integrity First", desc: "Honest assessments, transparent pricing, and standing firmly behind our warranties. No surprises." },
              { icon: <Tool size={32} />, title: "Expert Reliability", desc: "Showing up on time, communicating clearly, and completing projects efficiently and safely." }
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-outline-variant/20 hover:shadow-xl transition-all duration-300">
                <div className="text-secondary mb-6">{v.icon}</div>
                <h3 className="text-headline-md text-xl mb-4">{v.title}</h3>
                <p className="text-body-md text-on-surface-variant">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
           <div className="text-center mb-16">
            <h2 className="text-headline-lg mb-4">Our Leadership</h2>
            <p className="text-body-md text-on-surface-variant">The experts guiding our commitment to quality.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Michael Sterling", role: "Founder & Master Roofer", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbYFS-PR59Jq7Cz_GMLDLLTCsonxqRymrRHYkKfp8Bqi7ZaWeSMgh2Ejktwi4at3rNpVPhybOSOCzs7wO0RLy8rBnkl7OsjKWkCb-TR4dEE9xTos20VBz6AaLU_tnHLpNr7ECx5tBi3BL4JxXRRZaPdn_r08dgVBmcwepmeSBGYusRhLZ98Dg3e-36Z7iMgCkhGy4gD-_1TJmdn_gzvCe5XBhLCvtNtvEwFBq4iVoHFI8M5RflbyUGlkCplAlDa_E30Etv681uMhg" },
              { name: "Sarah Jenkins", role: "Director of Operations", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDC64_q_EBCCcwwvAulSUhC3WEl7GaCRZjT-m4Zsp4P_SCS4a4mQTP5S3FYDtm4T0sTxJ8HCPlHOHwNJJMJYXppZJVhxr4hKG1sACfarSJfh8iFyviJMuy6pa_TPmnMaFOImwTeFDOY_OH4FEMS2HB0YNzq4WHkLDZHOZXI1Ajm7L_uXcQ95xcVqjD8YCe92db5Nf_1R68Yp3juepcKm3jl-_SxlW99MS5Y8ur3uYLsYMXr2wNUZAnl2hBIvTPvxhMr3f1blcR_stY" },
              { name: "David Ross", role: "Head of Client Relations", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ27mvV1dzdV_2S8PTKVe-xTX1L0LV1w_Oa-V59ciWzj5R4dfxRvUM08ykituIUoN_OggCXH90u6YXKR45Xk8ftiT7GegdOxfne_ZAbDHfLzTw_3mVsAGYJA0B6C5_tQi3yYCUiOoZqrZwLa_O5VD9KX1pJ35Hs-tnOvFRDbgPwsqmaLtMl4dmlmu2oSc0otVS7ibFRr7swPItbe_zVMyX_k2X11EdfDUVkudhAC1WVtp4rPsCulmZ-R0yA924RTZW4mMEFADs7v4" }
            ].map((person, i) => (
              <div key={i} className="text-center group">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-surface shadow-md grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={person.img} className="w-full h-full object-cover" alt={person.name} />
                </div>
                <h3 className="text-headline-md text-xl font-bold">{person.name}</h3>
                <p className="text-secondary font-semibold mb-2">{person.role}</p>
                <p className="text-caption text-on-surface-variant">Dedicated to professional excellence in roofing.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
