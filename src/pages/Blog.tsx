import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Clock, ArrowRight, Calendar, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "10 Tips for Better Mental Health in the Digital Age",
    excerpt: "Discover practical strategies to maintain your mental wellbeing while navigating the challenges of our connected world.",
    category: "Mental Health",
    readTime: "5 min read",
    date: "Jan 15, 2024",
    image: null,
  },
  {
    id: 2,
    title: "Understanding Telehealth: A Complete Guide",
    excerpt: "Everything you need to know about virtual healthcare appointments, from preparation to follow-up care.",
    category: "Telehealth",
    readTime: "8 min read",
    date: "Jan 12, 2024",
    image: null,
  },
  {
    id: 3,
    title: "Women's Health at Every Stage of Life",
    excerpt: "A comprehensive look at health considerations for women from adolescence through menopause and beyond.",
    category: "Women's Health",
    readTime: "10 min read",
    date: "Jan 10, 2024",
    image: null,
  },
  {
    id: 4,
    title: "Managing Chronic Conditions from Home",
    excerpt: "How telehealth is revolutionizing chronic disease management and empowering patients.",
    category: "Chronic Care",
    readTime: "6 min read",
    date: "Jan 8, 2024",
    image: null,
  },
  {
    id: 5,
    title: "The Importance of Preventive Healthcare",
    excerpt: "Why regular check-ups and screenings are essential for long-term health and wellbeing.",
    category: "Prevention",
    readTime: "4 min read",
    date: "Jan 5, 2024",
    image: null,
  },
  {
    id: 6,
    title: "Nutrition Tips for a Healthy Heart",
    excerpt: "Expert advice on dietary choices that support cardiovascular health and reduce disease risk.",
    category: "Nutrition",
    readTime: "7 min read",
    date: "Jan 3, 2024",
    image: null,
  },
];

const categories = ["All", "Mental Health", "Telehealth", "Women's Health", "Chronic Care", "Prevention", "Nutrition"];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
          <div className="floating-blob w-96 h-96 bg-primary/20 top-20 -right-48" />
          <div className="floating-blob w-80 h-80 bg-secondary/20 bottom-20 -left-40" />
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/80 text-primary font-medium text-sm mb-6">
                Blog & Resources
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Health <span className="gradient-text">Insights</span> & Tips
              </h1>
              <p className="text-lg text-muted-foreground">
                Expert articles, guides, and resources to help you on your health journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-background border-b">
          <div className="container-custom">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    cat === "All" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-card-hover rounded-2xl overflow-hidden group"
                >
                  {/* Image placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-mint to-lavender flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-foreground/30" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent text-primary">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                      <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
