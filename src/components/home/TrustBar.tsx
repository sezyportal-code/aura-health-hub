import { motion } from "framer-motion";
import { Shield, Award, Star, CheckCircle } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "HIPAA Compliant" },
  { icon: Award, label: "Board Certified Doctors" },
  { icon: Star, label: "4.9/5 Patient Rating" },
  { icon: CheckCircle, label: "Verified Reviews" },
];

export function TrustBar() {
  return (
    <section className="py-12 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
