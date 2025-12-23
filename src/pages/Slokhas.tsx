import { motion } from "framer-motion";
import { BookOpen, Download, Volume2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const slokhas = [
  {
    id: "saranam",
    title: "Saranam Mantra",
    sanskrit: "स्वामिये शरणम् अय्यप्पा",
    transliteration: "Swamiye Saranam Ayyappa",
    meaning: "I surrender to Lord Ayyappa",
    description: "The most sacred mantra chanted by all Ayyappa devotees. This is the essence of the pilgrimage.",
  },
  {
    id: "harivarasanam",
    title: "Harivarasanam",
    sanskrit: "हरिवरासनं विश्वमोहनं हरिदधीश्वरं आराध्यपादुकम्",
    transliteration: "Harivarasanam Vishwamohanam Haridadeeshwaram Aradhyapadukam",
    meaning: "He who is seated on Hari (Vishnu), the enchanter of the universe, the lord of Haridasa, whose feet are worthy of worship",
    description: "The divine lullaby sung to Lord Ayyappa during Athazha Pooja. This beautiful song is sung every night at Sabarimala to put the Lord to rest.",
  },
  {
    id: "ayyappa-ashtothram",
    title: "Ayyappa Ashtothram",
    sanskrit: "ॐ महाशास्त्रे नमः",
    transliteration: "Om Maha Shastre Namah",
    meaning: "Salutations to the Great Shasta (Ayyappa)",
    description: "108 names of Lord Ayyappa, chanted during Archana for divine blessings.",
  },
  {
    id: "irumudi-prayer",
    title: "Irumudi Prayer",
    sanskrit: "इरुमुडि केट्टु स्वामियै स्मरण",
    transliteration: "Irumudi Kettu Swamiyai Smarana",
    meaning: "Carrying the sacred bundle while remembering the Lord",
    description: "The prayer recited while preparing and carrying the sacred Irumudi for Sabarimala pilgrimage.",
  },
];

const vrathaRules = [
  {
    title: "Beginning of Vratha",
    content: [
      "Start vratha on an auspicious day, typically 41 days before pilgrimage",
      "Wear the sacred mala (rudraksha or tulsi) after taking blessing from a Guru",
      "Observe strict discipline from day one",
    ],
  },
  {
    title: "Daily Observances",
    content: [
      "Wake up before sunrise (Brahma Muhurta)",
      "Take bath twice daily - morning and evening",
      "Wear only black, blue, or saffron colored clothes",
      "Go barefoot or wear simple footwear",
      "Sleep on the floor or a thin mattress",
    ],
  },
  {
    title: "Dietary Rules",
    content: [
      "Follow strict vegetarian diet - no onion, garlic, or tamasic foods",
      "Avoid alcohol, tobacco, and all intoxicants",
      "Eat only one or two meals a day",
      "Cook food yourself or eat prepared by other devotees",
      "Fast completely on auspicious days",
    ],
  },
  {
    title: "Behavioral Discipline",
    content: [
      "Address fellow devotees as 'Swami'",
      "Avoid anger, conflict, and negative emotions",
      "Practice celibacy (brahmacharya)",
      "Speak truth at all times",
      "Perform seva (selfless service)",
      "Chant 'Swamiye Saranam Ayyappa' regularly",
    ],
  },
  {
    title: "Daily Prayers",
    content: [
      "Morning: Suprabhatam and Ayyappa stotrams",
      "Evening: Deeparadhana (lamp worship)",
      "Night: Harivarasanam before sleep",
      "Continuous remembrance of Lord Ayyappa",
    ],
  },
];

const Slokhas = () => {
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
              Sacred Texts
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Slokhas, Vrathas & Guidelines
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Access authentic Ayyappa slokhas and comprehensive vratha guidelines 
              to deepen your spiritual practice.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Sacred Slokhas */}
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
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="font-heading text-3xl font-semibold text-foreground">
                Sacred Slokhas & Mantras
              </h2>
            </motion.div>

            <div className="space-y-6">
              {slokhas.map((slokha, index) => (
                <motion.div
                  key={slokha.id}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/20 transition-colors"
                >
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    {slokha.title}
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-lg text-foreground font-medium mb-1">
                        {slokha.sanskrit}
                      </p>
                      <p className="text-primary italic">
                        {slokha.transliteration}
                      </p>
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Meaning: </span>
                      {slokha.meaning}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {slokha.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vratha Guidelines */}
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
              <span className="text-4xl mb-4 block">🙏</span>
              <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
                Vratha Vidhi (Rules & Guidelines)
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The 41-day vratha is the sacred preparation for Sabarimala pilgrimage. 
                Follow these guidelines with devotion and discipline.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Accordion type="single" collapsible className="space-y-4">
                {vrathaRules.map((rule, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-background rounded-xl border border-border px-6"
                  >
                    <AccordionTrigger className="text-left font-heading text-lg hover:text-primary">
                      {rule.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pb-2">
                        {rule.content.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-br from-primary/5 to-gold/5 rounded-2xl p-8 md:p-12 border border-primary/10 text-center">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                A Note on Authenticity
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The slokhas and guidelines provided here are strictly traditional, 
                sourced from authentic scriptures and practices passed down through generations. 
                We have not diluted or invented any content. For personal guidance, 
                please consult your Guru or visit our trust.
              </p>
              <Button variant="sacred-outline" asChild>
                <a href="/contact">Contact for Guidance</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Slokhas;
