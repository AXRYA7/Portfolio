import { useState, useEffect } from "react";
import svgPaths from "./imports/svg-84sept7ldt";
import imgPortrait from "figma:asset/b2b60b79756a4be6158c0125873df7d36cb29cf0.png";
import { Linkedin, Github, Instagram, Dribbble } from "lucide-react";
import { ContactForm } from "./components/ContactForm";
import { MarqueeBanner } from "./components/MarqueeBanner";

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  url: string;
}

interface Service {
  name: string;
}

export default function App() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if device is touch-enabled
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();
  }, []);

  useEffect(() => {
    if (isTouchDevice) return; // Skip cursor tracking on touch devices
    
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isTouchDevice]);

  useEffect(() => {
    // Create SVG favicon
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <rect width="200" height="200" fill="#000000"/>
        <text x="100" y="120" font-family="Arial, sans-serif" font-size="60" font-weight="bold" fill="#ffffff" text-anchor="middle">/A\\</text>
      </svg>
    `;
    
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    
    // Remove existing favicon if any
    const existingFavicon = document.querySelector('link[rel="icon"]');
    if (existingFavicon) {
      existingFavicon.remove();
    }
    
    // Add new favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/svg+xml';
    link.href = url;
    document.head.appendChild(link);
    
    return () => {
      URL.revokeObjectURL(url);
    };
  }, []);

  const socialLinks: SocialLink[] = [
    { icon: <Linkedin className="size-8" />, label: "LinkedIn", url: "https://www.linkedin.com/in/aarya-bharadwaj-2852072b3/" },
    { icon: <Github className="size-8" />, label: "GitHub", url: "https://github.com/AXRYA7" },
    { icon: <Instagram className="size-8" />, label: "Instagram", url: "https://www.instagram.com/wrk.aarya/" },
    { icon: <Dribbble className="size-8" />, label: "Dribbble", url: "https://dribbble.com/aarya-bharadwaj-p" },
  ];

  const services: Service[] = [
    { name: "UI UX" },
    { name: "Framer" },
    { name: "React" },
    { name: "Figma" },
    { name: "Motion Design" },
    { name: "Full Stack Web Development" },
    { name: "Photoshop" },
    { name: "Adobe XD" },
  ];

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  return (
    <div className={`min-h-screen bg-black text-white p-4 md:p-8 relative overflow-hidden ${!isTouchDevice ? 'cursor-none' : ''}`}>
      {/* Custom Black Hole Cursor - Only on non-touch devices */}
      {!isTouchDevice && (
        <div
          className="fixed pointer-events-none z-[9999] mix-blend-screen"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Outer spinning ring */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 animate-spin-slow">
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-purple-500/60 to-transparent rounded-full blur-sm"></div>
          </div>
          
          {/* Middle ring */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 animate-spin-reverse">
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-purple-400/70 to-transparent rounded-full blur-md"></div>
          </div>
          
          {/* Inner core */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 animate-pulse-slow">
            <div className="absolute inset-0 bg-gradient-radial from-purple-500/90 via-purple-600/70 to-transparent rounded-full"></div>
          </div>
          
          {/* Center dot */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2">
            <div className="absolute inset-0 bg-purple-300 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
          </div>
        </div>
      )}

      {/* Animated Purple Blackhole Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] animate-spin-slow">
          <div className="absolute inset-0 bg-gradient-radial from-purple-600/60 via-purple-500/30 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] animate-spin-reverse">
          <div className="absolute inset-0 bg-gradient-radial from-violet-600/50 via-fuchsia-500/25 to-transparent rounded-full blur-2xl"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] animate-pulse-slow">
          <div className="absolute inset-0 bg-gradient-radial from-purple-400/70 via-purple-700/40 to-transparent rounded-full blur-xl"></div>
        </div>
      </div>

      <div className="max-w-[1026px] mx-auto space-y-6 relative z-10">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Intro Card */}
          <div
            className="relative bg-[rgba(24,24,27,0.5)] border border-[#27272a] rounded-2xl p-12 overflow-hidden transition-all duration-300 hover:bg-[rgba(24,24,27,0.7)] flex-shrink-0"
            onMouseEnter={() => setHoveredCard("intro")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h1 className="font-['Bebas_Neue',sans-serif] text-[85px] leading-[75px] mb-4">
              Hey, I'm Aarya
            </h1>
            <p className="text-[#99a1af] text-xl">Freelance UI UX Designer</p>
          </div>

          {/* Portrait Card */}
          <div className="relative bg-[rgba(24,24,27,0.5)] border border-[#27272a] rounded-2xl overflow-hidden h-[290px] transition-all duration-300 hover:bg-[rgba(24,24,27,0.7)] flex-shrink-0">
            <img
              src={imgPortrait}
              alt="Aarya"
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[305px] w-auto object-cover"
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-[rgba(24,24,27,0.5)] border border-[#27272a] rounded-2xl aspect-square flex items-center justify-center transition-all duration-300 hover:bg-[rgba(24,24,27,0.7)] hover:border-[#3f3f46] hover:scale-105 group"
              onMouseEnter={() => setHoveredCard(social.label)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {social.icon}
              </div>
            </a>
          ))}
        </div>

        {/* Marquee Banner */}
        <MarqueeBanner />

        {/* Recent Works & Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Recent Works */}
          <div className="relative bg-[rgba(24,24,27,0.5)] border border-[#27272a] rounded-2xl p-12 min-h-[507px] overflow-hidden transition-all duration-300 hover:bg-[rgba(24,24,27,0.7)]">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-white text-2xl">Recent Works</h2>
              <svg className="size-6" fill="none" viewBox="0 0 24 24">
                <path
                  d="M7 7H17V17"
                  stroke="#99A1AF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 17L17 7"
                  stroke="#99A1AF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Coming Soon with Clouds */}
            <div className="relative flex flex-col items-center justify-center h-[256px]">
              {/* Cloud decorations - scattered around center */}
              <div className="absolute top-[30px] left-1/2 -translate-x-1/2 translate-x-[100px] opacity-30 animate-float">
                <svg className="w-[100px] h-[50px]" fill="none" viewBox="0 0 65 35">
                  <path
                    d={svgPaths.p5e33400}
                    fill="white"
                  />
                </svg>
              </div>
              <div className="absolute top-[120px] left-1/2 -translate-x-1/2 translate-x-[-110px] opacity-30 animate-float-delay-1">
                <svg className="w-[100px] h-[50px]" fill="none" viewBox="0 0 65 35">
                  <path d={svgPaths.p5e33400} fill="white" />
                </svg>
              </div>
              <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 translate-x-[30px] opacity-30 animate-float-delay-2">
                <svg className="w-[100px] h-[50px]" fill="none" viewBox="0 0 65 35">
                  <path d={svgPaths.p5e33400} fill="white" />
                </svg>
              </div>
              <div className="absolute top-[60px] left-1/2 -translate-x-1/2 translate-x-[-50px] opacity-25 animate-float-delay-1">
                <svg className="w-[80px] h-[40px]" fill="none" viewBox="0 0 65 35">
                  <path d={svgPaths.p5e33400} fill="white" />
                </svg>
              </div>
              <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 translate-x-[130px] opacity-25 animate-float">
                <svg className="w-[90px] h-[45px]" fill="none" viewBox="0 0 65 35">
                  <path d={svgPaths.p5e33400} fill="white" />
                </svg>
              </div>

              <h3 className="text-4xl tracking-[1.8px] text-center mb-12 font-['Bebas_Neue',sans-serif]">COMING SOON</h3>
            </div>
          </div>

          {/* Services */}
          <div className="relative bg-[rgba(24,24,27,0.5)] border border-[#27272a] rounded-2xl p-12 min-h-[507px] transition-all duration-300 hover:bg-[rgba(24,24,27,0.7)]">
            <h2 className="text-white text-2xl mb-12">Services</h2>
            <div className="flex flex-wrap gap-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-[rgba(39,39,42,0.8)] border border-[rgba(63,63,70,0.5)] rounded-full px-6 py-3 shadow-lg transition-all duration-300 hover:bg-[rgba(39,39,42,1)] hover:border-[rgba(63,63,70,0.8)] hover:scale-105 cursor-default flex-shrink-0"
                >
                  <span className="text-white text-lg whitespace-nowrap">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-[375px_1fr] gap-4">
          {/* Tools I Use */}
          <div className="relative bg-[rgba(24,24,27,0.5)] border border-[#27272a] rounded-2xl p-12 transition-all duration-300 hover:bg-[rgba(24,24,27,0.7)]">
            <h2 className="text-white text-2xl mb-12">Tools I use</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Figma */}
              <div className="bg-black border border-[#3f3f46] rounded-[14px] aspect-square flex items-center justify-center transition-all duration-300 hover:border-[#52525b] hover:scale-105">
                <svg className="w-4 h-6" fill="none" viewBox="0 0 16 24">
                  <path d={svgPaths.p2dbee600} fill="#0ACF83" />
                  <path d={svgPaths.p3c1cbec0} fill="#A259FF" />
                  <path d={svgPaths.p3080980} fill="#F24E1E" />
                  <path d={svgPaths.p20322400} fill="#FF7262" />
                  <path d={svgPaths.p264e2600} fill="#1ABCFE" />
                </svg>
              </div>

              {/* Framer */}
              <div className="bg-[#155DFC] border border-[#3f3f46] rounded-[14px] aspect-square flex items-center justify-center transition-all duration-300 hover:border-[#52525b] hover:scale-105">
                <svg className="w-[84px] h-[84px]" fill="none" viewBox="0 0 85 85">
                  <path d={svgPaths.p194ac600} stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Notion */}
              <div className="bg-white border border-[#3f3f46] rounded-[14px] aspect-square flex items-center justify-center transition-all duration-300 hover:border-[#52525b] hover:scale-105">
                <svg className="w-[92px] h-[92px]" fill="none" viewBox="0 0 85 85">
                  <path d={svgPaths.p1f4ccf00} fill="black" />
                </svg>
              </div>

              {/* Photoshop */}
              <div className="bg-[#9810fa] border border-[#3f3f46] rounded-[14px] aspect-square flex items-center justify-center transition-all duration-300 hover:border-[#52525b] hover:scale-105">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 33 32">
                  <path d={svgPaths.p22191940} fill="#001E36" />
                  <path d={svgPaths.p15e26f80} fill="#31A8FF" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Certifications & Contact */}
          <div className="space-y-4">
            {/* Certifications */}
            <div className="relative bg-[rgba(24,24,27,0.5)] border border-[#27272a] rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:bg-[rgba(24,24,27,0.7)]">
              <h2 className="text-white text-2xl mb-6">Certifications</h2>
              
              {/* Updating with Clouds */}
              <div className="relative flex flex-col items-center justify-center h-[120px]">
                {/* Cloud decorations - scattered around center */}
                <div className="absolute top-[15px] left-1/2 -translate-x-1/2 translate-x-[80px] opacity-30 animate-float">
                  <svg className="w-[70px] h-[35px]" fill="none" viewBox="0 0 65 35">
                    <path
                      d={svgPaths.p5e33400}
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="absolute top-[50px] left-1/2 -translate-x-1/2 translate-x-[-90px] opacity-30 animate-float-delay-1">
                  <svg className="w-[70px] h-[35px]" fill="none" viewBox="0 0 65 35">
                    <path d={svgPaths.p5e33400} fill="white" />
                  </svg>
                </div>
                <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 translate-x-[20px] opacity-30 animate-float-delay-2">
                  <svg className="w-[70px] h-[35px]" fill="none" viewBox="0 0 65 35">
                    <path d={svgPaths.p5e33400} fill="white" />
                  </svg>
                </div>
                <div className="absolute top-[30px] left-1/2 -translate-x-1/2 translate-x-[-40px] opacity-25 animate-float">
                  <svg className="w-[60px] h-[30px]" fill="none" viewBox="0 0 65 35">
                    <path d={svgPaths.p5e33400} fill="white" />
                  </svg>
                </div>
                <div className="absolute bottom-[45px] left-1/2 -translate-x-1/2 translate-x-[110px] opacity-25 animate-float-delay-2">
                  <svg className="w-[65px] h-[32px]" fill="none" viewBox="0 0 65 35">
                    <path d={svgPaths.p5e33400} fill="white" />
                  </svg>
                </div>

                <h3 className="text-3xl tracking-[1.8px] text-center font-['Bebas_Neue',sans-serif]">UPDATING</h3>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="relative bg-[rgba(24,24,27,0.5)] border border-[#27272a] rounded-2xl p-6 transition-all duration-300 hover:bg-[rgba(24,24,27,0.7)]">
              <h2 className="text-2xl mb-2">Let's collab!</h2>
              <p className="text-[#99a1af] text-sm mb-4 max-w-md">
                Let's turn your idea into reality with my design experience!
              </p>
              <button
                onClick={handleContactClick}
                className="w-full group bg-[rgba(39,39,42,0.8)] hover:bg-white text-white hover:text-black rounded-lg px-8 py-4 text-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                Send a message now!
                <span className="inline-block transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 text-[#99a1af]">
          Made with 🤍 /AXRYA\
        </div>
      </div>

      {/* Contact Form Overlay */}
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </div>
  );
}