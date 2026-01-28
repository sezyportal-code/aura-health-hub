import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Target, Heart, Users, Award, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "We put patients first in everything we do, ensuring personalized and compassionate healthcare.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in medical care, technology, and patient experience.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "We believe quality healthcare should be accessible to everyone, everywhere.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We continuously innovate to improve healthcare delivery and patient outcomes.",
  },
];

const milestones = [
  { year: "2018", title: "Founded", description: "Started with a vision to make healthcare accessible." },
  { year: "2019", title: "1,000 Patients", description: "Reached our first thousand patients milestone." },
  { year: "2020", title: "Telehealth Launch", description: "Expanded services to full virtual care platform." },
  { year: "2021", title: "50,000 Patients", description: "Grew to serve 50,000 patients nationwide." },
  { year: "2023", title: "24/7 Care", description: "Launched round-the-clock healthcare services." },
  { year: "2024", title: "Award Winning", description: "Recognized as top telehealth provider." },
];

const About = () => {
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
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Transforming <span className="gradient-text">Healthcare</span> Together
              </h1>
              <p className="text-lg text-muted-foreground">
                We're on a mission to make quality healthcare accessible, affordable, and convenient for everyone.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Your Clinic Name, we believe that everyone deserves access to high-quality healthcare, 
                  regardless of location, schedule, or circumstances. Our telehealth platform bridges the 
                  gap between patients and providers, making it easier than ever to get the care you need.
                </p>
                <ul className="space-y-3">
                  {["Accessible healthcare for all", "Board-certified specialists", "Cutting-edge technology", "Patient privacy & security"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-3xl p-8 aspect-square flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-7xl font-bold gradient-text mb-4">50K+</div>
                  <div className="text-xl text-muted-foreground">Patients Served</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card-hover rounded-2xl p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
                
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center gap-8 mb-8 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex-1 hidden md:block" />
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary z-10" />
                    <div className="flex-1 ml-12 md:ml-0 glass-card rounded-xl p-6">
                      <div className="text-primary font-bold mb-1">{milestone.year}</div>
                      <h3 className="font-bold text-lg mb-1">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
