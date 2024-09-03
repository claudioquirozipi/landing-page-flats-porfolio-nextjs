import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, BedDouble, Bath, Ruler, Car } from "lucide-react";
import Link from "next/link";
import Header from "./components/header";
import Hero from "./components/hero";
import Gallery from "./components/gallery";
import Location from "./components/location";

export default function ApartmentLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Características Destacadas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <BedDouble className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-bold">3 Dormitorios</h3>
                  <p className="text-sm  text-center">Amplios y luminosos</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Bath className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-bold">2 Baños</h3>
                  <p className="text-sm text-center">Con acabados de lujo</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Ruler className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-bold">120 m²</h3>
                  <p className="text-sm text-center">
                    Espacioso y bien distribuido
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Car className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-bold">2 Plazas de Garaje</h3>
                  <p className="text-sm text-center">Amplias y seguras</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <Gallery />
        <Location />

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Contáctanos
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold">Información de Contacto</h3>
                <p className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" /> +34 123 456 789
                </p>
                <p className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" /> info@acmerealestate.com
                </p>
                <p className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" /> Calle Principal 123,
                  Ciudad
                </p>
              </div>
              <div className="flex-1">
                <form className="space-y-4">
                  <Input placeholder="Nombre" />
                  <Input type="email" placeholder="Email" />
                  <Input type="tel" placeholder="Teléfono" />
                  <Textarea placeholder="Mensaje" />
                  <Button type="submit" className="w-full">
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              ¿Listo para hacer de este apartamento tu nuevo hogar?
            </h2>
            <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4 mb-6">
              No pierdas la oportunidad de vivir en el apartamento de tus
              sueños. Contáctanos ahora para programar una visita.
            </p>
            <Button variant={"secondary"} size={"lg"}>
              Solicitar Información
            </Button>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs">
          © 2023 Acme Real Estate. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  );
}
