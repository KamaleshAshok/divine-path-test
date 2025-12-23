import { motion } from "framer-motion";
import { Heart, Shield, BookOpen, Users } from "lucide-react";
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

const values = [
  {
    icon: Shield,
    title: "Dharma",
    description: "Upholding righteousness and moral order in all our actions and services.",
  },
  {
    icon: Heart,
    title: "Bhakti",
    description: "Pure devotion and unconditional love for Lord Ayyappa Swamy.",
  },
  {
    icon: Users,
    title: "Seva",
    description: "Selfless service to devotees and the community without expectation.",
  },
  {
    icon: BookOpen,
    title: "Discipline",
    description: "Following the sacred traditions and practices with dedication.",
  },
];

const About = () => {
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
              About Us
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Thatvamasi — You Are That
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              A sacred trust dedicated to the worship and service of Lord Ayyappa Swamy,
              guided by the spiritual wisdom of Manjunath Guru Swami.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-8 text-center"
            >
              Our Sacred Origin
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="prose prose-lg max-w-none text-muted-foreground space-y-6"
            >
              <p>
                Thatvamasi – Ayyappa Seva Trust was established with a singular vision: 
                to create a spiritual haven where devotees can experience the profound 
                teachings of Lord Ayyappa Swamy and the transformative power of seva.
              </p>
              <p>
                The name "Thatvamasi" comes from the ancient Mahavakya (great saying) 
                meaning "You are That" — a reminder that the divine essence we seek 
                externally already resides within each of us. This philosophy guides 
                every aspect of our trust's work.
              </p>
              <p>
                Under the spiritual guidance of Manjunath Guru Swami, we have embarked 
                on the sacred mission of constructing a temple dedicated to Lord Ayyappa, 
                while simultaneously serving the spiritual needs of devotees through 
                authentic poojas, vratha guidance, and pilgrimage support.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Spiritual Head */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4"
            >
              Spiritual Leadership
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-8"
            >
              Manjunath Guru Swami
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="bg-background rounded-xl p-8 md:p-12 border border-border"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-gold flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl text-primary-foreground font-heading">🙏</span>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Manjunath Guru Swami is the spiritual head and guiding light of Thatvamasi 
                – Ayyappa Seva Trust. With decades of devotion to Lord Ayyappa and deep 
                knowledge of Sanatana Dharma, Guru Swami leads the trust in its sacred 
                mission of building the temple and serving devotees. His teachings 
                emphasize the unity of all beings and the importance of seva in one's 
                spiritual journey.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-background">
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
              Our Foundation
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl font-semibold text-foreground"
            >
              Core Values
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Transparency Statement */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-background rounded-xl p-8 md:p-12 border border-primary/20"
            >
              <span className="text-4xl mb-4 block">🙏</span>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Our Commitment to Transparency
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Thatvamasi – Ayyappa Seva Trust operates as a non-profit organization, 
                driven purely by seva (selfless service). Every donation is used 
                exclusively for temple construction, pooja services, and devotee welfare. 
                We maintain complete transparency in our operations and are accountable 
                to our devotee community.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
