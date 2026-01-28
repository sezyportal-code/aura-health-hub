import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Brain, 
  Baby, 
  Stethoscope, 
  Pill, 
  Activity,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Stethoscope,
    title: "Primary Care",
    description: "Comprehensive health assessments, preventive care, and treatment for common conditions.",
    color: "bg-mint",
    iconColor: "text-mint-dark",
  },
  {
    icon: Brain,
    title: "Mental Health",
    description: "Therapy, counseling, and psychiatric services for anxiety, depression, and more.",
    color: "bg-lavender",
    iconColor: "text-lavender-dark",
  },
  {
    icon: Heart,
    title: "Women's Health",
    description: "Specialized care for reproductive health, pregnancy, menopause, and wellness.",
    color: "bg-soft-pink",
    iconColor: "text-destructive",
  },
  {
    icon: Baby,
    title: "Family Planning",
    description: "Fertility consultations, contraception guidance, and family planning support.",
    color: "bg-soft-blue",
    iconColor: "text-primary",
  },
  {
    icon: Pill,
    title: "Chronic Care",
    description: "Ongoing management for diabetes, hypertension, and other chronic conditions.",
    color: "bg-accent",
    iconColor: "text-primary",
  },
  {
    icon: Activity,
    title: "Urgent Care",
    description: "Quick access to care for non-emergency illnesses and minor injuries.",
    color: "bg-mint",
    iconColor: "text-mint-dark",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-primary font-medium text-sm mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Comprehensive Healthcare
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to="/services"
                className="block glass-card-hover rounded-2xl p-6 h-full group"
              >
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
