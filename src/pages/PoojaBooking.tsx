import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, User, Star, Check } from "lucide-react";
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

const poojaTypes = [
  {
    id: "abhishekam",
    title: "Abhishekam",
    description: "Sacred bathing ritual with milk, honey, and holy water.",
    price: 501,
    duration: "45 mins",
  },
  {
    id: "neyyabhishekam",
    title: "Neyyabhishekam",
    description: "Sacred ghee abhishekam for Lord Ayyappa.",
    price: 1001,
    duration: "1 hour",
    featured: true,
  },
  {
    id: "archana",
    title: "Archana",
    description: "Offering of flowers with 108/1008 names of the deity.",
    price: 251,
    duration: "30 mins",
  },
  {
    id: "vratha-pooja",
    title: "Vratha Pooja",
    description: "Special pooja for devotees observing Ayyappa Vratha.",
    price: 751,
    duration: "1 hour",
  },
  {
    id: "irumudi-pooja",
    title: "Irumudi Pooja",
    description: "Blessing of Irumudi before Sabarimala pilgrimage.",
    price: 501,
    duration: "45 mins",
  },
  {
    id: "special-pooja",
    title: "Special Occasion Pooja",
    description: "Customized pooja for birthdays, anniversaries, etc.",
    price: 1501,
    duration: "1.5 hours",
  },
];

const nakshatras = [
  "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra",
  "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni",
  "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha",
  "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha",
  "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
];

const Pooja = () => {
  const [selectedPooja, setSelectedPooja] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    nakshatra: "",
    date: "",
    occasion: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPooja) {
      toast.error("Please select a pooja type");
      return;
    }
    if (!formData.name || !formData.nakshatra || !formData.date) {
      toast.error("Please fill all required fields");
      return;
    }
    toast.success("Pooja booking received!", {
      description: "You will receive confirmation via WhatsApp/Email shortly.",
    });
  };

  const selectedPoojaDetails = poojaTypes.find(p => p.id === selectedPooja);

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
              Online Pooja Booking
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Perform Sacred Poojas Remotely
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Book authentic poojas performed by our priests with proper sankalpa. 
              Receive blessings wherever you are in the world.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pooja Selection */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-2xl font-semibold text-foreground mb-8 text-center"
            >
              Select Pooja Type
            </motion.h2>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
            >
              {poojaTypes.map((pooja) => (
                <motion.button
                  key={pooja.id}
                  variants={fadeInUp}
                  onClick={() => setSelectedPooja(pooja.id)}
                  className={`relative p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                    selectedPooja === pooja.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/30"
                  } ${pooja.featured ? "ring-2 ring-gold/30" : ""}`}
                >
                  {pooja.featured && (
                    <span className="absolute -top-3 right-4 bg-gold text-foreground text-xs font-medium px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {pooja.title}
                    </h3>
                    {selectedPooja === pooja.id && (
                      <Check className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {pooja.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">₹{pooja.price}</span>
                    <span className="text-sm text-muted-foreground">{pooja.duration}</span>
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 md:p-12 border border-border"
            >
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6 text-center">
                Sankalpa Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Devotee Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <Star className="w-4 h-4 inline mr-2" />
                      Nakshatra *
                    </label>
                    <select
                      value={formData.nakshatra}
                      onChange={(e) => setFormData({ ...formData, nakshatra: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                      required
                    >
                      <option value="">Select nakshatra</option>
                      {nakshatras.map((nakshatra) => (
                        <option key={nakshatra} value={nakshatra}>
                          {nakshatra}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <Sparkles className="w-4 h-4 inline mr-2" />
                      Occasion (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Birthday, Anniversary, etc."
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                {selectedPoojaDetails && (
                  <div className="bg-muted/50 rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <p className="font-medium text-foreground">{selectedPoojaDetails.title}</p>
                      <p className="text-sm text-muted-foreground">{selectedPoojaDetails.duration}</p>
                    </div>
                    <p className="text-xl font-bold text-primary">₹{selectedPoojaDetails.price}</p>
                  </div>
                )}

                <Button type="submit" variant="gold" size="xl" className="w-full">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Book Pooja
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
              What Happens After Booking?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { step: "1", title: "Confirmation", desc: "Receive booking confirmation via WhatsApp and Email." },
                { step: "2", title: "Sankalpa", desc: "Priest performs pooja with your name and nakshatra." },
                { step: "3", title: "Blessings", desc: "Receive prasadam and blessing video (optional)." },
              ].map((item) => (
                <div key={item.step} className="bg-background rounded-lg p-6 border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="font-bold text-primary">{item.step}</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Pooja;
