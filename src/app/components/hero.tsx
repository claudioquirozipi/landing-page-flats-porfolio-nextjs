import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Encuentra la casa de tus sueños
            </h1>
            <p className="text-lg lg:text-xl mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula, nisl non scelerisque tincidunt, tellus nisl ultrices
              sapien, non ultricies odio nunc nec nisl.
            </p>
            <Button variant={"secondary"} size={"lg"}>
              Ver propiedades
            </Button>
          </div>
          <div className="flex justify-center">
            <img
              src="/hero.webp"
              alt="Hero Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
