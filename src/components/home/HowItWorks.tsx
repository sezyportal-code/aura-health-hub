import { motion } from "framer-motion";
import { Calendar, Video, FileText, Heart } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Book an Appointment",
    description: "Choose your preferred specialist and select a convenient time slot that fits your schedule.",
    color: "from-primary to-primary/60",
  },
  {
    icon: Video,
    title: "Virtual Consultation",
    description: "Connect with your doctor through secure video call from anywhere, anytime.",
    color: "from-secondary to-secondary/60",
  },
  {
    icon: FileText,
    title: "Get Your Diagnosis",
    description: "Receive detailed medical advice, prescriptions, and treatment plans digitally.",
    color: "from-primary to-secondary",
  },
  {
    icon: Heart,
    title: "Follow-Up Care",
    description: "Stay connected with ongoing support, reminders, and easy follow-up consultations.",
    color: "from-secondary to-primary",
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/50 to-transparent rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-primary font-medium text-sm mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Your Path to Better Health
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting quality healthcare has never been easier. Follow these simple steps to start your wellness journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="glass-card-hover rounded-2xl p-6 h-full">
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
