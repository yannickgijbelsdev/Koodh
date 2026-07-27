import React from "react";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export const MockupInfo = ({ testId }) => (
  <TooltipProvider delayDuration={100}>
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          aria-label="Image information"
          data-testid={testId}
          className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm ring-1 ring-white/25 transition-colors hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <Info size={15} strokeWidth={2} />
        </button>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        align="end"
        className="max-w-[280px] bg-neutral-900 text-[11px] leading-relaxed text-neutral-200 px-3 py-2"
      >
        Illustrative mockup, not a real client environment. Kept fictional on
        purpose to protect our clients&rsquo; privacy and security.
        &ldquo;Kootah&rdquo; is just an informal, internal nickname for Koodh.
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default MockupInfo;
