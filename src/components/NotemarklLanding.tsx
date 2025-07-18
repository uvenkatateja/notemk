import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import {
  Download,
  FileText,
  Moon,
  Monitor,
  Eye,
  FolderOpen,
  Zap,
  GitBranch,
  Star,
  MonitorSpeaker,
  Globe,
  CheckCircle,
  Laptop
} from "lucide-react";
import heroLaptop from "@/assets/hero-laptop.jpg";
const NotMarkLanding = () => {
  const [version, setVersion] = useState("1.0.5");

  useEffect(() => {
    // Set the version directly since we know the latest is 1.0.5
    setVersion("1.0.5");
  }, []);

  const fetchLatestVersion = async () => {
    try {
      const response = await fetch('https://api.github.com/repos/uvenkatateja/Notes/releases/latest');
      const data = await response.json();
      setVersion(data.tag_name.replace('v', ''));
    } catch (error) {
      console.error('Error fetching version:', error);
    }
  };

  const downloadLinks = {
    windows: `https://github.com/uvenkatateja/Notes/releases/download/v${version}/note-mark-${version}-setup.exe`,
    mac: `https://github.com/uvenkatateja/Notes/releases/download/v${version}/NoteMark-${version}.dmg`,
    macArm: `https://github.com/uvenkatateja/Notes/releases/download/v${version}/NoteMark-${version}-arm64.dmg`,
    linux: {
      appImage: `https://github.com/uvenkatateja/Notes/releases/download/v${version}/NoteMark-${version}.AppImage`,
      deb: `https://github.com/uvenkatateja/Notes/releases/download/v${version}/note-mark_${version}_amd64.deb`
    }
  };

  // State to track if download modal is open
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  
  const handleDownload = (url: string) => {
    // Show download modal with instructions
    setShowDownloadModal(true);
    
    // Automatically open the download URL in a new tab
    window.open(url, '_blank');
    
    // Hide modal after 8 seconds
    setTimeout(() => {
      setShowDownloadModal(false);
    }, 8000);
  };

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
      icon: Laptop,
      title: "Windows Optimized",
      description: "Built specifically for Windows with native performance and integration"
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Download Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card p-6 rounded-lg shadow-xl max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Your download is starting</h3>
            <p className="mb-4">
              The NoteMark installer is being downloaded from our secure GitHub repository.
            </p>
            <p className="mb-4">
              If your download doesn't start automatically, click the button below:
            </p>
            <div className="flex justify-between items-center">
              <a 
                href={downloadLinks.windows}
                className="text-primary hover:underline flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4 mr-2" />
                Direct download link
              </a>
              <Button 
                variant="outline" 
                onClick={() => setShowDownloadModal(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* New Release Banner */}
      <div className="bg-primary/10 py-3 px-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex items-center">
          <Download className="h-5 w-5 text-primary mr-2" />
          <span className="font-medium">New Release: v1.0.5 is now available!</span>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-primary/30 hover:bg-primary/10"
            onClick={() => handleDownload(downloadLinks.windows)}
          >
            Download for Windows
          </Button>
          {/* <a
            href="https://github.com/uvenkatateja/Notes/releases/tag/v1.0.5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            View Release Notes
          </a> */}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-accent/20">
        {/* Professional background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }} />
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-2 h-2 bg-primary/10 rounded-full"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-3 h-3 bg-primary/15 rounded-full"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-8">
              <motion.h1
                className="text-7xl lg:text-8xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
                  NoteMark
                </span>
              </motion.h1>

              <motion.p
                className="text-3xl lg:text-4xl text-muted-foreground font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Professional Markdown Editor
              </motion.p>

              <motion.p
                className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                The most elegant and powerful markdown editor for professionals.
                Experience seamless writing with instant preview and advanced features.
              </motion.p>
            </div>

            {/* Features highlight */}
            <motion.div
              className="grid grid-cols-2 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">Instant Preview</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Moon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">Dark Mode</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">File Management</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Laptop className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">Windows Native</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Laptop Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative lg:mt-0 mt-12"
          >
            <div className="relative">
              {/* Glow effect behind the image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 blur-3xl scale-110" />
              <div className="relative">
                <img
                  src={heroLaptop}
                  alt="NoteMark App Preview"
                  className="w-full h-auto rounded-2xl shadow-lg border border-border/50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent rounded-2xl" />
              </div>
              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-primary/10 rounded-full blur-sm"
                animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary/15 rounded-full blur-sm"
                animate={{ y: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
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
                Free, open-source, and optimized for Windows
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                variant="download"
                size="xl"
                className="animate-glow-pulse group px-10 py-6"
                onClick={() => handleDownload(downloadLinks.windows)}
              >
                <Laptop className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                Download for Windows
                <span className="ml-2 text-xs text-muted-foreground">.exe</span>
              </Button>
            </div>

            {/* Version and Download Stats */}
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <Badge variant="secondary" className="px-3 py-1">
                <GitBranch className="mr-1 h-3 w-3" />
                Latest Release: v{version}
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                <Star className="mr-1 h-3 w-3" />
                {/* <a
                  href={`https://github.com/uvenkatateja/Notes/releases/latest`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  View on GitHub
                </a> */}
              </Badge>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-sm text-muted-foreground">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">System Requirements</h4>
                <p>Windows 10+ (64-bit)</p>
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

            {/* Additional Info */}
            <div className="text-sm text-muted-foreground mt-6">
              <div className="flex justify-center gap-4 mt-2">
                {/* <a
                  href="https://github.com/uvenkatateja/Notes/releases"
                  className="hover:text-primary transition-colors"
                >
                  View all versions
                </a> */}
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