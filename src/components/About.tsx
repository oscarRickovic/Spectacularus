import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1623491351874-328be6ece829?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team at work"
            className="w-[300px] object-contain rounded-lg shadow-lg"
          />

          {/* Text Content */}
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About
                </span>{" "}
                Our Company
              </h2>

              <p className="text-xl text-muted-foreground mt-4">
                At <strong>YourCompany</strong>, we specialize in delivering cutting-edge digital solutions that transform businesses. 
                From designing secure and scalable web and mobile applications to implementing AI-driven systems and cloud-based infrastructures, 
                we help companies streamline operations, enhance customer engagement, and unlock new growth opportunities.
              </p>

              <p className="text-xl text-muted-foreground mt-4">
                Our approach is fully client-centric: we analyze each project in-depth, understand your unique challenges, 
                and provide tailored technology strategies. Whether it's building intuitive user experiences, 
                optimizing backend systems, or leveraging big data and AI for smarter decision-making, 
                we ensure every solution delivers measurable impact.
              </p>

              <p className="text-xl text-muted-foreground mt-4">
                Our expertise spans across:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Web and Mobile App Development</li>
                  <li>Cloud Infrastructure and Database Solutions</li>
                  <li>AI & Machine Learning Integrations</li>
                  <li>Cybersecurity & Data Protection</li>
                  <li>Automation & Workflow Optimization</li>
                </ul>
              </p>
            </div>

            {/* Statistics */}
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
