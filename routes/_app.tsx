import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <title>Delowcos Studio</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Estudio de producción musical en Las Palmas de Gran Canaria"
        />
        <link rel="stylesheet" href="/styles.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js">
        </script>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
