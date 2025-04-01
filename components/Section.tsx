import { ComponentChildren } from "preact";

export function Section({ id, title, className, bgUrl, children }: {
  id: string;
  title: string;
  className: string;
  bgUrl: string;
  children?: ComponentChildren;
}) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="wrapper-outer">
        <div className="wrapper-inner">
          <div
            className="background"
            style={{ backgroundImage: `url(${bgUrl});` }}
          >
            <h2 className="section-title">{title}</h2>
            <div class="content absolute h-screen w-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
