import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Calendar, Clock, User, Stethoscope, Check, ArrowRight, ArrowLeft, CalendarDays, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const services = [
  { id: "primary", name: "Primary Care", duration: "30 min" },
  { id: "mental", name: "Mental Health", duration: "45 min" },
  { id: "womens", name: "Women's Health", duration: "30 min" },
  { id: "chronic", name: "Chronic Care", duration: "30 min" },
  { id: "urgent", name: "Urgent Care", duration: "20 min" },
];

const doctors = [
  { id: "dr1", name: "Dr. Sarah Johnson", specialty: "Primary Care" },
  { id: "dr2", name: "Dr. Michael Chen", specialty: "Mental Health" },
  { id: "dr3", name: "Dr. Emily Williams", specialty: "OB-GYN" },
  { id: "dr4", name: "Dr. James Rodriguez", specialty: "Cardiologist" },
];

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM",
  "11:30 AM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM"
];

const Booking = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState({
    service: "",
    doctor: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appointment Booked!",
      description: "You'll receive a confirmation email shortly.",
    });
    setStep(5);
  };

  const steps = [
    { num: 1, title: "Service", icon: Stethoscope },
    { num: 2, title: "Doctor", icon: User },
    { num: 3, title: "Date & Time", icon: CalendarDays },
    { num: 4, title: "Details", icon: Calendar },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 bg-hero-gradient relative overflow-hidden">
          <div className="floating-blob w-96 h-96 bg-primary/20 top-20 -right-48" />
          <div className="floating-blob w-80 h-80 bg-secondary/20 bottom-20 -left-40" />
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Book Your <span className="gradient-text">Appointment</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Schedule a consultation with our healthcare specialists in just a few steps.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Booking Steps */}
        <section className="py-8 bg-background border-b">
          <div className="container-custom">
            <div className="flex justify-center">
              <div className="flex items-center gap-4 md:gap-8">
                {steps.map((s, i) => (
                  <div key={s.num} className="flex items-center">
                    <div className="flex items-center gap-2">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        step >= s.num ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}>
                        {step > s.num ? <Check className="w-5 h-5" /> : <s.icon className="w-5 h-5" />}
                      </div>
                      <span className={`hidden md:block text-sm font-medium ${
                        step >= s.num ? "text-foreground" : "text-muted-foreground"
                      }`}>
                        {s.title}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className={`w-12 md:w-20 h-0.5 mx-2 ${
                        step > s.num ? "bg-primary" : "bg-muted"
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <h2 className="text-2xl font-bold mb-6">Select a Service</h2>
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        setBooking({ ...booking, service: service.id });
                        setStep(2);
                      }}
                      className={`w-full glass-card-hover rounded-xl p-4 flex items-center justify-between text-left ${
                        booking.service === service.id ? "ring-2 ring-primary" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                          <Stethoscope className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold">{service.name}</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {service.duration}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground" />
                    </button>
                  ))}
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <button onClick={() => setStep(1)} className="p-2 rounded-lg hover:bg-muted">
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <h2 className="text-2xl font-bold">Choose a Doctor</h2>
                  </div>
                  {doctors.map((doctor) => (
                    <button
                      key={doctor.id}
                      onClick={() => {
                        setBooking({ ...booking, doctor: doctor.id });
                        setStep(3);
                      }}
                      className={`w-full glass-card-hover rounded-xl p-4 flex items-center justify-between text-left ${
                        booking.doctor === doctor.id ? "ring-2 ring-primary" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                          {doctor.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <div className="font-semibold">{doctor.name}</div>
                          <div className="text-sm text-muted-foreground">{doctor.specialty}</div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground" />
                    </button>
                  ))}
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <button onClick={() => setStep(2)} className="p-2 rounded-lg hover:bg-muted">
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <h2 className="text-2xl font-bold">Select Date & Time</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Select Date</label>
                      <input
                        type="date"
                        value={booking.date}
                        onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Select Time</label>
                      <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setBooking({ ...booking, time })}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                              booking.time === time
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted hover:bg-accent"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <Button
                      variant="hero"
                      size="lg"
                      className="w-full"
                      onClick={() => setStep(4)}
                      disabled={!booking.date || !booking.time}
                    >
                      Continue
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <button onClick={() => setStep(3)} className="p-2 rounded-lg hover:bg-muted">
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <h2 className="text-2xl font-bold">Your Details</h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={booking.name}
                        onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={booking.email}
                        onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        required
                        value={booking.phone}
                        onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="+1 (000) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Notes (Optional)</label>
                      <textarea
                        rows={3}
                        value={booking.notes}
                        onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                        placeholder="Any symptoms or concerns..."
                      />
                    </div>
                    
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Confirm Booking
                      <Check className="w-5 h-5" />
                    </Button>
                  </form>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
                  <p className="text-muted-foreground mb-8">
                    We've sent a confirmation email with all the details.
                    You'll receive a reminder before your appointment.
                  </p>
                  <div className="glass-card rounded-xl p-6 max-w-sm mx-auto mb-8 text-left">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date:</span>
                        <span className="font-medium">{booking.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time:</span>
                        <span className="font-medium">{booking.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" asChild>
                      <a href="/">Return Home</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="https://wa.me/1000000000" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp Confirmation
                      </a>
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Booking;
