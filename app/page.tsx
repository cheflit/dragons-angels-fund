import HeaderNav from "@/components/main-page/header-nav";
import {Button} from "@/components/ui/button";
import Footer from "@/components/footer";

export default function Page() {
  return (
      <div className="min-h-screen flex flex-col">
          <HeaderNav />
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
                                      Connecting visionaries with opportunities. Discover, invest, and grow.
                                  </p>
                              </div>
                              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                  <Button size="lg">
                                      Explore Investment Opportunities
                                  </Button>
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
          <Footer />
      </div>
  );
}
