import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, MapPin, Zap, ThumbsUp, Star, ChevronRight, House, Wrench, Search, Building2, AlertTriangle } from 'lucide-react';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center bg-surface-container-highest overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnLUr0kl9fSxUmeFLV2L6K9CCE7RuvSIpQzBrLvs_NjXJeI494XJxRYAF24ezdNUvDUxvJY2hfFw3yr9MAzxrs8SNXxjUDlrYkAITG2mK5lAjvBbXD_V6vp6dy_RLGNf1RjwMilr1uZwbd-jRPlwpOho9RaPGHJG2xE0v3r9kbB0D6kG21eUweQAbzNaNA_FYDM9ouHsEmjQ2Hetj9hfno9IF3A8483yxEKFIU4PMPc66yN6j0YNGmPgJk2o5iXlrAcZ4QPgsx5uo" 
            alt="Premium Coastal Roofing"
            className="w-full h-full object-cover opacity-90 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded border border-outline-variant/30 mb-8 animate-fade-up">
              <CheckCircle2 size={16} className="text-secondary" />
              <span className="text-caption font-semibold uppercase tracking-wider text-on-surface-variant">Trusted Naples Roofing Experts</span>
            </div>
            <h1 className="text-display mb-6 drop-shadow-sm">
              Premium Roofing Solutions in Naples
            </h1>
            <p className="text-body-lg text-on-surface-variant mb-10 max-w-xl">
              Delivering uncompromising quality and coastal reliability. We protect your home with structurally sound, high-end roofing systems built to withstand the Florida elements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-secondary text-white text-label-bold px-10 py-5 rounded-lg hover:bg-secondary-container transition-all shadow-lg active:scale-95"
              >
                Get Free Estimate
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center bg-white text-primary border border-outline-variant text-label-bold px-10 py-5 rounded-lg hover:bg-surface-container transition-all shadow-sm active:scale-95"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 bg-white border-b border-outline-variant/20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 text-primary shadow-sm">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-label-bold text-primary mb-2">Licensed & Insured</h3>
              <p className="text-caption text-on-surface-variant">Full protection guaranteed</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 text-primary shadow-sm">
                <MapPin size={28} />
              </div>
              <h3 className="text-label-bold text-primary mb-2">Local Experts</h3>
              <p className="text-caption text-on-surface-variant">Serving Naples</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 text-primary shadow-sm">
                <Zap size={28} />
              </div>
              <h3 className="text-label-bold text-primary mb-2">Fast Response</h3>
              <p className="text-caption text-on-surface-variant">Rapid service times</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 text-primary shadow-sm">
                <ThumbsUp size={28} />
              </div>
              <h3 className="text-label-bold text-primary mb-2">Quality Workmanship</h3>
              <p className="text-caption text-on-surface-variant">100% Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento */}
      <section className="py-24 bg-surface" id="services">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 animate-fade-up">
            <h2 className="text-headline-lg mb-4">Comprehensive Roofing Services</h2>
            <p className="text-body-md text-on-surface-variant italic">Expert solutions tailored for Florida's demanding climate, maintaining structural integrity and high-end aesthetic appeal.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <Link to="/services" className="md:col-span-4 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-outline-variant/20 flex flex-col sm:flex-row group">
              <div className="sm:w-1/2 h-64 sm:h-auto overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiM4BeWZ7N-01qLR3CPVmx1ckzhB-_wUFwy7BKuwKz33rJ4Y2JQHwvfIhKWKhatYWGoPEBpO-QDaOeNbOo6tNFQDj465X4te31Onc0U3nABc5VhGapjB6LicUrnkchTlVI_DMY1Gf8ABXypIhH3IYMfZaFffBpPKE1Atlo218piT2cCqxf160kWh_W32rD8IO11lpOhphQs0BvDIt9Q6HvyyoQcd192hCm2YVU9dv9GXiblD-pHk6HZKTJLYk_Xg0XYZYDB0ilHHo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Roof Replacement" />
              </div>
              <div className="sm:w-1/2 p-10 flex flex-col justify-center relative">
                <House size={32} className="text-secondary mb-6" />
                <h3 className="text-headline-md mb-4">Roof Replacement</h3>
                <p className="text-body-md text-on-surface-variant mb-8">Complete tear-offs and high-quality installations using premium materials designed for coastal durability.</p>
                <div className="inline-flex items-center gap-2 text-secondary font-bold group-hover:translate-x-2 transition-transform">
                  Explore Service <ArrowRight size={20} />
                </div>
              </div>
            </Link>
            
            <Link to="/services" className="md:col-span-2 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-outline-variant/20 group">
               <div className="h-56 overflow-hidden">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY4QD9CdpOUf2OHtxe1sHEDMdebO6T_a7LRLDvUX8AC9MjS1GO6lJZJCWyZVytbPwpk8sB0mBCGo1GZ-feL1shuJr-mYbYrs2mE9sZV6E9K4TjPE7Wr9qVMLK81lX3HBSWRyYMhhYv6xJOiKTVNnEhsng7E0n16LvdkNXumekhvEn_MtOD857wCi27e4NaGRMaeu6m3bAJgGg03JlJx28hdvxPo4UsQND-td9TA3iaqF_ub5zMmSEKmg-75qd_a_SO0gYX4Pm4PUY" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Roof Repair" />
               </div>
               <div className="p-8">
                <Wrench size={24} className="text-secondary mb-4" />
                <h3 className="text-headline-md text-xl mb-4">Roof Repair</h3>
                <p className="text-body-md text-on-surface-variant">Targeted fixes for leaks, storm damage, and wear to extend your roof's lifespan.</p>
               </div>
            </Link>

            <Link to="/services" className="md:col-span-2 bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-outline-variant/20 group">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-6">
                <Search size={24} />
              </div>
              <h3 className="text-headline-md text-xl mb-4">Inspections</h3>
              <p className="text-body-md text-on-surface-variant mb-6">Comprehensive evaluations to assess structural integrity and prevent future issues.</p>
              <ChevronRight size={24} className="text-secondary group-hover:translate-x-2 transition-transform" />
            </Link>

            <Link to="/services" className="md:col-span-2 bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-outline-variant/20 group">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-6">
                <Building2 size={24} />
              </div>
              <h3 className="text-headline-md text-xl mb-4">Commercial</h3>
              <p className="text-body-md text-on-surface-variant mb-6">Durable, scalable solutions for commercial properties prioritizing minimal disruption.</p>
              <ChevronRight size={24} className="text-secondary group-hover:translate-x-2 transition-transform" />
            </Link>

            <Link to="/contact" className="md:col-span-2 bg-surface-container-highest rounded-2xl p-8 shadow-sm hover:translate-y-[-4px] transition-all duration-500 border border-outline-variant/50 relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
               <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-secondary mb-6 shadow-sm">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-headline-md text-xl mb-4 text-primary">Emergency Response</h3>
              <p className="text-body-md text-on-surface-variant mb-6">Rapid response tarping and immediate mitigation for storm or unexpected damage.</p>
              <div className="text-secondary font-bold flex items-center gap-2">
                Call Now <ArrowRight size={18} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP5uHhMe4NO8NQGAn7_6jEbWdNll_M6RMFAudjKMcJ5YIhyt04icM8Azl2A7ubfV2pLO0cPJMIkQp9CY4P1oJ1uCEsopJ1ouhFhgb0-YrDh1n5uM_0CwBV_oVM5wBILR8Z79Df7eIvdsfqLO4WUtpMDGX01vhRFb-hgF8o7_PUwT1TUImecd5C8zIzuCgEFXev-VYU-UIlXw504b0wvQUUkw7cG3gJpaYBCk0fEIcFd2rRUIu4NwFWIwKxEa1FlMD92A1v3xXRwFg" 
                  alt="Quality Roofing House"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl z-0"></div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <span className="text-label-bold text-secondary uppercase tracking-[0.2em] mb-4 block">The Naples Choice</span>
              <h2 className="text-headline-lg text-primary mb-8 leading-tight">Why Choose D' Roofing Group?</h2>
              <p className="text-body-md text-on-surface-variant mb-10 leading-relaxed">
                We don't just build roofs; we engineer peace of mind. Our approach combines decades of local expertise with the industry's most durable materials, ensuring your investment stands strong against the Florida climate.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Local Expertise", desc: "Deep understanding of Naples building codes and specific weather challenges." },
                  { title: "Transparent Pricing", desc: "Detailed, honest quotes with no hidden fees or surprise upcharges." },
                  { title: "Premium Materials", desc: "Partnered with top-tier manufacturers for structurally superior systems." },
                  { title: "Absolute Reliability", desc: "Punctual teams, clean job sites, and commitment to schedules." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 20 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-label-bold text-primary text-base font-bold">{item.title}</h4>
                      <p className="text-caption text-on-surface-variant mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
           <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-headline-lg text-primary mb-4">Client Testimonials</h2>
            <p className="text-body-md text-on-surface-variant italic">Hear from our satisfied neighbors in Naples.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                text: "replaced our old tile roof and the experience was exceptional. The team was professional, the job site was kept incredibly clean, and the final result is beautiful. Highly recommend their transparent pricing.", 
                author: "John D.", 
                location: "Delray Beach, FL" 
              },
              { 
                text: "We had a major leak after a storm. They responded incredibly fast, mitigated the damage immediately, and provided a permanent repair quickly. Real lifesavers with top-notch workmanship.", 
                author: "Sarah M.", 
                location: "Boynton Beach, FL" 
              },
              { 
                text: "From the first inspection to the final walkthrough, their communication was flawless. It's rare to find a contractor this reliable and detail-oriented. The new roof has completely transformed our home's curb appeal.", 
                author: "Robert T.", 
                location: "Boca Raton, FL" 
              }
            ].map((test, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-outline-variant/20 flex flex-col">
                <div className="flex text-secondary mb-6 gap-1">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-body-md text-on-surface-variant italic mb-8 flex-grow leading-relaxed">"{test.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center font-bold text-primary">
                    {test.author.split(' ')[0][0]}
                  </div>
                  <div>
                    <p className="text-label-bold text-primary font-bold">{test.author}</p>
                    <p className="text-caption text-on-surface-variant">{test.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-container relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-[800px] mx-auto px-4 text-center relative z-10">
          <h2 className="text-headline-lg text-white mb-8">Need Professional Roofing Help?</h2>
          <p className="text-body-lg text-on-primary-container/80 mb-12">
            Don't wait for a small leak to become a major structural issue. Secure your home with Naples's most trusted roofing experts today.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center bg-secondary text-white font-display text-xl px-12 py-5 rounded-xl hover:bg-secondary-container transition-all shadow-xl active:scale-95"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </section>
    </div>
  );
}
