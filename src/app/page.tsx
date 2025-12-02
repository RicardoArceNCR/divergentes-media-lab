"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Btn from "@/components/ui/btn";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const navLinkClass =
  "text-sm font-semibold text-brand-navy hover:text-brand-red " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-colors";


export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Divergentes Media Lab</span>
              <img
                alt="Divergentes Media Lab"
                src="/logo.svg"
                className="h-12 w-auto"
              />
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-brand-navy"
            >
              <span className="sr-only">Abrir menú principal</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-14">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={navLinkClass}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className={navLinkClass}>
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

        </nav>

        {/* MENÚ MOBILE */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50 bg-black/40" aria-hidden="true" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-gray-900 p-6 sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Divergentes Media Lab</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Cerrar menú</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* MAIN */}
      <main className="relative isolate pt-14">
        {/* HERO */}
        <section className="relative isolate overflow-hidden py-32 sm:py-6 lg:py-12">
  {/* Fondo con imagen */}
  <div
    className="absolute inset-0 -z-10 bg-[url('/hero-media-lab.jpg')] bg-cover bg-center"
    aria-hidden="true"
  />
  {/* Opcional: velo para que el texto siempre tenga contraste */}
  <div
    className="absolute inset-0 -z-10 bg-white/20"
    aria-hidden="true"
  />
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-indigo-400">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <Heading className="text-center max-w-4xl mx-auto px-0 sm:px-40 text-brand-navy" as="h1" variant="hero">
            creamos historias visuales que conectan.
          </Heading>

          <Paragraph className="mt-6 max-w-2xl mx-auto px-7 text-center">
            Videos, narrativas y experiencias digitales diseñadas para que las
            audiencias realmente las vean. Traducimos temas complejos a
            formatos nativos, claros y atractivos para públicos jóvenes y en
            movimiento.
          </Paragraph>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Btn variant="primary" size="md">
              Get started
            </Btn>
            <Btn variant="secondary" size="md">
              Try demo
            </Btn>
            <Btn variant="ghost" size="lg">
              Big Button
            </Btn>
          </div>
        </section>

        {/* LOGO CLOUD (logotipos) */}
        <LogoCloud />
      </main>
    </div>
  );
}

/**
 * Grid estática de logos (versión Tailwind UI adaptada a JSX).
 * Más adelante aquí mismo podemos cambiar a carrusel infinito.
 */
function LogoCloud() {
  return (
    <section
      aria-labelledby="logo-cloud-heading"
      className="bg-gray-900 py-24 sm:py-32"
    >
      <div className="container">
        <h2
          id="logo-cloud-heading"
          className="text-center text-lg/8 font-semibold text-white"
        >
          Trusted by the world’s most innovative teams
        </h2>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            width="158"
            height="48"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
            alt="Transistor"
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            width="158"
            height="48"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
            alt="Reform"
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            width="158"
            height="48"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
            alt="Tuple"
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            width="158"
            height="48"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
            alt="SavvyCal"
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            width="158"
            height="48"
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
            alt="Statamic"
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </section>
  );
}
