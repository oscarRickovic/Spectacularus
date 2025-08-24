import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
}

const projects: ProjectProps[] = [
  {
    title: "Digitalizing Coffee Shops",
    description:
      "We help coffee shops implement digital ordering, POS systems, loyalty apps, and automated inventory tracking to improve efficiency and customer experience.",
    image: "https://i.pinimg.com/1200x/de/af/62/deaf621ee9bb736d4bcc4f0401431330.jpg",
  },
  {
    title: "Delivery Applications",
    description:
      "We create delivery platforms with real-time tracking, payment integration, and optimized routing to streamline operations for restaurants and local businesses.",
    image: "https://i.pinimg.com/736x/e4/82/3d/e4823deca1dec59d6f8f98d68d6a3e30.jpg",
  },
  {
    title: "AI Implementation for Startups",
    description:
      "We integrate AI solutions like predictive analytics, recommendation engines, and process automation to help startups optimize products and services.",
    image: "https://i.pinimg.com/736x/50/0b/b4/500bb4b866e3b9306bd000ed2322bfec.jpg",
  },
  {
    title: "Data Analytics",
    description:
      "We analyze business data to identify trends, optimize workflows, and provide actionable insights for informed decision-making.",
    image: "https://i.pinimg.com/736x/bb/77/72/bb7772074ede4af7dd24a843856c691a.jpg",
  },
  {
    title: "Cybersecurity Audits",
    description:
      "We assess systems, detect vulnerabilities, and implement best practices to ensure businesses are secure against cyber threats.",
    image: "https://i.pinimg.com/736x/b9/9c/bf/b99cbfa7e8405be97442eedd4c6c9e96.jpg",
  },
  {
    title: "Digital Marketing Solutions",
    description:
      "We design marketing strategies including SEO, social media campaigns, and content creation to enhance online visibility and engagement.",
    image: "https://i.pinimg.com/736x/93/5e/c8/935ec8203cc55dfadc4611ab4477ddb2.jpg",
  },
  {
    title: "Financial Consulting",
    description:
      "We provide financial guidance for projects including budgeting, ROI analysis, and growth strategies to maximize business success.",
    image: "https://i.pinimg.com/736x/78/83/c8/7883c820e8201d8449a59de56ab58f0d.jpg",
  },
];

const projectList: string[] = [
  "Coffee Shops Digitalization",
  "Delivery Apps",
  "AI Integration",
  "Data Analytics",
  "Cybersecurity",
  "Digital Marketing",
  "Financial Consulting",
];

export const Features = () => {
  return (
    <section
      id="services"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Our <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Current Projects</span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {projectList.map((project: string) => (
          <div key={project}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {project}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ title, description, image }: ProjectProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt={title}
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
