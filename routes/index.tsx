import { asset, Head } from "$fresh/runtime.ts";
import { Section } from "../components/Section.tsx";
import InfoBanner from "../islands/InfoBanner.tsx";
import VerticalCarousel from "../islands/VerticalCarousel.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href={asset("global.css")} />
      </Head>
      <header class="w-full bg-black opacity-75">
        <InfoBanner />
        <nav class="flex flex-wrap w-full justify-center p-6 gap-6">
          <a href="#first">Inicio</a>
          <a href="#second">Servicios</a>
          <a href="#third">Instalaciones</a>
          <a href="#fourth">Membresía</a>
          <a href="#fifth">Contacto</a>
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
              href="https://cal.com/delowcos"
              target="_blank"
            >
              <button
                type="button"
                class="opacity-90 p-3 mb-6 text-xl sm:text-2xl bg-orange-400 hover:bg-white text-white font-bold border-4 border-white hover:border-orange-400 hover:text-orange-400 rounded"
              >
                RESERVAR CITA
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
            <div class="container mx-auto px-4 my-12">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class=" text-center p-16 rounded card bg-black/75 border border-white">
                  <h1 class="font-bold mb-2 text-xl">Producción DeLowCos</h1>
                  <div class="flex items-center justify-center mb-8">
                    <span class="text-2xl -mt-8">€</span>
                    <span class="text-6xl">60</span>
                    <span class="text-small">(miembros 45€)</span>
                  </div>

                  <div class="flex flex-col place-content-end">
                    <hr class="mb-6" />
                    <ul class="my-6">
                      <li class="text-lg">Sesión de 4 horas</li>
                      <li class="text-lg pt-1">
                        <br />
                      </li>
                      <li class="text-lg pt-1">
                        Grabación + Mezcla + Mastering
                      </li>
                      <li class="text-lg pt-1">
                        <br />
                      </li>
                    </ul>

                    <a
                      href="https://cal.com/delowcos/reservar-produccion"
                      target="_blank"
                    >
                      <button
                        type="button"
                        class="opacity-90 p-3 text-xl sm:text-2xl bg-orange-400 hover:bg-white text-white font-bold border-4 border-white hover:border-orange-400 hover:text-orange-400 rounded"
                      >
                        RESERVAR SESIÓN
                      </button>
                    </a>
                  </div>
                </div>

                <div class=" text-center p-16 rounded card bg-black/75 border border-white">
                  <h1 class="font-bold mb-2 text-xl">
                    Alquiler cabina grabación
                  </h1>
                  <div class="flex items-center justify-center mb-8">
                    <span class="text-2xl -mt-8">€</span>
                    <span class="text-6xl">40</span>
                    <span class="text-small">(miembros 25€)</span>
                  </div>

                  <div class="flex flex-col place-content-end">
                    <hr class="mb-6" />
                    <ul class="my-6">
                      <li class="text-lg">Sesión de 4 horas</li>
                      <li class="text-lg pt-1">
                        <br />
                      </li>
                      <li class="text-lg pt-1">Trae tu propio productor</li>
                      <li class="text-lg pt-1">
                        <br />
                      </li>
                    </ul>

                    <a
                      href="https://cal.com/delowcos/alquiler-sala-estudio"
                      target="_blank"
                    >
                      <button
                        type="button"
                        class="opacity-90 p-3 text-xl sm:text-2xl bg-orange-400 hover:bg-white text-white font-bold border-4 border-white hover:border-orange-400 hover:text-orange-400 rounded"
                      >
                        RESERVAR SALA
                      </button>
                    </a>
                  </div>
                </div>

                <div class=" text-center p-16 rounded card bg-black/75 border border-white">
                  <h1 class="font-bold mb-2 text-xl">Beatmaking</h1>
                  <div class="flex items-center justify-center mb-8">
                    <span class="text-2xl -mt-8">€</span>
                    <span class="text-6xl">60</span>
                    <span class="text-small">(miembros 50€)</span>
                  </div>

                  <div class="flex flex-col place-content-end">
                    <hr class="mb-6" />
                    <ul class="my-6">
                      <li class="text-lg">Bajo encargo</li>
                      <li class="text-lg pt-1">
                        <br />
                      </li>
                      <li class="text-lg">Bases personalizadas</li>
                      <li class="text-lg pt-1">
                        <br />
                      </li>
                    </ul>

                    <a
                      href="https://cal.com/delowcos/reservar-beatmaking"
                      target="_blank"
                    >
                      <button
                        type="button"
                        class="opacity-90 p-3 text-xl sm:text-2xl bg-orange-400 hover:bg-white text-white font-bold border-4 border-white hover:border-orange-400 hover:text-orange-400 rounded"
                      >
                        RESERVAR CITA
                      </button>
                    </a>
                  </div>
                </div>

                <div class=" text-center p-16 rounded card bg-black/75 border border-white">
                  <h1 class="font-bold mb-2 text-xl">Sesión Fotos DeLowCos</h1>
                  <div class="flex items-center justify-center mb-8">
                    <span class="text-2xl -mt-8">€</span>
                    <span class="text-6xl">50</span>
                    <span class="text-small">(miembros 40€)</span>
                  </div>

                  <div class="flex flex-col place-content-end">
                    <hr class="mb-6" />
                    <ul class="my-6">
                      <li class="text-lg">Selección de 10 fotografías</li>
                      <li class="text-lg pt-1">
                        <br />
                      </li>
                      <li class="text-lg pt-1">Entrega tras edición</li>
                      <li class="text-lg pt-1">
                        <br />
                      </li>
                    </ul>

                    <a
                      href="https://cal.com/delowcos/sesion-fotografica-delowcos"
                      target="_blank"
                    >
                      <button
                        type="button"
                        class="opacity-90 p-3 text-xl sm:text-2xl bg-orange-400 hover:bg-white text-white font-bold border-4 border-white hover:border-orange-400 hover:text-orange-400 rounded"
                      >
                        RESERVAR SESIÓN
                      </button>
                    </a>
                  </div>
                </div>
              </div>
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
            <h1 class="text-xl text-orange-300 md:text-5xl font-light italic underline">
              Ventajas de hacerte miembro
            </h1>
            <br />
            <ul class="mb-18 normal-case">
              <li>
                ✔️ Acceso libre a las instalaciones del estudio durante horario
                de apertura
              </li>
              <br />
              <li>✔️ Uso del material de audio, shooting e ilumincación</li>
              <br />
              <li>
                ✔️ Descuentos en todos los servicios ofertados por el estudio
              </li>
            </ul>{" "}
            <br />
            <br />

            <h1 class="text-xl text-orange-300 md:text-5xl font-light italic underline">
              Cómo puedes hacerte miembro
            </h1>{" "}
            <br />
            <div class="text-left normal-case px-10 md:px-30">
              <p>
                Dado que{" "}
                <strong class="underline">
                  el número de miembros concurrentes es limitado
                </strong>, deberás solicitar la membresía "in situ" en el
                estudio. Dónde comprobaremos la disponibilidad de plazas y,
                presumiblemente, te daremos de alta al instante. Existe una
                lista de espera a la que pueden optar aquellos clientes que
                soliciten hacerse miembros durante períodos sin cupo.
              </p>
              <br />
              <p>
                👉 Si tienes cualquier duda puedes contactarnos por{" "}
                <a
                  class="font-bold underline"
                  href="mailto:contacto@delowcos.com"
                  target="_blank"
                >
                  e-mail
                </a>{" "}
                o{" "}
                <span class="text-purple-400 underline">
                  <a
                    href="https://www.instagram.com/delowcos.studio/"
                    target="_blank"
                  >
                    DM en instagram.
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section
        id="fifth"
        title=""
        className="fifth"
        bgUrl={asset("img/bg5.jpeg")}
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
              Puedes contactarnos vía{" "}
              <span class="font-bold">
                e-mail o <span class="text-purple-400">Instagram</span>.
              </span>
            </h3>

            <div class="inline-grid grid-cols-2 gap-12 mt-12">
              <a href="mailto:delowcos.studio@gmail.com" target="_blank">
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
              href="https://cal.com/delowcos"
              target="_blank"
            >
              <button
                type="button"
                class="p-3 mb-6 text-xl sm:text-2xl bg-orange-400 hover:bg-white text-white font-bold border-4 border-white hover:border-orange-400 hover:text-orange-400 rounded"
              >
                RESERVAR CITA
              </button>
            </a>
          </div>
        </div>
      </Section>

      <VerticalCarousel />
    </>
  );
}
