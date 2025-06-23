"use client";

import WebsiteLogo from "@/components/WebsiteLogo";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function HomeComponent() {
  const t = useTranslations("Home");
  const { locale } = useParams();

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-24 text-center">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl dark:text-gray-200">
          WeChat Official Account{" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative"> Editor </span>{" "}
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-2xl tracking-tight text-slate-700 dark:text-slate-500">
          {t("description")}
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <div className="mt-10 flex justify-center gap-4">
              <a
                href="#download"
                className="rounded-lg bg-blue-500 px-6 py-3 text-lg font-semibold text-white shadow hover:bg-blue-700 transition"
              >
                Download
              </a>
              <a
                href={`/${locale}/editor`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-300 px-6 py-3 text-lg font-semibold text-slate-900 dark:text-gray-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                Try Editor
              </a>
            </div>
        </div>
      </section>

      <section
  id="download"
  className="bg-gray-50 py-16 flex flex-col items-center"
>
  <span className="mb-4 inline-block rounded-lg bg-blue-100 px-4 py-2 text-blue-700 font-medium">
    <svg className="inline mr-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
    Get Started
  </span>
  <h2 className="text-4xl font-bold text-slate-900 mb-2">Download WX-Editor</h2>
  <p className="mb-10 text-lg text-slate-600">Get started with WX-Editor on your platform of choice</p>
  <div className="flex flex-col md:flex-row gap-8">
    {/* Windows Card */}
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-transparent hover:border-blue-400 transition-all duration-300 p-8 flex flex-col items-center w-80 transform hover:-translate-y-2">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-4">
        {/* Windows logo */}
        <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none">
          {/* <rect width="48" height="48" fill="#2196F3"/> */}
          <path fill="#fff" d="M3 3v8h8V3H3zm10 0v8h8V3h-8zM3 13v8h8v-8H3zm10 0v8h8v-8h-8z"/>
        </svg>
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-slate-900">Windows</h3>
      <a
        href={`/${locale}/download/windows`}
        className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-500 to-blue-400 px-6 py-3 text-sm font-semibold text-white flex items-center justify-center gap-2 shadow hover:from-blue-600 hover:to-blue-500 transition-all duration-200"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 16a4 4 0 0 1-.88-7.903A5 5 0 1 1 15.9 6H16a5 5 0 0 1 1 9.9M9 19l3 3m0 0l3-3m-3 3V10" /></svg>
        Download for Windows
      </a>
    </div>
    {/* macOS Card */}
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-transparent hover:border-blue-400 transition-all duration-300 p-8 flex flex-col items-center w-80 transform hover:-translate-y-2">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-4">
        {/* macOS logo */}
        <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none">
          {/* <rect width="48" height="48" fill="#2196F3"/> */}
          <path fill="#fff" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-slate-900">macOS</h3>
      <a
        href={`/${locale}/download/macos`}
        className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-500 to-blue-400 px-6 py-3 text-sm font-semibold text-white flex items-center justify-center gap-2 shadow hover:from-blue-600 hover:to-blue-500 transition-all duration-200"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 16a4 4 0 0 1-.88-7.903A5 5 0 1 1 15.9 6H16a5 5 0 0 1 1 9.9M9 19l3 3m0 0l3-3m-3 3V10" /></svg>
        Download for macOS
      </a>
    </div>
  </div>
</section>

      <section className="py-16">
        <h2
          id="who-is-using"
          className="text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-gray-200 mb-12"
        >
          {t("whoIsUsing")}
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {WEBSITE_LOGO_DEMO.map((website) => (
            <a
              key={website.name}
              href={website.url}
              className="flex flex-col items-center p-4 w-[160px]"
            >
              <WebsiteLogo url={website.url} size={36} className="mb-3" />
              <p className="mt-3 line-clamp-2 h-[3rem] text-sm text-slate-600 dark:text-slate-400 text-center">
                {website.name}
              </p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

const WEBSITE_LOGO_DEMO = [
  { name: "J Blog", url: "https://weijunext.com/" },
  { name: "OG Image Generator", url: "https://ogimage.click/" },
  { name: "Next Idea", url: "https://nextidea.dev/" },
  { name: "newTab", url: "https://ntab.dev/" },
  { name: "NextJS 中文文档", url: "https://nextjscn.org/" },
];
