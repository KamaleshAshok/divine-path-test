import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Users, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { toast } from "sonner";

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [volunteerData, setVolunteerData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    availability: "",
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all required fields");
      return;
    }
    toast.success("Message sent successfully!", {
      description: "We will respond within 24-48 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerData.name || !volunteerData.email || !volunteerData.phone) {
      toast.error("Please fill all required fields");
      return;
    }
    toast.success("Volunteer registration received!", {
      description: "Thank you for offering your seva. We will contact you soon.",
    });
    setVolunteerData({ name: "", email: "", phone: "", skills: "", availability: "" });
  };

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
              Connect With Us
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Contact & Seva Opportunities
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Reach out to us for inquiries, guidance, or to offer your seva 
              to Lord Ayyappa's mission.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
              >
                <motion.h2
                  variants={fadeInUp}
                  className="font-heading text-2xl font-semibold text-foreground mb-8"
                >
                  Get in Touch
                </motion.h2>

                <div className="space-y-6">
                  <motion.div
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Email</h3>
                      <a href="mailto:seva@thatvamasi.org" className="text-primary hover:underline">
                        seva@thatvamasi.org
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        We respond within 24-48 hours
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Phone</h3>
                      <a href="tel:+919876543210" className="text-primary hover:underline">
                        +91 98765 43210
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Available 9 AM - 5 PM IST
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        Thatvamasi – Ayyappa Seva Trust<br />
                        ShahpurPete, <br />
                        Gadag-Betagiri, Karnataka 582101
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Spiritual Head */}
                <motion.div
                  variants={fadeInUp}
                  className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-gold/5 rounded-xl border border-primary/10"
                >
                  <p className="text-sm text-muted-foreground mb-2">Under the guidance of</p>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Manjunath Guru Swami
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    For spiritual guidance and blessings, please visit the trust 
                    during morning or evening pooja times.
                  </p>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-8">
                  Send a Message
                </h2>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      required
                    />
                  </div>
                  <Button type="submit" variant="sacred" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
                Volunteer for Seva
              </h2>
              <p className="text-muted-foreground">
                Offer your skills and time to serve Lord Ayyappa's mission. 
                Every form of seva is valuable and blessed.
              </p>
            </motion.div>

            <motion.form
              variants={fadeInUp}
              onSubmit={handleVolunteerSubmit}
              className="bg-background rounded-xl p-8 border border-border space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={volunteerData.name}
                    onChange={(e) => setVolunteerData({ ...volunteerData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={volunteerData.email}
                    onChange={(e) => setVolunteerData({ ...volunteerData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={volunteerData.phone}
                    onChange={(e) => setVolunteerData({ ...volunteerData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Availability
                  </label>
                  <select
                    value={volunteerData.availability}
                    onChange={(e) => setVolunteerData({ ...volunteerData, availability: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select availability</option>
                    <option value="weekends">Weekends only</option>
                    <option value="weekdays">Weekdays only</option>
                    <option value="flexible">Flexible</option>
                    <option value="special-events">Special events only</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Skills / How you'd like to serve
                </label>
                <textarea
                  rows={3}
                  value={volunteerData.skills}
                  onChange={(e) => setVolunteerData({ ...volunteerData, skills: e.target.value })}
                  placeholder="E.g., Photography, cooking, teaching, organizing events..."
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <Button type="submit" variant="gold" size="lg" className="w-full">
                <Users className="w-4 h-4 mr-2" />
                Register as Volunteer
              </Button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
