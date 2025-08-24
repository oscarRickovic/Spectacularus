import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex items-center gap-2"
          >
            <LogoIcon />
            Spectacular
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contact</h3>
          <div>
            <a
              href="mailto:contact@spectacular.com"
              className="opacity-60 hover:opacity-100"
            >
              contact@spectacular.com
            </a>
          </div>
          <div>
            <a
              href="tel:+1234567890"
              className="opacity-60 hover:opacity-100"
            >
              +1 234 567 890
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#web"
              className="opacity-60 hover:opacity-100"
            >
              Web
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#mobile"
              className="opacity-60 hover:opacity-100"
            >
              Mobile
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#desktop"
              className="opacity-60 hover:opacity-100"
            >
              Desktop
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#projects"
              className="opacity-60 hover:opacity-100"
            >
              Projects
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#team"
              className="opacity-60 hover:opacity-100"
            >
              Our Team
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/spectacular"
              className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/company/spectacular"
              className="opacity-60 hover:opacity-100"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://twitter.com/spectacular"
              className="opacity-60 hover:opacity-100"
            >
              Twitter
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 Spectacular. All rights reserved.
        </h3>
      </section>
    </footer>
  );
};
