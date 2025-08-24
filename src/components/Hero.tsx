import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      {/* Left Side - Text */}
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold leading-tight">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Transform
            </span>{" "}
            your business with{" "}
          </h1>
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              innovative digital solutions
            </span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          We help companies solve real-world challenges by building modern,
          scalable, and intelligent solutions using the latest technologies. From
          strategy to execution, we empower businesses to grow and innovate.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get in Touch</Button>

          <a
            rel="noreferrer noopener"
            href="#"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Connect on LinkedIn
            <LinkedInIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Right Side - Hero Cards */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
