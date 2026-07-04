import DiagonalPattern from "@/components/DiagonalPattern";
import {
  Award,
  Bot,
  BriefcaseBusiness,
  Building2,
  CodeXml,
  Contact,
  Info,
  Rocket,
  ToolCase,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#050404] min-h-screen min-w-scree">
      <div className="min-h-screen max-w-200 mx-auto flex justify-between">
        <div className="flex flex-col gap-5 text-white w-full px-10 py-10 border-l-4 border-r-4 border-neutral-900 border-dashed">
          <div className="flex flex-col gap-3">
            <img src="/logo.png" alt="logo" className="w-40" />
            <h1 className="text-2xl font-semibold">HoardSpace Technologies</h1>
            <DiagonalPattern width={"100%"} height={6} />
            <h2 className="text-neutral-300 mt-5">
              Building software that powers modern businesses.
            </h2>
            <h3 className="text-neutral-300">
              A technology initiative by <strong>HoardSpace</strong>.
            </h3>
            <p className="text-neutral-300/90 mt-5 text-sm">
              <strong>HoardSpace Technologies</strong> is the product and
              engineering division of <strong>HoardSpace</strong>, dedicated to
              building software that simplifies operations, automates workflows,
              and empowers businesses with modern technology.
            </p>
            {/* <div className="flex gap-10 items-center mt-3 mb-5">
              <Link href={""} className="underline underline-offset-4">
                Explore Products
              </Link>
              <Link href={""} className="underline underline-offset-4">
                Read Our Blog
              </Link>
            </div> */}
            <DiagonalPattern width={"100%"} height={6} className="my-4" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <Award size={20} className="stroke-amber-400 fill-amber-400" />
              <h1 className="font-semibold text-xl">Featured Product</h1>
            </div>

            <div className="flex flex-col gap-5 mb-5 mx-7 ">
              <div className="flex flex-col gap-2 border-2 rounded-md p-5 px-7 border-dashed border-neutral-500 bg-neutral-900/90">
                <h3 className="text-neutral-200 font-semibold">
                  HoardSpace - Book hoardings online all across India
                </h3>
                <p className="text-sm text-neutral-300">
                  Discover, compare, and book premium OOH and DOOH advertising
                  spaces across India through a single digital platform.
                </p>
                <div className="flex gap-2">
                  <Link
                    href={"https://hoardspace.in"}
                    target="_blank"
                    className="underline underline-offset-2 text-sm"
                  >
                    Visit HoardSpace
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-2 border-2 rounded-md p-5 px-7 border-dashed border-neutral-500 bg-neutral-900/90">
                <h3 className="text-neutral-200 font-semibold">FormAS</h3>
                <p className="text-sm text-neutral-300">
                  A modern backend for forms with APIs, webhooks, email
                  notifications, exports, and developer-friendly integrations.
                </p>
                <div className="flex gap-2">
                  <Link
                    href={"http://formas.space"}
                    target="_blank"
                    className="underline underline-offset-2 text-sm"
                  >
                    Visit FormAS
                  </Link>
                </div>
              </div>
            </div>

            <DiagonalPattern width={"100%"} height={6} />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <CodeXml size={20} className="stroke-amber-400" />
              <h1 className="font-semibold text-xl">What We Build</h1>
            </div>
            <p className="text-neutral-300 mx-7">
              We build products across multiple domains
            </p>
            <div className="flex flex-col gap-3 mx-7 mt-5 w-ful">
              <div className="p-4 border-2 border-dashed flex items-center gap-2 border-neutral-500 bg-neutral-900/90 rounded-md">
                <BriefcaseBusiness size={20} />
                <p className="text-sm">Business Software</p>
              </div>
              <div className="p-4 border-2 border-dashed flex items-center gap-2 border-neutral-500 bg-neutral-900/90 rounded-md">
                <ToolCase size={20} />
                <p className="text-sm">Developer Tools & APIs</p>
              </div>
              <div className="p-4 border-2 border-dashed flex items-center gap-2 border-neutral-500 bg-neutral-900/90 rounded-md">
                <Bot size={20} />
                <p className="text-sm">AI-powered Applications</p>
              </div>
              <div className="p-4 border-2 border-dashed flex items-center gap-2 border-neutral-500 bg-neutral-900/90 rounded-md">
                <Building2 size={20} />
                <p className="text-sm">Industry-specific Platforms</p>
              </div>
              <div className="p-4 border-2 border-dashed flex items-center gap-2 border-neutral-500 bg-neutral-900/90 rounded-md">
                <Workflow size={20} />
                <p className="text-sm">Workflow Automation</p>
              </div>
            </div>
            <DiagonalPattern width={"100%"} height={6} className="my-5" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Rocket size={20} className="stroke-amber-400" />
              <h1 className="font-semibold text-xl">What&apos;s Coming</h1>
            </div>
            <p className="mx-7 text-neutral-300">
              We&apos;re just getting started.
            </p>
            <p className="mx-7 text-neutral-300">
              New products, technical articles, product announcements, and
              engineering insights will be published here as we continue
              expanding the <strong>HoardSpace</strong> ecosystem.
            </p>
            <DiagonalPattern width={"100%"} height={6} className="my-5" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Info size={20} className="stroke-amber-400" />
              <h1 className="font-semibold text-xl">About</h1>
            </div>
            <p className="mx-7 text-neutral-300">
              HoardSpace Technologies is the technology and product innovation
              initiative of <strong>HoardSpace</strong>, where we build software
              that helps businesses operate more efficiently and developers
              build faster.
            </p>
            <p className="mx-7 text-neutral-300">
              Whether it&apos;s a new SaaS product, an API, or an AI-powered
              solution, this is where our ideas become products.
            </p>
            <DiagonalPattern width={"100%"} height={6} className="my-5" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Contact size={20} className="stroke-amber-400" />
              <h1 className="font-semibold text-xl">Contact</h1>
            </div>
            <p className="text-neutral-300 mx-7">
              Contact us as{" "}
              <a href="mailto:ayantik.sarkar2020@gmail.com" className="font-semibold">
                ayantik.sarkar2020@gmail.com
              </a>
            </p>
            <DiagonalPattern width={"100%"} height={6} className="my-5" />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <div className="mt-auto w-full flex flex-col gap-2">
      <p className="text-neutral-600 text-sm font-semibold">
        &copy; {new Date().getFullYear()} HoardSpace Technologies
      </p>
      <p className="text-neutral-600 text-sm">
        A technology initiative by <strong>HoardSpace</strong>.
      </p>
    </div>
  );
};
