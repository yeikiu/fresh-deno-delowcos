import { asset } from "$fresh/runtime.ts";
import { Accordion } from "../components/Accordion.tsx";
import { Section } from "../components/Section.tsx";
import VerticalCarousel from "../islands/VerticalCarousel.tsx";

export default function Home() {
  return (
    <>
      <header class="w-full bg-black opacity-75">
        <nav class="flex flex-wrap w-full justify-center p-6 gap-6">
          <a href="#first">Inicio</a>
          <a href="#second">Servicios</a>
          <a href="#third">Instalaciones</a>
          <a href="#fourth">Contacto</a>
        </nav>
      </header>

      <Section
        id="first"
        title=""
        className="first"
        bgUrl={asset("img/bg1.jpeg")}
      >
        <div class="flex h-screen overflow-y-scroll p-8 mt-1">
          <div class="m-auto text-center">
            <a
              href="https://calendly.com/delowcos/reservar-sesion"
              target="_blank"
            >
              <button class="opacity-90 p-3 mb-6 text-xl sm:text-2xl bg-orange-400 hover:bg-white text-white font-bold border-4 border-white hover:border-orange-400 hover:text-orange-400 rounded">
                RESERVAR SESIÓN
              </button>
            </a>
            <img
              src={asset("img/dlc_big.png")}
              class="mx-auto w-1/2 opacity-90"
            />

            <div class="my-6 h-px w-3/4 sm:w-1/2 mx-auto bg-white"></div>

            <h3 class="sm:text-2xl text-lg font-light">
              Tu estudio de confianza en LPGC 🇮🇨
            </h3>
          </div>
        </div>p-4 sm:p-10
      </Section>
      <Section
        id="second"
        title=""
        className="second"
        bgUrl={asset("img/bg2.jpeg")}
      >
        <div class="flex h-screen pt-32 overflow-y-scroll">
          <div class="m-auto text-center">
            <div class="justify-center p-10 space-y-2">
              <p class="border border-4 p-2 bg-black opacity-75">
                <span class="font-bold text-xl">Producción LowCos · 60€</span>
                <br />
                <span class="text-xs">(Hasta 4 horas/sesión)</span>
              </p>
              <p class="border border-4 p-2 bg-black opacity-75">
                <span class="font-bold text-xl">
                  Contenido redes LowCos · 30€
                </span>
                <br />
                <span class="text-xs">(Hasta 2 horas/sesión)</span>
              </p>
              <p class="border border-4 p-2 bg-black opacity-75">
                <span class="font-bold text-xl">
                  Alquiler cabina grabación · 40€
                </span>
                <br />
                <span class="text-xs">
                  (Trae tu propio productor · Hasta 4 horas/sesión)
                </span>
              </p>
              <p class="border border-4 p-2 bg-black opacity-75">
                <span class="font-bold text-xl">
                  Alquiler estudio completo · 80€
                </span>
                <br />
                <span class="text-xs">
                  (Ideal para videoclips · Hasta 4 horas/sesión)
                </span>
              </p>
              <p class="border border-4 p-2 bg-black opacity-75">
                <span class="font-bold text-xl">
                  Sesión de fotos LowCos · 50€
                </span>
                <br />
                <span class="text-xs">
                  (Ideal para campañas de lanzamiento · Entrega de 10 fotos
                  editas)
                </span>
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section
        id="third"
        title=""
        className="third"
        bgUrl={asset("img/bg3.jpeg")}
      >
        <div class="flex h-screen overflow-y-scroll">
          <div class="m-auto text-center text-2xl md:text-5xl lg:text-7xl p-10 drop-shadow-xl">
            Cabina insonorizada · Estudio climatizado · Zona de reuniones · Set
            fotografías/rodajes
          </div>
        </div>
      </Section>
      <Section
        id="fourth"
        title=""
        className="fourth"
        bgUrl={asset("img/bg4.jpeg")}
      >
        <div class="flex h-screen pt-32 overflow-y-scroll">
          <div class="m-auto text-center md:w-3/4 bg-black/90 p-10 md:p-20">
            <h1 class="text-4xl md:text-5xl font-light italic">
              "Sólo el miedo se interpone entre el éxito y tus manos"
            </h1>

            <div class="my-6 h-px w-3/4 md:w-1/2 mx-auto bg-white"></div>

            <h3 class="text-xl md:text-2xl">
              ¿Hablamos de tu próximo tema?
              <br />
              <br />
              Puedes contactarnos por{" "}
              <span class="font-bold">
                teléfono, e-mail, <span class="text-green-400">WhatsApp</span> o
                {" "}
                <span class="text-purple-400">Instagram</span>.
              </span>
            </h3>

            <div class="inline-grid grid-cols-4 gap-12 mt-12">
              <a href="tel:698903444" target="_blank">
                <svg
                  class="h-8"
                  stroke="currentColor"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                >
                  <title>Teléfono</title>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </a>
              <a href="mailto:contacto@delowcos.com" target="_blank">
                <svg
                  class="h-8"
                  stroke="currentColor"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                >
                  <title>E-Mail</title>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </a>
              <a
                class="hover:text-green-400"
                href="https://wa.me/34698903444"
                target="_blank"
              >
                <svg
                  class="h-8"
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                class="hover:text-purple-400"
                href="https://www.instagram.com/delowcos.studio/"
                target="_blank"
              >
                <svg
                  class="h-8"
                  fill="currentColor"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
            </div>
            <div class="my-6 h-px w-3/4 md:w-1/2 mx-auto bg-white"></div>
            <a
              href="https://calendly.com/delowcos/reservar-sesion"
              target="_blank"
            >
              <button class="p-3 mb-6 text-xl sm:text-2xl bg-orange-400 hover:bg-white text-white font-bold border-4 border-white hover:border-orange-400 hover:text-orange-400 rounded">
                RESERVAR SESIÓN
              </button>
            </a>
          </div>
        </div>
      </Section>

      <VerticalCarousel />
    </>
  );
}
