import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Cookies = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
              <p className="text-muted-foreground">Last updated: January 2024</p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <div className="glass-card rounded-2xl p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
                  <p className="text-muted-foreground">
                    Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, understanding how you use our platform, and improving our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Necessary Cookies</h3>
                      <p className="text-muted-foreground">
                        These cookies are essential for the website to function properly. They enable basic features like page navigation, secure areas access, and remembering your login status. These cannot be disabled.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Analytics Cookies</h3>
                      <p className="text-muted-foreground">
                        These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our platform and services.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Marketing Cookies</h3>
                      <p className="text-muted-foreground">
                        These cookies are used to track visitors across websites to display relevant advertisements. They may be set by us or by third-party advertising partners.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
                  <p className="text-muted-foreground">
                    You can manage your cookie preferences at any time through our cookie consent banner or by adjusting your browser settings. Note that disabling certain cookies may affect the functionality of our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
                  <p className="text-muted-foreground">
                    Some features of our website may use third-party cookies from services like Google Analytics. These third parties have their own privacy policies governing how they use and share your information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this Cookie Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about our use of cookies, please contact us at:<br />
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

export default Cookies;
