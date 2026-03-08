"use client";

import { ArrowDownToLine, X } from "lucide-react";

export default function ThankYouModal({
  open,
  onClose,
  pdfUrl = "/tubehelper_services_brochure.pdf",
  pdfLabel = "Download the Growth Guide (PDF)",
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/55 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Thank you message"
    >
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Thank you!</h3>
            <p className="mt-2 text-sm text-gray-600">
              Your details were submitted successfully. Our team will reach out
              within 24 hours.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 text-gray-500 transition hover:bg-gray-100 hover:text-black"
            aria-label="Close thank you message"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm font-medium text-gray-800">
            Want a quick start?
          </p>
          <p className="mt-1 text-sm text-gray-600">
            Grab our PDF guide with actionable growth steps.
          </p>
          <a
            href={pdfUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center gap-1 justify-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
           <ArrowDownToLine className="w-5 h-5" /> {pdfLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
