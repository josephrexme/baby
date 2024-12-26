import Script from 'next/script'
import Image from 'next/image'
import { Amatic_SC, Rubik_Doodle_Shadow, Permanent_Marker } from "next/font/google"
import cx from "clsx"

const AmaticSCFont = Amatic_SC({
  weight: "400",
  variable: "--font-amatic_sc",
  subsets: ["latin"],
});

const RubikDoodleShadowFont = Rubik_Doodle_Shadow({
  weight: "400",
  variable: "--font-rubik_doodle_shadow",
  subsets: ["latin"],
});

const PermanentMarkerFont = Permanent_Marker({
  weight: "400",
  variable: "--font-permanent_marker",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <main className="page relative overflow-hidden w-screen">
    <div className="relative h-svh mb-64 bg-cover text-center flex flex-col" style={{ background: "linear-gradient(to bottom, var(--color-background), rgba(0,0,0,0.4), var(--color-background)), url(/img/dino-bg.jpg) no-repeat 50% -10%" }}> 
      <div className="flex-1 grid place-items-center">
        <div className="mt-64">
          <h1 className={cx("text-[2rem] md:text-[4rem] leading-tight uppercase", RubikDoodleShadowFont.className)}>
            Welcome Baby Rex
          </h1> 
          <p className={cx("mt-4 text-2xl md:text-4xl", AmaticSCFont.className)}>
            It&rsquo;s a boy!
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="scroll relative max-w-[12ch] uppercase leading-snug mb-16 after:h-16 after:absolute after:w-[1px] after:top-full after:left-1/2">Scroll slowly</div> 
      </div>
    </div>
    <section id="js-about">
      <div className="px-8 flex flex-col gap-6 pb-60 items-center mx-auto w-full md:w-3/4">
        <div>
          <Image src="/img/dino.svg" alt="Dino" width={300} height={300} />
        </div>
        <div className="flex-1 text-center">
          <div className={cx("flex flex-col gap-4 mb-8 text-[2rem]", AmaticSCFont.className)}>
            <p>Dear Family &amp; Friends,</p>
            <p>
              Thank you so much for visiting our page and celebrating the upcoming arrival of our little one with us!
              We&rsquo;re excited to share little glimpses of our pregnancy journey and would love for you to keep us
              in your thoughts and prayers for a safe and smooth delivery for both mommy and baby.
            </p>
            <p>
              If you&rsquo;d like to help us get ready for this new adventure, feel free to check out our gift registry link below.
              We truly appreciate all your love and support as we prepare for this next big chapter in our lives!
            </p>
            <p>With love and gratitude, <br />The Rex Family</p>
          </div>
          <a
            href="https://www.amazon.com/baby-reg/rex-family-march-2025-milwaukee/2PPWDXS9CYWNQ"
            target="_blank"
            rel="noreferrer"
            className="inline-block relative overflow-hidden uppercase rounded-full py-4 px-6 border border-white text-lg md:text-2xl hover:text-[var(--color-0)] duration-75 transition-colors cta-btn"
          >
            Gift Registry
          </a>
        </div>
      </div>
    </section>
    <div className="mark">
      <div id="js-marquee" className={cx("mark__inner pointer-events-none select-none", PermanentMarkerFont.className)}>
        <span>Before I formed you in the womb, I knew you. Before you were born, I set you apart.</span> <span className="text-[var(--color-0)]">Jeremiah 1:5</span>
        <span>And the child grew and became strong in spirit, filled with wisdom; and the grace of God was upon him.</span> <span className="text-[var(--color-0)]">Luke 2:40</span>
      </div>
    </div>
    <section className="text-center">
      <div className={cx("text-4xl lg:text-[4rem]", RubikDoodleShadowFont.className)}>Baby Bump</div>
      <div className={cx("text-2xl lg:text-4xl mt-8", AmaticSCFont.className)}>images are coming soon</div>
    </section>
    <section>
      <div className="grid mt-12 mb-16 gap-8 w-full h-auto p-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6" id="js-grid">
        <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
          <div className="transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(img/placeholder.jpg)" }}></div>
        </figure>
        <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
          <div className="transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(img/placeholder.jpg)" }}></div>
        </figure>
        <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
          <div className="transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(img/placeholder.jpg)" }}></div>
        </figure>
        <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
          <div className="transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(img/placeholder.jpg)" }}></div>
        </figure>
        <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
          <div className="transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(img/placeholder.jpg)" }}></div>
        </figure>
        <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
          <div className="transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(img/placeholder.jpg)" }}></div>
        </figure>
        <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
          <div className="transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(img/placeholder.jpg)" }}></div>
        </figure>
        <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
          <div className="transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(img/placeholder.jpg)" }}></div>
        </figure>
        <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
          <div className="transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(img/placeholder.jpg)" }}></div>
        </figure>
        <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
          <div className="transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(img/placeholder.jpg)" }}></div>
        </figure>
        <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
          <div className="transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(img/placeholder.jpg)" }}></div>
        </figure>
        <figure className="perspective-[800px] m-0 relative z-1 will-change-auto">
          <div className="transform-gpu backface-hidden bg-[50%_20%] w-full bg-cover will-change-transform aspect-[1.2] h-auto rounded" style={{ backgroundImage: "url(img/placeholder.jpg)" }}></div>
        </figure>
      </div>
    </section>
    <footer className="mx-auto px-8 w-full md:w-3/4">
      <p className={cx("mb-8 text-center text-3xl md:text-4xl pb-16", AmaticSCFont.className)}>Baby Rex Due Date: March 2025!</p>
      <p className={cx("mb-8 text-center text-3xl md:text-4xl pb-16 leading-relaxed", AmaticSCFont.className)}>
      We&rsquo;ve got a little secret, indeed it&rsquo;s true,<br /> A name for our baby, we&rsquo;ll share with you<br />
      But until he arrives, we&rsquo;ll keep it tight,<br /> a special surprise, a pure delight<br />
      When he&rsquo;s here, we&rsquo;ll share with cheer,<br /> the name of our son, whom we love so dear.
      </p>
      <p className={cx("text-center text-2xl pb-16", AmaticSCFont.className)}>Made with ❤ by Dad</p>
    </footer>
  </main>
  {/* <!-- GSAP library --> */}
  <Script src="js/gsap.min.js"></Script>
  {/* <!-- GSAP ScrollTrigger plugin --> */}
  <Script src="js/ScrollTrigger.min.js"></Script>

  {/* <!-- ImagesLoaded --> */}
  <Script src="js/imagesloaded.pkgd.min.js"></Script>
  
  {/* <!-- Add (Lenis) smooth scroll --> */}
  <Script src="js/lenis.min.js"></Script>
  <Script src="js/smoothscroll.js"></Script>

  {/* <!-- Scripts for the effect --> */}
  <Script type="module" src="js/index.js"></Script>
  </>
  );
}
