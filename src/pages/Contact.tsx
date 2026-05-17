import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Send, ShieldCheck, Award, Zap, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { db, auth } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const submission = {
      fullName: formData.get('fullName') as string,
      phoneNumber: formData.get('phoneNumber') as string,
      email: formData.get('email') as string,
      service: formData.get('service') as string,
      details: formData.get('details') as string || "",
      source: window.location.hostname, // Distinguishes which website sent the form
      createdAt: serverTimestamp(),
    };

    const path = 'contacts';
    try {
      await addDoc(collection(db, path), submission);
      setSubmitted(true);
    } catch (err) {
      try {
        handleFirestoreError(err, OperationType.WRITE, path);
      } catch (finalErr) {
        setError("There was an issue processing your request. Please try again or call us directly.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <h1 className="text-display mb-6">Get Your Free Roofing Estimate</h1>
              <p className="text-body-lg text-on-surface-variant mb-12">
                Protecting Naples homes with uncompromised quality. Fill out the form or call us directly for immediate assistance with repairs, replacements, or inspections.
              </p>
            </motion.div>

            <div className="space-y-6 mb-12">
              <div className="bg-white border border-outline-variant/30 p-8 rounded-2xl shadow-sm flex items-center gap-6 hover:border-secondary/50 transition-all group">
                <div className="w-14 h-14 rounded-full bg-secondary-container/10 flex items-center justify-center text-secondary">
                  <Phone size={28} />
                </div>
                <div>
                  <span className="text-caption font-bold uppercase tracking-widest text-on-surface-variant mb-1 block">Direct Line</span>
                  <a href="tel:2392567788" className="text-headline-md text-2xl hover:text-secondary transition-colors">(239) 256-7788</a>
                </div>
              </div>

              <div className="bg-white border border-outline-variant/30 p-8 rounded-2xl shadow-sm flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center text-primary">
                  <MapPin size={28} />
                </div>
                <div>
                  <span className="text-caption font-bold uppercase tracking-widest text-on-surface-variant mb-1 block">Office Location</span>
                  <p className="text-body-md font-semibold">323 Arpt Rd S<br />Naples, FL 34104</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-outline-variant/20">
              <h4 className="text-label-bold text-on-surface-variant uppercase tracking-[0.2em] mb-6">Our Guarantee</h4>
              <div className="flex flex-wrap gap-3">
                 <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg border border-outline-variant/30 text-caption font-bold">
                    <ShieldCheck size={16} className="text-secondary" /> GAF Certified
                 </div>
                 <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg border border-outline-variant/30 text-caption font-bold">
                    <Award size={16} className="text-secondary" /> Licensed & Insured
                 </div>
                 <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg border border-outline-variant/30 text-caption font-bold">
                    <Zap size={16} className="text-secondary" /> Local Expertise
                 </div>
              </div>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-[32px] shadow-2xl border border-outline-variant/20 relative">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail size={40} className="text-secondary" />
                  </div>
                  <h2 className="text-headline-lg mb-4">Message Received!</h2>
                  <p className="text-body-md text-on-surface-variant mb-8">
                    Thank you for reaching out. One of our master roofers will contact you within 24 hours to schedule your free estimate.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-secondary font-bold flex items-center gap-2 mx-auto"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-headline-md mb-8 border-b border-outline-variant/10 pb-6">Request Service Details</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-error-container/20 text-error p-4 rounded-xl text-caption border border-error/20">
                        {error}
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-label-bold">Full Name *</label>
                        <input name="fullName" required className="w-full bg-surface border border-outline-variant rounded-xl p-4 focus:border-secondary outline-none transition-all shadow-sm" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-label-bold">Phone Number *</label>
                        <input name="phoneNumber" required type="tel" className="w-full bg-surface border border-outline-variant rounded-xl p-4 focus:border-secondary outline-none transition-all shadow-sm" placeholder="(555) 123-4567" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-label-bold">Email Address *</label>
                      <input name="email" required type="email" className="w-full bg-surface border border-outline-variant rounded-xl p-4 focus:border-secondary outline-none transition-all shadow-sm" placeholder="john@example.com" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-label-bold">Service Needed *</label>
                      <select name="service" required className="w-full bg-surface border border-outline-variant rounded-xl p-4 focus:border-secondary outline-none transition-all shadow-sm appearance-none">
                        <option value="">Select a service...</option>
                        <option value="Free Roof Inspection">Free Roof Inspection</option>
                        <option value="Emergency Storm Repair">Emergency Storm Repair</option>
                        <option value="Residential Replacement">Residential Replacement</option>
                        <option value="Commercial Maintenance">Commercial Maintenance</option>
                        <option value="Leak Detection & Repair">Leak Detection & Repair</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-label-bold">Project Details</label>
                      <textarea name="details" className="w-full bg-surface border border-outline-variant rounded-xl p-4 focus:border-secondary outline-none transition-all shadow-sm h-32 resize-none" placeholder="Briefly describe your roof condition or project needs..."></textarea>
                    </div>

                    <button 
                      disabled={loading}
                      className="w-full bg-secondary text-white font-bold py-5 rounded-xl shadow-lg hover:bg-secondary-container transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>Processing... <Loader2 className="animate-spin" size={20} /></>
                      ) : (
                        <>Submit Request <Send size={20} /></>
                      )}
                    </button>
                    
                    <p className="text-center text-caption text-on-surface-variant px-12">
                      We respect your privacy. Your information is protected and used strictly for your project consultation.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
