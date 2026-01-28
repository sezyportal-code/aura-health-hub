import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-hero-gradient">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: January 2024</p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <div className="glass-card rounded-2xl p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing or using our telehealth services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
                  <p className="text-muted-foreground">
                    Your Clinic Name provides telehealth services including virtual consultations, medical advice, prescriptions, and related healthcare services through our platform. Our services are not intended for emergency medical situations.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. Eligibility</h2>
                  <p className="text-muted-foreground">
                    You must be at least 18 years old to use our services independently. Users under 18 may use our services with parental or guardian consent. You must provide accurate and complete information during registration.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Medical Disclaimer</h2>
                  <p className="text-muted-foreground">
                    Our telehealth services are not a substitute for in-person medical care in all situations. In case of emergency, call 911 or visit your nearest emergency room. Our providers will determine if your condition is appropriate for telehealth treatment.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. User Responsibilities</h2>
                  <p className="text-muted-foreground">
                    You agree to provide accurate health information, follow medical advice given by our providers, use the platform for lawful purposes only, and maintain the confidentiality of your account credentials.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Payment Terms</h2>
                  <p className="text-muted-foreground">
                    Fees for our services are outlined on our Pricing page. Payment is required at the time of service unless covered by insurance. We accept major credit cards and some insurance plans.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    To the maximum extent permitted by law, Your Clinic Name shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
                  <p className="text-muted-foreground">
                    For questions about these Terms of Service, please contact us at:<br />
                    Email: legal@yourclinic.com<br />
                    Phone: +1 (000) 000-0000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
