import { motion } from 'motion/react';
import { ExternalLink, Image as ImageIcon } from 'lucide-react';

const projects = [
  {
    title: "Oceanfront Spanish Tile Restoration",
    category: "Residential Estate",
    desc: "Complete removal and replacement utilizing premium hurricane-rated barrel tiles, maintaining the historic aesthetic while upgrading structural integrity.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3gQchw7M5ft-XmKy-SyZshwpVr9yDi0wSROLlIr6FptocEBELf6ZQFyVyJ0S49LKHt809o8BraNAAlOa0IOtlDeoRxLd_iu4RnoUoqUqW3xRNHluAMREuRUYI177T1Q58eNiCTMbLilMoPCgUS6-FYiAbpUSG4q0Nia3jdmGyY7hpLpiOYWuUrETomqLHhrFmdCHSNQplziBotMGea2kI-tbbMAyUIVQtMTH1ujpgTokO6A1eXrQBqqckHWtFfGEqICuN3XEQHOc",
    featured: true
  },
  {
    title: "Commercial TPO System",
    category: "Corporate Park",
    desc: "A wide, sweeping drone perspective of a large-scale commercial flat roof installation highlighting seamless white TPO membrane.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADBQ4e9lYJ6u10a2ZwRRXZmCskQUgSHwI9CmyWJIhswDrsXbhyn4ikydPPb5lhEz7QtJ1rT1Ir9CjALLusT1-rKPpYM8OOC49iVpy8jGC2iBfOpaytJOtLosiRNT95zth6M5TxkjbRXzIiyV7-ucfVCetsnyX_ECu87UiHzGT2-Q-U_nI9kSU9ccI-KiBBtLWHzW7tVmPPAEYdKSL7rMroKQ3L0VArlmG-_wGX5ynNJ7shibaW0B0oc_pe3YdR5h3BkmHpovgbQTs",
    featured: false
  },
  {
    title: "Modern Coastal Metal Upgrade",
    category: "Modern Residential",
    desc: "Sleek standing seam metal roof installed on a contemporary coastal home with sharp clean lines.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUDh2ECf84476URCp0JNxunRxokwjmug1JXCVw-2dZC5vl7W_9CiUv5PPfxN7png4XztoN6uacYt4HJW8ZFjQ_VFb8IueDodUpAEbyPkwYJEWkV05rA_ymOJJy0mF1_OZTvlpWWtSXzIkqpiZQ6R2Jd-wy-hbi17XvwFB-idf6V-knIexj3f64tGrsc_yaEx18bfaqPhCojFaUo4Vn7HpbESIPTl9SZLiOA3ep-8K2ydc4eqWVfkQepZ_G1MO8JKU8hSzJinzeF0I",
    featured: false
  },
  {
    title: "Mediterranean Profile Tile",
    category: "Custom Home",
    desc: "Heavy-duty concrete tile replacement combining classic Florida aesthetics with modern technology.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFUB0-GpdqmLWx4P7mOTOXC7JCMsiS6VofnGSTXAPtmAhNZIqpbZ6-knGZwm5NyhR78G2k2yzy7yoXirFPZScXFw4pvt5CPC3H-jWj5y_5W4ZExbDGafDRSyMDIhVzBIdrZcSbbrxbh6SCPwdmuz0s4tJWAIAEUcX98ZoemupPrY-llngbSdhy41OVU_hUz6aFNv4gOIt5_V7tYA0Arw0fi7MmKgd3TSpB3Dg69GLTewX4hSE3cWHADEUf8NdCky9Rztwvv3kzakk",
    featured: false
  }
];

export default function Gallery() {
  return (
    <div className="pt-24 min-h-screen bg-surface">
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-2xl mx-auto">
            <h1 className="text-display mb-6">Project Showcase</h1>
            <p className="text-body-lg text-on-surface-variant font-medium">Explore our portfolio of premium roofing installations across Delray Beach and surrounding South Florida coastal communities.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.div 
                key={i}
                className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-outline-variant/30 flex flex-col ${p.featured ? 'lg:col-span-2' : ''}`}
              >
                <div className={`relative overflow-hidden ${p.featured ? 'aspect-[21/9]' : 'aspect-video'}`}>
                  <img src={p.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={p.title} />
                  <div className="absolute top-6 left-6 z-20"><span className="bg-white/95 text-secondary text-caption font-bold px-3 py-1 rounded-full uppercase tracking-widest">{p.category}</span></div>
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="text-headline-md text-primary mb-4">{p.title}</h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
