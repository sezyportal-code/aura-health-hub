import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  Heart,
  Brain,
  Baby,
  Stethoscope,
  Pill,
  Activity,
  Eye,
  Bone,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Stethoscope,
    title: "Primary Care",
    description: "Comprehensive health assessments, preventive care, and treatment for common conditions. Our primary care physicians are your first point of contact for all your healthcare needs.",
    features: ["Annual checkups", "Preventive screenings", "Vaccinations", "Minor illness treatment"],
    color: "from-primary to-primary/60",
  },
  {
    icon: Brain,
    title: "Mental Health",
    description: "Therapy, counseling, and psychiatric services for anxiety, depression, stress, and other mental health concerns. Connect with licensed therapists from the comfort of your home.",
    features: ["Individual therapy", "Couples counseling", "Psychiatric evaluation", "Medication management"],
    color: "from-secondary to-secondary/60",
  },
  {
    icon: Heart,
    title: "Women's Health",
    description: "Specialized care for reproductive health, pregnancy, menopause, and overall wellness. Our women's health experts provide personalized care for every stage of life.",
    features: ["Prenatal care", "Menopause management", "Reproductive health", "Hormone therapy"],
    color: "from-destructive/80 to-destructive/40",
  },
  {
    icon: Baby,
    title: "Family Planning",
    description: "Fertility consultations, contraception guidance, and comprehensive family planning support. Make informed decisions about your reproductive future.",
    features: ["Fertility counseling", "Contraception options", "Preconception planning", "Genetic counseling"],
    color: "from-primary to-secondary",
  },
  {
    icon: Pill,
    title: "Chronic Care Management",
    description: "Ongoing management for diabetes, hypertension, heart disease, and other chronic conditions. Regular monitoring and personalized treatment plans.",
    features: ["Diabetes management", "Hypertension control", "Heart health monitoring", "Lifestyle coaching"],
    color: "from-secondary to-primary",
  },
  {
    icon: Activity,
    title: "Urgent Care",
    description: "Quick access to care for non-emergency illnesses and minor injuries. Get the treatment you need without the long wait times of traditional urgent care.",
    features: ["Same-day appointments", "Minor injury treatment", "Common illness care", "Prescription refills"],
    color: "from-primary to-primary/60",
  },
  {
    icon: Eye,
    title: "Dermatology",
    description: "Expert care for skin conditions, acne, eczema, and other dermatological concerns. Visual consultations for accurate diagnosis and treatment.",
    features: ["Acne treatment", "Eczema management", "Skin cancer screening", "Anti-aging consultations"],
    color: "from-secondary to-secondary/60",
  },
  {
    icon: Bone,
    title: "Physical Therapy",
    description: "Virtual physical therapy sessions for rehabilitation, pain management, and improved mobility. Personalized exercise programs you can do at home.",
    features: ["Post-surgery rehab", "Pain management", "Exercise programs", "Mobility improvement"],
    color: "from-primary to-secondary",
  },
];

const Services = () => {
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
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Comprehensive <span className="gradient-text">Healthcare</span> Services
              </h1>
              <p className="text-lg text-muted-foreground">
                From primary care to specialized treatments, we offer a full range of telehealth services to meet your healthcare needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-card-hover rounded-2xl p-8"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" asChild>
                    <Link to="/booking">
                      Book Now
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

export default Services;
