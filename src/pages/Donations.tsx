import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Building, Utensils, Star, Check } from "lucide-react";
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

const donationTypes = [
  {
    id: "general",
    icon: Heart,
    title: "General Seva",
    description: "Support daily Sannidhi operations and devotee services.",
  },
  {
    id: "temple",
    icon: Building,
    title: "Sannidhi Construction",
    description: "Contribute to building Lord Ayyappa's sacred abode.",
    featured: true,
  },
  {
    id: "annadanam",
    icon: Utensils,
    title: "Annadanam",
    description: "Sponsor free meals for devotees and the needy.",
  },
  {
    id: "special",
    icon: Star,
    title: "Special Occasions",
    description: "Donate for festivals, celebrations, and special poojas.",
  },
];

const donationAmounts = [1001, 2501, 5001, 10001, 21001, 51001];

const Donations = () => {
  const [selectedType, setSelectedType] = useState("temple");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  const handleDonate = () => {
    const amount = selectedAmount || (customAmount ? parseInt(customAmount) : 0);
    if (amount < 100) {
      toast.error("Minimum donation amount is ₹100");
      return;
    }
    toast.success("Redirecting to secure payment...", {
      description: "Thank you for your generous seva!",
    });
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
              Temple Donations
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Your Seva Becomes Part of the Divine
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Every contribution, big or small, is a sacred offering. Your generosity 
              helps build Lord Ayyappa's temple and serves thousands of devotees.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Donation Types */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mb-12"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-heading text-2xl font-semibold text-foreground mb-6 text-center"
              >
                Choose Your Seva
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="grid md:grid-cols-2 gap-4"
              >
                {donationTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`relative p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                      selectedType === type.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/30"
                    } ${type.featured ? "ring-2 ring-gold/30" : ""}`}
                  >
                    {type.featured && (
                      <span className="absolute -top-3 right-4 bg-gold text-foreground text-xs font-medium px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    )}
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        selectedType === type.id ? "bg-primary" : "bg-primary/10"
                      }`}>
                        <type.icon className={`w-6 h-6 ${
                          selectedType === type.id ? "text-primary-foreground" : "text-primary"
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                          {type.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {type.description}
                        </p>
                      </div>
                      {selectedType === type.id && (
                        <Check className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </button>
                ))}
              </motion.div>
            </motion.div>

            {/* Amount Selection */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mb-12"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-heading text-2xl font-semibold text-foreground mb-6 text-center"
              >
                Select Amount
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6"
              >
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                    className={`p-4 rounded-xl border-2 font-semibold text-lg transition-all duration-300 ${
                      selectedAmount === amount
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-foreground hover:border-primary/30"
                    }`}
                  >
                    ₹{amount.toLocaleString()}
                  </button>
                ))}
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Or enter custom amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                    ₹
                  </span>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="w-full pl-10 pr-4 py-4 rounded-xl border-2 border-border bg-background text-foreground text-lg focus:outline-none focus:border-primary transition-colors"
                    min="100"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Donate Button */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center"
            >
              <Button variant="gold" size="xl" onClick={handleDonate} className="min-w-[300px]">
                <Heart className="w-5 h-5 mr-2" />
                Donate ₹{(selectedAmount || parseInt(customAmount) || 0).toLocaleString()}
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Secure payment powered by trusted gateways
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Temple Progress */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl font-semibold text-foreground mb-8"
            >
              Temple Construction Progress
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-background rounded-xl p-8 border border-border"
            >
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-semibold text-primary">35% Complete</span>
                </div>
                <div className="h-4 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[35%] bg-gradient-to-r from-primary to-gold rounded-full" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-foreground">₹1.2 Cr</p>
                  <p className="text-sm text-muted-foreground">Raised</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">2,847</p>
                  <p className="text-sm text-muted-foreground">Devotees</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">₹3.5 Cr</p>
                  <p className="text-sm text-muted-foreground">Goal</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blessing Message */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/5 to-gold/5 rounded-2xl p-8 md:p-12 border border-primary/10"
          >
            <span className="text-5xl mb-6 block">🙏</span>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Every Seva is Sacred
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Your donation is not just a financial contribution — it is an offering of love 
              and devotion to Lord Ayyappa Swamy. May your generosity bring divine blessings 
              to you and your family. Each donor receives a personalized blessing certificate 
              and regular updates on Sannidhi construction.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Donations;
