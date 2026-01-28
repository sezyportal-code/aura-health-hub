import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CheckCircle, ArrowRight, Users, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Fertility & Family Building",
    description: "Comprehensive fertility support from preconception through pregnancy, including consultations, testing, and ongoing care.",
    features: ["Fertility assessments", "Treatment planning", "Emotional support", "Partner involvement", "IVF navigation"],
    duration: "Ongoing",
    participants: "2,500+ families",
    color: "from-soft-pink to-lavender",
  },
  {
    title: "Maternity Care Program",
    description: "Complete prenatal and postnatal care with personalized support throughout your pregnancy journey.",
    features: ["Weekly check-ins", "Nutrition guidance", "Birth planning", "Lactation support", "Postpartum care"],
    duration: "40+ weeks",
    participants: "5,000+ moms",
    color: "from-mint to-soft-blue",
  },
  {
    title: "Mental Wellness Program",
    description: "Structured mental health support combining therapy, coaching, and wellness practices for lasting wellbeing.",
    features: ["Individual therapy", "Group sessions", "Mindfulness training", "Stress management", "Progress tracking"],
    duration: "12 weeks",
    participants: "3,200+ members",
    color: "from-lavender to-secondary/60",
  },
  {
    title: "Chronic Care Management",
    description: "Long-term management program for diabetes, hypertension, and other chronic conditions with continuous monitoring.",
    features: ["Regular monitoring", "Medication management", "Lifestyle coaching", "Specialist access", "Emergency support"],
    duration: "Ongoing",
    participants: "4,100+ patients",
    color: "from-primary/60 to-mint",
  },
  {
    title: "Weight Management Program",
    description: "Evidence-based weight loss and maintenance program with medical supervision and behavioral support.",
    features: ["Medical evaluation", "Nutrition planning", "Exercise guidance", "Behavioral therapy", "Community support"],
    duration: "16 weeks",
    participants: "1,800+ members",
    color: "from-soft-blue to-primary/60",
  },
  {
    title: "Corporate Wellness",
    description: "Comprehensive employee health programs designed to improve workplace wellbeing and reduce healthcare costs.",
    features: ["Health screenings", "Mental health support", "Fitness challenges", "Nutrition workshops", "Analytics dashboard"],
    duration: "Annual",
    participants: "50+ companies",
    color: "from-secondary/60 to-lavender",
  },
];

const Programs = () => {
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
                Programs
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Specialized <span className="gradient-text">Care</span> Programs
              </h1>
              <p className="text-lg text-muted-foreground">
                Structured healthcare programs designed to address specific health needs with comprehensive, personalized support.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-card-hover rounded-2xl overflow-hidden"
                >
                  {/* Header */}
                  <div className={`h-3 bg-gradient-to-r ${program.color}`} />
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                    <p className="text-muted-foreground mb-6">{program.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-primary" />
                        {program.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-primary" />
                        {program.participants}
                      </div>
                    </div>
                    
                    <Button variant="outline" asChild>
                      <Link to="/booking">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
          <div className="container-custom relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Award className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Not Sure Which Program Is Right for You?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Schedule a free consultation with our care team to discuss your health goals and find the perfect program.
              </p>
              <Button variant="hero-secondary" size="xl" className="text-foreground" asChild>
                <Link to="/booking">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Programs;
