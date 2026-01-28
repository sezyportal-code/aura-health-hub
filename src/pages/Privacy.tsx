import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Privacy = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: January 2024</p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <div className="glass-card rounded-2xl p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                  <p className="text-muted-foreground">
                    We collect information you provide directly to us, including personal information such as your name, email address, phone number, and health information when you use our services. We also automatically collect certain information about your device and how you interact with our platform.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                  <p className="text-muted-foreground">
                    We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions. Your health information is used solely to provide healthcare services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. HIPAA Compliance</h2>
                  <p className="text-muted-foreground">
                    As a healthcare provider, we are committed to protecting your protected health information (PHI) in accordance with the Health Insurance Portability and Accountability Act (HIPAA). We implement appropriate safeguards to ensure the confidentiality, integrity, and availability of your health information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Information Sharing</h2>
                  <p className="text-muted-foreground">
                    We do not sell your personal information. We may share your information with healthcare providers involved in your care, with your consent, or as required by law. We may also share aggregated or de-identified information that cannot reasonably be used to identify you.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                  <p className="text-muted-foreground">
                    We use industry-standard encryption and security measures to protect your information. All data is encrypted in transit and at rest using 256-bit encryption. We regularly audit our systems and maintain strict access controls.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
                  <p className="text-muted-foreground">
                    You have the right to access, correct, or delete your personal information. You may also request a copy of your health records or restrict certain uses of your information. Contact us at privacy@yourclinic.com to exercise these rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy, please contact us at:<br />
                    Email: privacy@yourclinic.com<br />
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

export default Privacy;
