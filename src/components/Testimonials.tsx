import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    name: "Maria Johnson",
    userName: "@NextWaveTech",
    comment: "Their digital solutions transformed our business. The team is professional, responsive, and innovative!",
  },
  {
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328f9f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    name: "David Smith",
    userName: "@TechStartups",
    comment: "We saw a significant improvement in customer engagement after implementing their solutions. Highly recommended!",
  },
  {
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    name: "Laura Martinez",
    userName: "@CoffeeBuzz",
    comment: "Their consultation helped us identify gaps and optimize operations. The results were beyond our expectations!",
  },
  {
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328f9f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    name: "James Wilson",
    userName: "@FoodDeliveryPro",
    comment: "We now operate more efficiently and have better insights into our business thanks to their analytics solutions.",
  },
  {
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    name: "Sophia Lee",
    userName: "@SmartAIStartup",
    comment: "Integrating AI into our workflow was seamless. Their team is skilled, innovative, and attentive to our needs.",
  },
  {
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328f9f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    name: "Michael Brown",
    userName: "@FinConsults",
    comment: "We received excellent financial insights along with digital strategy. Their solutions helped us grow sustainably.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Clients Trust Us{" "}
        </span>
        with Their Projects
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Our clients appreciate the quality, innovation, and measurable results our digital services provide.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt={name}
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
