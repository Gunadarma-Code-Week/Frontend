import { Button } from "@/components/ui/button";
import { analytics } from "@/lib/firebase";
import { logEvent } from "firebase/analytics";
import { Menu } from "lucide-react";
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
                  <Link href="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link href="/">About</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link href="/">Newsletter</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link href="/">Contact</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
