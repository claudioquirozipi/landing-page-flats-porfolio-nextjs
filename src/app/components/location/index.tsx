import { MapPin } from "lucide-react";
import MyMap from "./my-map";

export default function Location() {
  return (
    <section
      id="location"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
              Ubicación Privilegiada
            </h2>
            <p className="mb-4">
              Situado en el corazón de la ciudad, nuestro apartamento ofrece
              fácil acceso a:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" /> Transporte público a 5
                minutos
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" /> Restaurantes y cafeterías
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" /> Parques y áreas verdes
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" /> Centros comerciales
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <MyMap />
          </div>
        </div>
      </div>
    </section>
  );
}
