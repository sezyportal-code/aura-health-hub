import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Star, Calendar, Award, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Primary Care Physician",
    education: "Harvard Medical School",
    experience: "15+ years",
    rating: 4.9,
    reviews: 234,
    languages: ["English", "Spanish"],
    bio: "Dr. Johnson specializes in comprehensive primary care with a focus on preventive medicine and chronic disease management.",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Mental Health Specialist",
    education: "Stanford University",
    experience: "12+ years",
    rating: 4.8,
    reviews: 189,
    languages: ["English", "Mandarin"],
    bio: "Dr. Chen is a board-certified psychiatrist with expertise in anxiety disorders, depression, and cognitive behavioral therapy.",
  },
  {
    name: "Dr. Emily Williams",
    specialty: "OB-GYN",
    education: "Johns Hopkins University",
    experience: "18+ years",
    rating: 4.9,
    reviews: 312,
    languages: ["English", "French"],
    bio: "Dr. Williams provides comprehensive women's healthcare, from routine exams to high-risk pregnancy management.",
  },
  {
    name: "Dr. James Rodriguez",
    specialty: "Cardiologist",
    education: "Yale School of Medicine",
    experience: "10+ years",
    rating: 4.7,
    reviews: 156,
    languages: ["English", "Spanish", "Portuguese"],
    bio: "Dr. Rodriguez specializes in cardiovascular health, preventive cardiology, and heart disease management.",
  },
  {
    name: "Dr. Lisa Park",
    specialty: "Dermatologist",
    education: "Columbia University",
    experience: "14+ years",
    rating: 4.9,
    reviews: 278,
    languages: ["English", "Korean"],
    bio: "Dr. Park is an expert in medical and cosmetic dermatology, treating conditions from acne to skin cancer.",
  },
  {
    name: "Dr. David Thompson",
    specialty: "Pediatrician",
    education: "University of Pennsylvania",
    experience: "20+ years",
    rating: 4.8,
    reviews: 421,
    languages: ["English"],
    bio: "Dr. Thompson provides compassionate pediatric care with a focus on developmental health and family wellness.",
  },
];

const Doctors = () => {
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
                Our Specialists
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Meet Our <span className="gradient-text">Expert</span> Doctors
              </h1>
              <p className="text-lg text-muted-foreground">
                Board-certified physicians ready to provide you with the highest quality care.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctors.map((doctor, index) => (
                <motion.div
                  key={doctor.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-card-hover rounded-2xl overflow-hidden"
                >
                  {/* Avatar */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-mint to-lavender p-8 relative">
                    <div className="w-full h-full rounded-2xl bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-6xl font-bold text-foreground/60">
                        {doctor.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-bold text-sm">{doctor.rating}</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{doctor.specialty}</p>
                    
                    <p className="text-sm text-muted-foreground mb-4">{doctor.bio}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Award className="w-4 h-4 text-primary" />
                        {doctor.education}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        {doctor.experience} experience
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        {doctor.languages.join(", ")}
                      </div>
                    </div>
                    
                    <Button variant="hero" className="w-full" asChild>
                      <Link to="/booking">
                        <Calendar className="w-4 h-4" />
                        Book Appointment
                      </Link>
                    </Button>
                  </div>
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

export default Doctors;
