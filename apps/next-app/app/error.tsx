"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
    // @ts-ignore
    Sentry.feedbackIntegration()
      .createWidget({ autoInject: false })
      ?.openDialog();
  }, [error]);

  return (
    <main className="relative isolate min-h-full">
      <img
        src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
      />
      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <Image
          className="mx-auto h-10 w-auto"
          src="/logotype_white.svg"
          alt="Doldadress"
          width={0}
          height={0}
          priority
        />
        {error.message && (
          <p className="mt-4 text-base font-semibold leading-8 text-white">
            {error.message}
          </p>
        )}
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Något gick fel!
        </h1>
        <p className="mt-4 text-base text-white/70 sm:mt-6">
          Tyvärr uppstod ett internt fel.
        </p>
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => reset()}
            className="text-sm font-semibold leading-7 text-white"
          >
            <span aria-hidden="true">&larr;</span> Prova igen
          </button>
        </div>
      </div>
    </main>
  );
}
