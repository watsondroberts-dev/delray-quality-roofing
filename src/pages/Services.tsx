import { motion } from 'motion/react';
import { LayoutPanelTop, Wrench, Search, Building2, ShieldAlert, Thermometer, Construction, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'residential',
    title: 'Residential Roofing',
    desc: 'Complete residential roofing systems designed for longevity and curb appeal. From high-grade architectural shingles to durable metal standing seam profiles, we protect your home against harsh coastal weather elements.',
    longDesc: 'Our residential services are the cornerstone of our business. We understand that your home is your most valuable asset. We offer a wide range of materials and styles to match your architectural vision while ensuring your roof meets the most stringent storm protection standards. Our teams are trained in meticulous installation techniques for both steep and low-slope residential structures.',
    icon: <Construction className="w-8 h-8" />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGt8IcjPoX2H_LzZoLOmW8XePlr6N82UEBAtspoGOzIQRLybuLHYlPYNDoaOjB0FS2i43XGWSinB3hLqp3sBqtb6eELdfwHo_ZwkPXYqC2odEtM-BF4FdDfcfkReQnZ0BI4VTx8qEk6bHzGgEPgDUeYItPPUFOdA0DiHtUDvu3IJ3bnY12lQXwdvtJLXO8VXK-VnOvHxwZobKoc6wpwOOIt7CS1jgIrSsKx6DSJQVR4bF7Z-Zv_aY3e6hGE2UJ6bNh_c-wmpt9Wy8",
    color: 'bg-primary-container'
  },
  {
    id: 'commercial',
    title: 'Commercial Roofing',
    desc: 'High-performance flat and low-slope roofing solutions including TPO, EPDM, and modified bitumen for business properties.',
    longDesc: 'Commercial roofing requires a different level of technical expertise. We specialize in TPO, PVC, and EPDM roofing systems designed for industrial and commercial buildings. Our solutions focus on thermal efficiency, leak-proof sealing, and minimal disruption to your daily operations. We also provide comprehensive commercial management plans to keep your facility dry and operational.',
    icon: <Building2 className="w-8 h-8" />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADBQ4e9lYJ6u10a2ZwRRXZmCskQUgSHwI9CmyWJIhswDrsXbhyn4ikydPPb5lhEz7QtJ1rT1Ir9CjALLusT1-rKPpYM8OOC49iVpy8jGC2iBfOpaytJOtLosiRNT95zth6M5TxkjbRXzIiyV7-ucfVCetsnyX_ECu87UiHzGT2-Q-U_nI9kSU9ccI-KiBBtLWHzW7tVmPPAEYdKSL7rMroKQ3L0VArlmG-_wGX5ynNJ7shibaW0B0oc_pe3YdR5h3BkmHpovgbQTs",
    color: 'bg-tertiary-container'
  },
  {
    id: 'repair',
    title: 'Precision Repairs',
    desc: 'Prompt, precise repair services for leaks, damaged shingles, and compromised flashing to prevent further structural damage.',
    longDesc: 'Not every issue requires a new roof. Our maintenance specialists are masters at identifying the root cause of leaks and systemic failures. We handle everything from tile matched repairs to flashing restoration. Our goal is to extend the life of your current roof through strategic, high-quality interventions.',
    icon: <Wrench className="w-8 h-8" />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClpPCPlDAU9fIn1_ILLxE-zhoC_a9TyAD4s-45SfEDlQfRk2WNt10P-eYi-g5PCZoh9XNcWRDttmejB70UF_cX7Aha7xeapxltSAKGs60Yx4xKWEkZ-kMoX8pZm_rf63hsiJMg9q61pHFLCesFvEQM7lxl2JtW91sqo9BnHo7vgabviyRh3wsN1OzTB2YEHfTQ-graCi7N1tgiP4-Iu_EcBzOzO3mLNdWXudUH2gZHFUnUnDX0lBXlGvAXLPj8A3sIfrjE1e86nOk",
    color: 'bg-secondary'
  },
  {
    id: 'storm',
    title: 'Storm Damage Mitigation',
    desc: 'Rapid-response mitigation and structural repair following severe weather events. We expertly handle wind damage, hail impacts, and emergency tarping.',
    longDesc: 'Florida hurricanes and tropical storms command respect. When disaster strikes, our emergency response team is ready. We provide immediate tarping to prevent interior damage, followed by a detailed assessment and structural repair plan. We also provide documented inspections for insurance claims, ensuring you receive the settlement you deserve.',
    icon: <ShieldAlert className="w-8 h-8" />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUE5QKxJh7qcsZAdr8i2DmLLi2gPv63akfW4LQRw_QrLPBfeeMPjRTKuo9u76DhvvUk-C9Y910ATGf_xUtzP0a_37PASUEHS_-WopR9d_hZxd8NgSGCYSIcW5oAI-43QUKocdQr00hcApLJK2iavan6i-4BYogGTH_Iq1k31Kj09kqh9sc2Qcsjf2OxolnFFsef9k-TcRtAXy2HfAV1ZFdwsGM9cL1oPxYmdEZBdx6wSr-Dy3dk4lDqL_8_3GiX88cohCMCEfcy70",
    color: 'bg-secondary-container'
  }
];

export default function Services() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="py-24 bg-surface-container-low relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-surface-container-highest to-transparent opacity-50 -z-10"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-display mb-6">Expert Roofing Services</h1>
            <p className="text-body-lg text-on-surface-variant italic">
              Delivering premium, durable, and structurally sound roofing solutions tailored for the demanding coastal climate of Naples.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Listing */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 space-y-24">
          {services.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl relative group">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className={`w-16 h-16 rounded-2xl ${service.color} text-white flex items-center justify-center mb-8 shadow-lg`}>
                  {service.icon}
                </div>
                <h2 className="text-headline-lg text-primary mb-6">{service.title}</h2>
                <div className="space-y-6">
                  <p className="text-body-md text-primary font-bold">{service.desc}</p>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">{service.longDesc}</p>
                </div>
                <Link 
                  to="/contact" 
                  className="mt-10 inline-flex items-center gap-3 text-secondary font-display text-xl font-bold hover:gap-5 transition-all group"
                >
                  Request Consultation <ArrowRight className="text-secondary" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
