import React from "react";
import msLogo from "../assets/brands/microsoft.svg";
import xinkLogo from "../assets/brands/xink.svg";
import googleLogo from "../assets/brands/google.svg";
import proxmoxLogo from "../assets/brands/proxmox.svg";
import unraidLogo from "../assets/brands/unraid.svg";
import unifiLogo from "../assets/brands/unifi.svg";
import tplinkLogo from "../assets/brands/tplink.svg";
import omadaLogo from "../assets/brands/omada.svg";
import cloudflareLogo from "../assets/brands/cloudflare.svg";
import claudeLogo from "../assets/brands/claude.svg";
import openaiLogo from "../assets/brands/openai.svg";

// White-on-dark brand marks, shown inside small dark chips so they stay
// visible on any background.
export const brandLogos = {
  microsoft: { name: "Microsoft", logo: msLogo },
  xink: { name: "Xink Signatures", logo: xinkLogo },
  google: { name: "Google", logo: googleLogo },
  proxmox: { name: "Proxmox", logo: proxmoxLogo },
  unraid: { name: "Unraid", logo: unraidLogo },
  unifi: { name: "UniFi", logo: unifiLogo },
  tplink: { name: "TP-Link", logo: tplinkLogo },
  omada: { name: "Omada", logo: omadaLogo },
  cloudflare: { name: "Cloudflare", logo: cloudflareLogo },
  claude: { name: "Claude", logo: claudeLogo },
  openai: { name: "OpenAI", logo: openaiLogo },
};

export const BrandStrip = ({ brands = [], label = "Works with", className = "" }) => (
  <div className={className}>
    {label && (
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
        {label}
      </p>
    )}
    <div className="mt-3 flex flex-wrap items-center gap-2.5">
      {brands.map((b) => {
        const item = brandLogos[b];
        if (!item) return null;
        return (
          <span
            key={b}
            data-testid={`brand-${b}`}
            title={item.name}
            className="inline-flex items-center justify-center rounded-lg bg-[#0e1728] px-3.5 py-2 ring-1 ring-black/5 hover:bg-[#16233f] transition-colors"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="h-4 md:h-[18px] w-auto"
            />
          </span>
        );
      })}
    </div>
  </div>
);

export default BrandStrip;
