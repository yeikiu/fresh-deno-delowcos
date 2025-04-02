import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export default function InfoBanner() {
  const bannerDismissed = useSignal<boolean>(true);

  const hanldeBannerDismiss = () => {
    bannerDismissed.value = true;
  };

  useEffect(() => {
    bannerDismissed.value = localStorage.getItem("bannerDismissed") !== null;
  }, []);

  useEffect(() => {
    if (!bannerDismissed.value) {
      localStorage.removeItem("bannerDismissed");
      return;
    }
    localStorage.setItem("bannerDismissed", "true");
  }, [bannerDismissed.value]);

  if (bannerDismissed.value) {
    return null;
  }

  return (
    <div
      id="infoBanner"
      class="w-full bg-blue-700 text-gray-200 p-4"
    >
      <p
        onClick={hanldeBannerDismiss}
        class="mx-2 px-2 float-right cursor-pointer hover:text-white border rounded-full"
      >
        x
      </p>
      <p class="text-xs lg:text-base text-center">
        ℹ️ Debido a{" "}
        <a
          class="text-white underline px-1"
          target="_blank"
          href="https://cal.com/blog/google-s-new-spam-policy-may-be-affecting-your-invitations"
        >
          cambios en Google
        </a>{" "}
        ajenos a nuestra voluntad, recomendamos mandar{" "}
        <a
          class="text-white underline px-1"
          href="mailto:delowcos.studio@gmail.com?subject=Correo%20para%20evitar%20problemas%20con%20Google&body=Hola&#44;%20este%20es%20un%20correo%20para%20que%20ambas%20partes%20nos%20tengamos%20en%20la%20lista%20de%20direcciones%20y%20evitar%20que%20google%20marque%20las%20reservas%20como%20correo%20no%20deseado%20en%20el%20futuro."
        >
          un simple saludo por e-mail
        </a>{" "}
        para evitar que la confirmación de reserva sea marcada como <i>spam</i>.
      </p>
    </div>
  );
}
