import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavigationMenuHome } from "@/components/navigation-menu-home";

export default function Page() {
  return (
      <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-full items-center">
                  <div className="mr-4 md:flex">
                      <Link className="mr-6 flex items-center space-x-2 pl-4" href="/">
                          <Image src="/assets/dnaf-logo.png" alt="Logo" width={100} height={100} />
                          <span className="hidden font-bold sm:inline-block">
                              Dragons & <br />Angels Fund
                          </span>
                      </Link>
                      <NavigationMenuHome />
                  </div>
                  <div className="flex flex-1 items-center justify-end space-x-4">
                      <nav className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                              Sign In
                          </Button>
                          <Button size="sm">Get started</Button>
                      </nav>
                  </div>
              </div>
          </header>
          <main className="flex-1">
              <section className="w-full py-12 md:py-24 lg:py-32">
                  <div className="container px-4 md:px-6">
                      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                          <div className="flex flex-col justify-center space-y-4">
                              <div className="space-y-2">
                                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                      Invest in the Future
                                  </h1>
                                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                      Connecting visionaries with opportunities. Some thing something something.
                                  </p>
                              </div>
                              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                  <Link
                                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                      href="#"
                                  >
                                      Explore Investment Opportunities
                                  </Link>
                              </div>
                          </div>
                          <div className="flex items-center justify-center">
                              <div className="h-[400px] w-full bg-muted"/>
                          </div>
                      </div>
                  </div>
              </section>
              <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                  <div className="container px-4 md:px-6">
                      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                          {Array.from({length: 4}).map((_, i) => (
                              <div key={i}
                                   className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                                  <div className="h-20 w-20 rounded-full bg-gray-100"/>
                                  <h3 className="text-xl font-bold">Feature {i + 1}</h3>
                                  <p className="text-sm text-muted-foreground text-center">
                                      Description of feature {i + 1}
                                  </p>
                              </div>
                          ))}
                      </div>
                  </div>
              </section>
          </main>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
              <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <Image
                      aria-hidden
                      src="https://nextjs.org/icons/file.svg"
                      alt="File icon"
                      width={16}
                      height={16}
                  />
                  Learn
              </a>
              <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <Image
                      aria-hidden
                      src="https://nextjs.org/icons/window.svg"
                      alt="Window icon"
                      width={16}
                      height={16}
                  />
                  Examples
              </a>
              <a
                  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                  href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <Image
                      aria-hidden
                      src="https://nextjs.org/icons/globe.svg"
                      alt="Globe icon"
                      width={16}
                      height={16}
                  />
                  Go to nextjs.org →
              </a>
          </footer>
      </div>
  );
}
