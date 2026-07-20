import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

interface SubSectionProps {
  title: string;
  image: string;
  description: string;
}

interface ServiceSectionProps {
  sectionTitle: string;
  header: string;
  subheader: string;
  description: string;
  list?: string[];
  mainMedia: { type: 'video' | 'image'; src: string };
  subsections: SubSectionProps[];
}

const StructuredServiceSection = ({
  sectionTitle,
  header,
  subheader,
  description,
  list,
  mainMedia,
  subsections
}: ServiceSectionProps) => {
  return (
    <section className="w-full bg-black py-20 border-t border-[#222]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-widest text-white uppercase"
          >
            {sectionTitle}
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 md:w-32 h-1.5 bg-white/80 mx-auto mt-6"
          />
        </div>

        {/* Main Row (2-Column) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-20">
          {/* Left Text Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#111] p-8 md:p-12 lg:p-16 rounded-xl flex flex-col justify-center"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight uppercase">
              {header}
            </h3>
            <h4 className="text-base md:text-lg font-semibold text-white/70 mb-6">
              {subheader}
            </h4>
            <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed space-y-4">
              {description}
            </p>
            {list && (
              <div className="mt-8">
                <h5 className="font-bold text-sm md:text-base text-white uppercase mb-4 tracking-wider">
                  With RaveMFG You Can:
                </h5>
                <ul className="list-disc pl-5 space-y-3 text-sm md:text-base text-[#a0a0a0]">
                  {list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          {/* Right Media Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl bg-[#0a0a0a]"
          >
            {mainMedia.type === 'video' ? (
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-90"
              >
                <source src={mainMedia.src} type="video/mp4" />
              </video>
            ) : (
              <img 
                src={mainMedia.src} 
                alt={sectionTitle} 
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-90"
              />
            )}
            {/* Tech decorations to match our theme */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-1 items-end opacity-50">
               <div className="w-8 h-[1px] bg-white/80" />
               <div className="w-4 h-[1px] bg-white/40" />
            </div>
          </motion.div>
        </div>

        {/* Sub-sections (3-Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subsections.map((sub, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="flex flex-col rounded-xl overflow-hidden shadow-lg bg-[#0a0a0a] border border-[#222] hover:border-[#444] transition-colors duration-300 group"
            >
              {/* Top Half: Image & Overlay */}
              <div className="relative aspect-[4/3] md:aspect-[3/4] w-full overflow-hidden">
                <img 
                  src={sub.image} 
                  alt={sub.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-24 pb-6 px-4">
                  <h4 className="text-lg md:text-xl font-bold text-white text-center uppercase tracking-wider">
                    {sub.title}
                  </h4>
                  <div className="w-12 h-1 bg-white/50 mx-auto mt-3 group-hover:bg-white transition-colors duration-300" />
                </div>
              </div>

              {/* Bottom Half: Description */}
              <div className="p-6 md:p-8 flex-grow flex items-center justify-center">
                <p className="text-center text-sm md:text-base text-[#888] group-hover:text-[#aaa] transition-colors leading-relaxed">
                  {sub.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

const Services = () => {
  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <Helmet>
        <title>Services | RaveMFG</title>
        <meta name="description" content="The Gold Standard in research & development, designing, and manufacturing." />
      </Helmet>

      {/* Intro Header */}
      <div className="max-w-[1440px] mx-auto px-6 mb-20 text-center">
         <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/50 font-mono text-sm tracking-[0.2em] uppercase mb-4 block"
          >
            Capabilities
          </motion.span>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#a0a0a0] text-xl md:text-3xl max-w-4xl mx-auto leading-relaxed font-sans font-medium"
        >
          The Gold Standard in research & development, designing, and manufacturing high-precision parts.
        </motion.p>
      </div>

      <StructuredServiceSection 
        sectionTitle="CNC Machining"
        header="Put Our Equipment To Work For You"
        subheader="5-Axis High Speed Machining Center"
        description="Our 5-axis high speed movable-bridge machining center is specifically designed for high speed machining of composite materials and light alloys, providing exceptional motion dynamics to ensure high productivity. This technology allows us to manufacture complex custom masters and plugs at rapid speeds. Custom components are simplified with our 5-Axis CNC Machine."
        mainMedia={{ type: 'video', src: '/service_video.mp4' }}
        subsections={[
          {
            title: "Programming Dept",
            image: "/manufacturing_1.jpg",
            description: "Once engineered, each CAD model is programmed for machining, which provides the finished CNC program."
          },
          {
            title: "Machining Dept",
            image: "/manufacturing_2.jpg",
            description: "The RaveMFG Factory uses a state-of-the-art aerospace 5-Axis CNC Machine to machine all plugs and masters."
          },
          {
            title: "Part Inspection",
            image: "/manufacturing_3.jpg",
            description: "At the completion of the CNC cycle, our team will inspect the plug/master to ensure the projects tolerances are accurately achieved."
          }
        ]}
      />

      <StructuredServiceSection 
        sectionTitle="CAD Design"
        header="Put Our Design Team To Work For You"
        subheader="Your Vision Is Our Mission"
        description="In the highly competitive and highly demanding field of CAD Design, custom fabrication technology needs to be fast, flexible, and precise. Moreover, it needs to be able to actualize even the most creative and complex designs without high costs or long timelines."
        list={[
          "Quickly produce high quality, replicable, prototypes without a large investment of resources",
          "Generate 3D digital models through 3D scanning, digital design, or converting 2D files with the touch of a button",
          "Approach projects with tight tolerances and exacting specifications with total confidence"
        ]}
        mainMedia={{ type: 'image', src: '/service_image_1.jpg' }}
        subsections={[
          {
            title: "Program Kick Off",
            image: "/manufacturing_4.jpg",
            description: "At the start of every CAD project, we set the requirements and milestones to ensure we provide the finished file that our clients expect."
          },
          {
            title: "Design Process",
            image: "/manufacturing_5.jpg",
            description: "Our design team now takes your vision and brings it to life through industry leading modeling software."
          },
          {
            title: "Quality Assurance",
            image: "/manufacturing_1.jpg",
            description: "At the time of completion, our design department will collaborate with your team to ensure the file meets all requirements."
          }
        ]}
      />

      <StructuredServiceSection 
        sectionTitle="Private Label Manufacturing"
        header="Put Our Knowledge To Work For You"
        subheader="A+ Quality = Your Brands Product"
        description="The success in every part comes from collaborating with your design team to produce a finished product exactly that way you envisioned. We rely on our teams advanced capabilities to bring your vision/product to life. We stand by our procedures and our products, and recognize our customers requirements for high-quality parts."
        mainMedia={{ type: 'image', src: '/service_image_2.jpg' }}
        subsections={[
          {
            title: "Material Science",
            image: "/manufacturing_2.jpg",
            description: "Our team will develop and tailor a specific layup that produces the strength, thickness, and quality necessary for your finished product."
          },
          {
            title: "Manufacturing Dept",
            image: "/manufacturing_3.jpg",
            description: "RaveMFG specializes in open-mold hand-layup and infusion with only the finest materials on the market."
          },
          {
            title: "Quality Control",
            image: "/manufacturing_4.jpg",
            description: "Our manufacturing department inspects the part during each step to ensure the finished product exceeds the clients expectations."
          }
        ]}
      />

      <StructuredServiceSection 
        sectionTitle="3D Scanning"
        header="Put Our 3D Scanner To Work For You"
        subheader="Unmatched Dimensional Accuracy"
        description="Professional-grade measurements with high accuracy and resolution. Built-in intelligence ensures that 3D data is high-quality and accurate. Scan in color allows for seamless capture of high-quality geometry and colors simultaneously. Real-time visualization to model what you are doing and what is left to be done."
        mainMedia={{ type: 'image', src: '/service_image_3.jpg' }}
        subsections={[
          {
            title: "Setting Goals",
            image: "/manufacturing_5.jpg",
            description: "In the beginning of the project, we discuss the specifications of the project to establish the necessary details that needs to be captured."
          },
          {
            title: "Scanning Dept",
            image: "/manufacturing_1.jpg",
            description: "Our scanning team prepares the object by adding positioning targets to ensure proper geometry is captured during the 3D scanning process."
          },
          {
            title: "Part Verification",
            image: "/manufacturing_2.jpg",
            description: "After completing the scan, our team will verify that the dimensions match up with the object provided with accuracy of 0.1mm."
          }
        ]}
      />

    </div>
  );
};

export default Services;
