import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Primary Care Physician",
    rating: 4.9,
    reviews: 234,
    experience: "15+ years",
    image: null,
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Mental Health Specialist",
    rating: 4.8,
    reviews: 189,
    experience: "12+ years",
    image: null,
  },
  {
    name: "Dr. Emily Williams",
    specialty: "OB-GYN",
    rating: 4.9,
    reviews: 312,
    experience: "18+ years",
    image: null,
  },
  {
    name: "Dr. James Rodriguez",
    specialty: "Cardiologist",
    rating: 4.7,
    reviews: 156,
    experience: "10+ years",
    image: null,
  },
];

export function DoctorsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-primary font-medium text-sm mb-4">
            Meet Our Experts
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Top-Rated Specialists
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our board-certified physicians are here to provide you with the highest quality care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card-hover rounded-2xl overflow-hidden group"
            >
              {/* Avatar */}
              <div className="aspect-square bg-gradient-to-br from-mint to-lavender p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                <div className="w-full h-full rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-5xl font-bold text-foreground/60">
                    {doctor.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                
                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold text-sm">{doctor.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {doctor.reviews} reviews
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {doctor.specialty}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-accent px-2 py-1 rounded-full text-primary font-medium">
                    {doctor.experience}
                  </span>
                  <Button variant="ghost" size="sm" className="text-xs" asChild>
                    <Link to="/booking">
                      <Calendar className="w-3 h-3 mr-1" />
                      Book
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/doctors">
              View All Doctors
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
