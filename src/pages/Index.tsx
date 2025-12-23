import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Calendar, BookOpen, Gift, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-temple.jpg";
import guruImage from "@/assets/guru-swamy-gadag.jpeg";
import poojaItemsImage from "@/assets/pooja-items.jpg";
import templeConstructionImage from "@/assets/temple-construction.jpg";

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

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Sacred temple with glowing diyas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            {/* Om Symbol */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block text-6xl md:text-8xl text-gold animate-gentle-glow font-heading">
                ॐ
              </span>
            </motion.div>

            {/* Trust Name */}
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-cream mb-4 tracking-wide"
            >
              Thatvamasi
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="text-xl md:text-2xl text-gold-light font-heading mb-6"
            >
              Ayyappa Seva Trust
            </motion.p>

            {/* Sacred Quote */}
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-xl text-cream/90 italic font-body mb-10"
            >
              "Swamiye Saranam Ayyappa"
            </motion.p>

            {/* Philosophy */}
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="text-base md:text-lg text-cream/80 max-w-2xl mx-auto mb-12 font-body leading-relaxed"
            >
              "Thatvamasi" — You are That. A sacred space where devotion meets service,
              connecting hearts with Lord Ayyappa Swamy through dharma, discipline, and devotion.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="gold" size="xl" asChild>
                <Link to="/donations" className="gap-3">
                  <Heart className="w-5 h-5" />
                  Support Temple Construction
                </Link>
              </Button>
              <Button variant="sacred-outline" size="xl" className="border-cream/50 text-cream hover:bg-cream/10 hover:text-cream" asChild>
                <Link to="/pooja-booking" className="gap-3">
                  <Sparkles className="w-5 h-5" />
                  Book Pooja Online
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-cream rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Guru Swami Message Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto"
          >
            {/* Image */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-gold/20 rounded-2xl blur-2xl" />
                <img
                  src={guruImage}
                  alt="Manjunath Guru Swami"
                  className="relative rounded-xl shadow-xl w-full max-w-md mx-auto object-cover aspect-[4/5]"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
                Spiritual Guidance
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
                Message from <br />
                <span className="text-primary">Manjunath Guru Swami</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Beloved devotees, the path of Lord Ayyappa is one of discipline, devotion, and 
                  selfless service. Through Thatvamasi, we seek to build not just a temple of stone, 
                  but a temple in every heart.
                </p>
                <p>
                  This sacred platform is your gateway to connect with the divine — whether through 
                  performing poojas, observing vrathas, or participating in temple construction. 
                  Every act of seva brings you closer to the truth: Thatvamasi — You are That.
                </p>
                <p className="font-medium text-foreground italic">
                  May Lord Ayyappa's grace illuminate your path.
                </p>
              </div>
              <Button variant="sacred-outline" size="lg" className="mt-8" asChild>
                <Link to="/about" className="gap-2">
                  Learn About Our Mission
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
            >
              Seva & Services
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground"
            >
              Your Path to Devotion
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {[
              {
                icon: Heart,
                title: "Temple Donations",
                description: "Support the sacred construction of our temple through your generous seva.",
                href: "/donations",
                image: templeConstructionImage,
              },
              {
                icon: Sparkles,
                title: "Book Pooja",
                description: "Perform authentic poojas with sankalpa and receive divine blessings.",
                href: "/pooja-booking",
                image: poojaItemsImage,
              },
              {
                icon: BookOpen,
                title: "Slokhas & Vrathas",
                description: "Access authentic mantras, vratha guidelines, and spiritual texts.",
                href: "/slokhas",
              },
              {
                icon: Calendar,
                title: "Sacred Calendar",
                description: "Plan your darshanam aligned with the Sabarimala spiritual calendar.",
                href: "/calendar",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={service.href}
                  className="group block h-full bg-background rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  {service.image ? (
                    <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                      <service.icon className="absolute bottom-3 left-3 w-8 h-8 text-gold" />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                  )}
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary font-medium text-sm">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Temple Construction CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={templeConstructionImage}
            alt="Temple construction"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/80 to-foreground/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-gold font-medium text-sm uppercase tracking-wider mb-4"
            >
              Temple Construction
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6"
            >
              Your Seva Becomes Part of the Divine
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-cream/80 text-lg leading-relaxed mb-8"
            >
              Join us in building a sacred abode for Lord Ayyappa Swamy. Every contribution, 
              big or small, is a brick in this divine endeavor. Your name will be etched 
              forever in this temple's legacy.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button variant="gold" size="xl" asChild>
                <Link to="/donations" className="gap-3">
                  <Gift className="w-5 h-5" />
                  Contribute to Temple Construction
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-6xl md:text-8xl text-gold/30 font-heading mb-8 block">ॐ</span>
            <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground italic leading-relaxed mb-8">
              "The path of Ayyappa is simple yet profound — 
              surrender in devotion, serve with humility, 
              and see the divine in all."
            </blockquote>
            <cite className="text-muted-foreground font-medium">
              — Manjunath Guru Swami
            </cite>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
