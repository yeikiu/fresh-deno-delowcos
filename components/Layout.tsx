import { type ComponentChildren } from "preact";
import { asset, Head } from "$fresh/runtime.ts";

export type MetaTag = {
  name: string;
  content: string;
}

type LayoutProps = {
   children?: ComponentChildren,
   title?: string,
   metaTags?: MetaTag[],
   globalCssFiles?: string[],
}

const Layout = ({
  children = null, 
  metaTags = [], 
  globalCssFiles = [], 
  title = 'Fresh Layout' 
}: LayoutProps) => {

  return (
    <>
      <Head>
        {metaTags.map(({ name, content }) => (
          <meta name={name} content={content}></meta>
        ))}
        {globalCssFiles.map(cssFile => (
          <link rel="stylesheet" href={asset(cssFile)} />
        ))}
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
}

export default Layout;
