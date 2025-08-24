import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ScienceIcon from '@mui/icons-material/Science';
import ComputerIcon from '@mui/icons-material/Computer';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <CalendarMonthIcon className="text-primary w-8 h-8" />,
    title: "Schedule Consultation",
    description:
      "Clients begin by booking a convenient time for a detailed consultation with our team.",
  },
  {
    icon: <HandshakeIcon className="text-primary w-8 h-8" />,
    title: "Project Discussion",
    description:
      "We engage in an in-depth discussion to understand the client’s challenges, goals, and requirements.",
  },
  {
    icon: <ScienceIcon className="text-primary w-8 h-8" />,
    title: "Team Assignment",
    description:
      "Our in-house tech team is assigned, or we bring in specialized experts if the project requires additional skills.",
  },
  {
    icon: <ComputerIcon className="text-primary w-8 h-8" />,
    title: "Solution Implementation",
    description:
      "We design and develop secure, scalable, and intuitive digital solutions tailored to the client’s needs.",
  },
  {
    icon: <DataSaverOffIcon className="text-primary w-8 h-8" />,
    title: "Business & Data Analysis",
    description:
      "We evaluate business processes and data to optimize operations and identify growth opportunities.",
  },
  {
    icon: <AttachMoneyIcon className="text-primary w-8 h-8" />,
    title: "Optional Financial Guidance",
    description:
      "Our experts provide strategic financial insights to maximize ROI and long-term business success.",
  },
];

export const HowItWorks = () => {
  return (
    <section
  id="howItWorks"
  className="container text-center py-24 sm:py-32"
>
  <h2 className="text-3xl md:text-4xl font-bold">
    Our <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Workflow</span> Step-by-Step
  </h2>
  <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
    We follow a structured approach to ensure every client receives tailored digital solutions that solve real-world problems and drive business growth.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {features.map(({ icon, title, description }: FeatureProps) => (
      <Card
        key={title}
        className="bg-muted/50 hover:shadow-lg transition-shadow duration-300"
      >
        <CardHeader>
          <CardTitle className="grid gap-4 place-items-center">
            {icon}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>{description}</CardContent>
      </Card>
    ))}
  </div>
</section>

  );
};
