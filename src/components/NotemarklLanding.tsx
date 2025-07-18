import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Download, 
  FileText, 
  Moon, 
  Monitor, 
  Eye, 
  FolderOpen,
  Code,
  Zap,
  GitBranch,
  Star,
  Github,
  Apple,
  MonitorSpeaker,
  Smartphone
} from "lucide-react";
import heroLaptop from "@/assets/hero-laptop.jpg";
import appPreview from "@/assets/notemark-app-preview.jpg";

const NotMarkLanding = () => {
  const features = [
    {
      icon: FileText,
      title: "Clean Markdown Editor",
      description: "Distraction-free editing with syntax highlighting and live preview"
    },
    {
      icon: Moon,
      title: "Dark Mode Interface",
      description: "Beautiful dark theme designed for long coding sessions"
    },
    {
      icon: Monitor,
      title: "Cross-Platform",
      description: "Available for Windows, macOS, and Linux with native performance"
    },
    {
      icon: Eye,
      title: "Instant Preview",
      description: "Real-time markdown rendering with split-screen view"
    },
    {
      icon: FolderOpen,
      title: "File Management",
      description: "Organize your notes with built-in file explorer and search"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with minimal resource usage"
    }
  ];

  const codeExample = `# Welcome to NoteMark

## Features
- **Bold text** and *italic text*
- [Links](https://notemark.app)
- \`inline code\`

\`\`\`javascript
function hello() {
  console.log("Hello, NoteMark!");
}
\`\`\`

> Beautiful quotes and much more...`;

  return (
    <div className="min-h-screen bg-gradient-primary text-foreground dark">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Badge variant="secondary" className="w-fit">
                v2.1.0 • Latest Release
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent leading-tight">
                  NoteMark
                </h1>
                <div className="space-y-3">
                  <p className="text-2xl lg:text-3xl text-foreground/90 font-medium">
                    Your Modern Markdown Notes
                  </p>
                  <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
                    A beautiful, lightning-fast markdown editor with dark mode, 
                    live preview, and powerful file management. Built for developers and writers.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="hero" size="xl" className="group flex-1 sm:flex-none">
                    <MonitorSpeaker className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    Windows
                  </Button>
                  <Button variant="hero" size="xl" className="group flex-1 sm:flex-none">
                    <Apple className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    macOS
                  </Button>
                  <Button variant="hero" size="xl" className="group flex-1 sm:flex-none">
                    <Monitor className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    Linux
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card/30 backdrop-blur">
                    <MonitorSpeaker className="h-5 w-5 text-primary" />
                    <span className="font-medium">Windows 10+</span>
                    <span className="text-xs text-muted-foreground">64-bit</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card/30 backdrop-blur">
                    <Apple className="h-5 w-5 text-primary" />
                    <span className="font-medium">macOS 10.15+</span>
                    <span className="text-xs text-muted-foreground">Intel & Apple Silicon</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card/30 backdrop-blur">
                    <Monitor className="h-5 w-5 text-primary" />
                    <span className="font-medium">Ubuntu 18.04+</span>
                    <span className="text-xs text-muted-foreground">x64</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative lg:mt-0 mt-12"
            >
              <div className="relative">
                {/* Glow effect behind the image */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 blur-3xl scale-110 animate-glow-pulse" />
                <div className="relative animate-float">
                  <img 
                    src={heroLaptop} 
                    alt="NoteMark App Preview" 
                    className="w-full h-auto rounded-2xl shadow-elegant relative z-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent rounded-2xl z-20" />
                </div>
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-full blur-sm"
                  animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500/30 rounded-full blur-sm"
                  animate={{ y: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Everything you need for markdown
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for developers, writers, and anyone who loves clean, efficient note-taking
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-card/50 backdrop-blur border-border hover:bg-card/70 transition-all duration-300 hover:shadow-elegant group">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Write. Preview. Perfect.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See your markdown come to life with real-time preview and syntax highlighting
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <Card className="overflow-hidden bg-card/50 backdrop-blur border-border shadow-elegant">
              <div className="grid lg:grid-cols-2">
                {/* Editor */}
                <div className="p-6 bg-notemark-gray">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-4 text-sm text-muted-foreground font-mono">
                      document.md
                    </span>
                  </div>
                  <pre className="font-mono text-sm text-foreground/90 leading-relaxed overflow-x-auto">
                    <code>{codeExample}</code>
                  </pre>
                </div>

                {/* Preview */}
                <div className="p-6 bg-card">
                  <div className="flex items-center gap-2 mb-4">
                    <Eye className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Preview</span>
                  </div>
                  <div className="prose prose-invert max-w-none">
                    <h1>Welcome to NoteMark</h1>
                    <h2>Features</h2>
                    <ul>
                      <li><strong>Bold text</strong> and <em>italic text</em></li>
                      <li><a href="#" className="text-primary hover:underline">Links</a></li>
                      <li><code className="bg-muted px-1 py-0.5 rounded text-sm">inline code</code></li>
                    </ul>
                    <div className="bg-notemark-gray p-4 rounded-lg font-mono text-sm">
                      <span className="text-blue-400">function</span> <span className="text-yellow-400">hello</span>() {"{"}
                      <br />
                      &nbsp;&nbsp;<span className="text-foreground/70">console</span>.<span className="text-blue-400">log</span>(<span className="text-green-400">"Hello, NoteMark!"</span>);
                      <br />
                      {"}"}
                    </div>
                    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                      Beautiful quotes and much more...
                    </blockquote>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Download NoteMark Today
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Free, open-source, and available for all major platforms
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="download" size="xl" className="animate-glow-pulse group">
                <MonitorSpeaker className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Download for Windows
              </Button>
              <Button variant="download" size="xl" className="animate-glow-pulse group">
                <Apple className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Download for macOS
              </Button>
              <Button variant="download" size="xl" className="animate-glow-pulse group">
                <Monitor className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Download for Linux
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-sm text-muted-foreground">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">System Requirements</h4>
                <p>macOS 10.15+, Windows 10+, Ubuntu 18.04+</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">File Size</h4>
                <p>~50MB download, 150MB installed</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">License</h4>
                <p>MIT License, completely free</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">NoteMark</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Support
              </a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2024 NoteMark. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NotMarkLanding;