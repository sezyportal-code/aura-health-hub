import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    description: "Essential healthcare for individuals",
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      "2 virtual consultations/month",
      "24/7 chat support",
      "Digital prescriptions",
      "Medical records access",
      "Basic health assessments",
    ],
    popular: false,
  },
  {
    name: "Premium",
    description: "Comprehensive care for families",
    monthlyPrice: 79,
    yearlyPrice: 790,
    features: [
      "Unlimited virtual consultations",
      "Priority scheduling",
      "Specialist referrals",
      "Mental health support",
      "Family coverage (up to 4)",
      "Lab test ordering",
      "Health coaching",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for organizations",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Everything in Premium",
      "Dedicated account manager",
      "Custom integrations",
      "Employee wellness programs",
      "Analytics dashboard",
      "Bulk pricing discounts",
      "On-site health events",
    ],
    popular: false,
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
          <div className="floating-blob w-96 h-96 bg-primary/20 top-20 -right-48" />
          <div className="floating-blob w-80 h-80 bg-secondary/20 bottom-20 -left-40" />
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/80 text-primary font-medium text-sm mb-6">
                Pricing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Simple, <span className="gradient-text">Transparent</span> Pricing
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Choose the plan that best fits your healthcare needs. No hidden fees.
              </p>
              
              {/* Toggle */}
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full p-1">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    !isYearly ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    isYearly ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground"
                  }`}
                >
                  Yearly <span className="text-xs opacity-75">(Save 20%)</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`rounded-3xl p-8 relative ${
                    plan.popular
                      ? "bg-gradient-to-br from-primary to-secondary text-white shadow-glow scale-105"
                      : "glass-card"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm mb-6 ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    {plan.monthlyPrice ? (
                      <>
                        <span className="text-4xl font-bold">
                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className={`text-sm ${plan.popular ? "text-white/60" : "text-muted-foreground"}`}>
                          /{isYearly ? "year" : "month"}
                        </span>
                      </>
                    ) : (
                      <span className="text-3xl font-bold">Custom</span>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className={`w-5 h-5 shrink-0 ${plan.popular ? "text-white" : "text-primary"}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    variant={plan.popular ? "hero-secondary" : "hero"}
                    className={`w-full ${plan.popular ? "text-foreground" : ""}`}
                    asChild
                  >
                    <Link to="/booking">
                      {plan.monthlyPrice ? "Get Started" : "Contact Sales"}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Pricing;
