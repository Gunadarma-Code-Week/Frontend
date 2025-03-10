import { Button } from "@/components/ui/button";
import { analytics } from "@/lib/firebase";
import { logEvent } from "firebase/analytics";
import { BookOpen, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  if (analytics) {
    logEvent(analytics, "page_view", {
      page_path: "/",
    });
  }

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Flowbite Logo"
              width={64}
              height={64}
            />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Button className="w-24">Masuk</Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Open main menu</span>
              <Menu />
            </Button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Button variant="link" asChild>
                  <Link href="/">Beranda</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link href="/">Tentang</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link href="/">Buletin</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link href="/">Kontak</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="max-w-screen-xl mx-auto mt-[68px] px-4">
        <section id="hero" className="relative flex flex-col md:flex-row gap-10 mt-24 md:mt-32 w-full">
          <div className="relative ml-auto">
            <Image
              src="/assets/illustration/hero.png"
              alt="Hero Illustration"
              width={640}
              height={533}
            />

            {/* Add glassmorphism effect */}
            <div className="absolute bottom-0 left-1 py-5 text-center w-full rounded-2xl bg-[#EFEEEE0D] backdrop-blur-lg">
              <span className="text-white md:text-2xl font-bold">
                Seminar • Hackathon • CP
              </span>
            </div>
          </div>

          <div className="md:absolute md:left-0 flex flex-col justify-center h-full md:w-[626px]">
            <h1 className="text-4xl md:text-8xl font-bold md:leading-[90px]">Gunadarma <br />Code Week</h1>

            <p className="mt-2 md:text-2xl">GCW menghadirkan seminar, hackathon, dan kompetisi pemrograman. Daftar sekarang untuk mengasah skill & berprestasi!</p>

            <div className="flex mt-4 gap-4">
              <Button variant="outline" size="lg">Daftar Sekarang</Button>
              <Button size="lg"> <BookOpen /> Lihat Guidebook</Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
