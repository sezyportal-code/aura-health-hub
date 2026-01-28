import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer: "Booking an appointment is simple! Click on the 'Book Appointment' button, select your preferred service and doctor, choose an available time slot, and confirm your booking. You'll receive a confirmation email with all the details.",
  },
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of telehealth services including Primary Care, Mental Health, Women's Health, Family Planning, Chronic Care Management, and Urgent Care. Visit our Services page to learn more about each offering.",
  },
  {
    question: "Is my information secure?",
    answer: "Absolutely. We are fully HIPAA compliant and use 256-bit encryption to protect all your personal and medical information. Your privacy and security are our top priorities.",
  },
  {
    question: "How do virtual consultations work?",
    answer: "After booking, you'll receive a link to join your video consultation at the scheduled time. Simply click the link from any device with a camera and microphone, and you'll be connected with your healthcare provider.",
  },
  {
    question: "Can I get prescriptions through telehealth?",
    answer: "Yes, our licensed physicians can prescribe medications when medically appropriate. Prescriptions are sent directly to your preferred pharmacy, and you can pick them up or have them delivered.",
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer: "You can cancel or reschedule your appointment up to 24 hours before your scheduled time through your patient portal or by contacting our support team. We understand that schedules can change!",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-primary font-medium text-sm mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our telehealth services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
