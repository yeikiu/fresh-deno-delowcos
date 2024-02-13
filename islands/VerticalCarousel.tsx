import { useEffect } from "preact/hooks";
import { signal } from "@preact/signals";

export const currentPageId = signal('first')

export default function VerticalCarousel() {
  useEffect(() => {
    const navs = Array.from(document.querySelectorAll("nav a"))
    const sections = document.querySelectorAll(".section")
    const images = document.querySelectorAll(".background")
    const headings = document.querySelectorAll(".section-title")
    const outerWrappers = document.querySelectorAll(".wrapper-outer")
    const innerWrappers = document.querySelectorAll(".wrapper-inner")
    let currentIndex = -1
    const wrap = (index: number, max: number) => (index + max) % max

    gsap.set(outerWrappers, { yPercent: 100 })
    gsap.set(innerWrappers, { yPercent: -100 })

    let animating = false
    function gotoSection(index: number, direction: number) {
      // console.log({index, direction})
      if (animating) return
      animating = true;

      index = wrap(index, sections.length);
      navs[currentIndex]?.classList.remove('active')
      navs[index]?.classList.add('active');

      const fromTop = direction === -1;
      const dFactor = fromTop ? -1 : 1;
      const tl = gsap.timeline({ defaults: { duration: 1.25, ease: "power1.inOut" }, onComplete: () => {
        currentIndex = index;
        currentPageId.value = sections[index].id
        
        animating = false; 
      }});

      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor })
          .set(sections[currentIndex], { autoAlpha: 0 });
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo([outerWrappers[index], innerWrappers[index]], { yPercent: (i: number) => (i ? -100 * dFactor : 100 * dFactor) }, { yPercent: 0 }, 0)
        .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
        .fromTo(headings[index], { autoAlpha: 0, yPercent: 150 * dFactor }, {
          autoAlpha: 1,
          yPercent: 0,
          duration: 1,
          ease: "power2",
          stagger: { each: 0.02, from: "random" },
        }, 0.2);
    }

    function navigateSectionById(id: string) {
      if (animating) return
      const index = Array.from(sections).findIndex(section => section.id === id);

      if (index !== -1 && index !== currentIndex) {
        gotoSection(index, index > currentIndex ? 1 : -1);
      }
    }

    /* let lastTap = 0;
    document.addEventListener("touchend", function (event) {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;
      if (tapLength < 500 && tapLength > 0) {
        gotoSection(currentIndex + 1, 1);
        event.preventDefault();
      }
      lastTap = currentTime;
    }); */

    /* globalThis.addEventListener("wheel", (event) => {
      if (event.deltaY < 0 && !animating) {
        gotoSection(currentIndex - 1, -1);
      } else if (event.deltaY > 0 && !animating) {
        gotoSection(currentIndex + 1, 1);
      }
    }); */

    /* document.querySelectorAll(".content").forEach(a => {
      if (a.firstElementChild && a.scrollHeight < a.firstElementChild.scrollHeight) {
        a.firstElementChild.addEventListener("scroll", e => {
          e.preventDefault();
          if (a?.firstElementChild?.scrollHeight === Math.ceil((a?.firstElementChild?.clientHeight ?? 0) + (a?.firstElementChild?.scrollTop ?? 0))) {
            gotoSection(currentIndex + 1, 1);
          } else if ((a?.firstElementChild?.scrollTop ?? 0) === 0) {
            gotoSection(currentIndex - 1, -1);
          }
        });
      } else {
        a.firstChild?.addEventListener("wheel", (event) => {
          event.preventDefault();
          if (event.deltaY < 0 && !animating) {
            gotoSection(currentIndex - 1, -1);
          } else if (event.deltaY > 0 && !animating) {
            gotoSection(currentIndex + 1, 1);
          }
        }); 
      }
    }); */

    document.querySelectorAll("nav a").forEach(a => {
      a.addEventListener("click", e => {
        e.preventDefault();
        navigateSectionById(e.currentTarget.getAttribute("href").slice(1));
      });
    });

    gotoSection(0, 1);
  }, []);

  return (
    <>
    </>
  )
}
