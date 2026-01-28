import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amanda K.",
    role: "Patient",
    rating: 5,
    text: "The convenience of virtual consultations has been life-changing. I was able to get the care I needed without leaving my home. The doctors are attentive and professional.",
    location: "New York, NY",
  },
  {
    id: 2,
    name: "Robert M.",
    role: "Patient",
    rating: 5,
    text: "I've been managing my chronic condition through this platform for over a year now. The continuous support and follow-up care have significantly improved my quality of life.",
    location: "Los Angeles, CA",
  },
  {
    id: 3,
    name: "Jennifer L.",
    role: "Patient",
    rating: 5,
    text: "As a busy mom, finding time for healthcare was always challenging. This service made it so easy to consult with specialists during my lunch break. Highly recommend!",
    location: "Chicago, IL",
  },
  {
    id: 4,
    name: "David S.",
    role: "Patient",
    rating: 5,
    text: "The mental health support I received was exceptional. The therapist was understanding and provided practical strategies that have helped me tremendously.",
    location: "Houston, TX",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-gradient-to-br from-mint/30 via-lavender/20 to-soft-blue/30 relative overflow-hidden">
      {/* Background blobs */}
      <div className="floating-blob w-64 h-64 bg-primary/10 top-20 left-10" />
      <div className="floating-blob w-48 h-48 bg-secondary/10 bottom-20 right-20" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/80 text-primary font-medium text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our Patients Say
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-3xl p-8 md:p-12"
              >
                <Quote className="w-12 h-12 text-primary/20 mb-6" />
                
                <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                  "{testimonials[current].text}"
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[current].name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-lg">
                        {testimonials[current].name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[current].location}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center hover:bg-accent transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === current
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center hover:bg-accent transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
