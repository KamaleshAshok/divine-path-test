import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Bell, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const importantDates = [
  {
    date: "November 17, 2024",
    event: "Mandala Kalam Begins",
    description: "Start of the 41-day Mandala season at Sabarimala",
    type: "major",
  },
  {
    date: "December 27, 2024",
    event: "Mandala Pooja",
    description: "Conclusion of Mandala Kalam with special ceremonies",
    type: "major",
  },
  {
    date: "December 30, 2024",
    event: "Makaravilakku Season Opens",
    description: "Temple opens for Makaravilakku festival",
    type: "festival",
  },
  {
    date: "January 14, 2025",
    event: "Makara Jyothi",
    description: "The divine light appears on Ponnambalamedu",
    type: "major",
  },
  {
    date: "January 20, 2025",
    event: "Makaravilakku Ends",
    description: "Conclusion of the festival season",
    type: "festival",
  },
  {
    date: "Monthly",
    event: "First Saturday Pooja",
    description: "Special Ayyappa pooja at our trust",
    type: "regular",
  },
  {
    date: "Every Day",
    event: "Deeparadhana",
    description: "Evening lamp worship at 6:30 PM",
    type: "regular",
  },
];

const pilgrimageGuide = [
  {
    step: 1,
    title: "Mala Dharana",
    description: "Receive the sacred mala from a Guru and begin your 41-day vratha.",
  },
  {
    step: 2,
    title: "Vratha Period",
    description: "Observe strict discipline - diet, behavior, and daily prayers.",
  },
  {
    step: 3,
    title: "Irumudi Preparation",
    description: "Prepare the sacred bundle with coconut filled with ghee, rice, and offerings.",
  },
  {
    step: 4,
    title: "Journey",
    description: "Travel to Sabarimala via Pamba, trek through the sacred 18 steps.",
  },
  {
    step: 5,
    title: "Darshanam",
    description: "Have the divine darshan of Lord Ayyappa at the sanctum.",
  },
  {
    step: 6,
    title: "Mala Removal",
    description: "After returning, remove the mala on an auspicious day.",
  },
];

const SacredCalendar = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
            >
              Sacred Calendar
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Important Dates & Pilgrimage Guide
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Plan your spiritual journey aligned with the Sabarimala calendar 
              and important festival dates.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <CalendarIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="font-heading text-3xl font-semibold text-foreground">
                2024-25 Sacred Calendar
              </h2>
            </motion.div>

            <div className="space-y-4">
              {importantDates.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.05 }}
                  className={`flex items-start gap-4 p-6 rounded-xl border ${
                    item.type === "major"
                      ? "bg-primary/5 border-primary/20"
                      : item.type === "festival"
                      ? "bg-gold/5 border-gold/20"
                      : "bg-card border-border"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    item.type === "major"
                      ? "bg-primary/20"
                      : item.type === "festival"
                      ? "bg-gold/20"
                      : "bg-muted"
                  }`}>
                    {item.type === "major" ? (
                      <Star className="w-5 h-5 text-primary" />
                    ) : item.type === "festival" ? (
                      <Bell className="w-5 h-5 text-gold" />
                    ) : (
                      <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className={`text-sm font-medium ${
                        item.type === "major"
                          ? "text-primary"
                          : item.type === "festival"
                          ? "text-gold"
                          : "text-muted-foreground"
                      }`}>
                        {item.date}
                      </span>
                      {item.type === "major" && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                          Major Event
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                      {item.event}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pilgrimage Guide */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
                Sabarimala Pilgrimage Guide
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A step-by-step guide to the sacred Sabarimala pilgrimage. 
                This is purely guidance — we make no false promises, only truth.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
              
              <div className="space-y-8">
                {pilgrimageGuide.map((item, index) => (
                  <motion.div
                    key={item.step}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1 bg-background rounded-xl p-6 border border-border">
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-muted/50 rounded-2xl p-8 md:p-12 border border-border">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Important Note
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The dates and information provided are for guidance only. 
                Please verify official dates from the Travancore Devaswom Board 
                before planning your pilgrimage. Temple timings and access may 
                change based on various factors. We provide truthful guidance 
                without any false promises.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SacredCalendar;
