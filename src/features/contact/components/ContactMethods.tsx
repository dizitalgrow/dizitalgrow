"use client";

import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import {
  InstagramIcon,
  WhatsAppIcon,
  WhatsAppChannelIcon,
} from "@/components/ui/Icons";
import { CONTACT_METHODS } from "@/constants/site-data";
import { useSiteSettings } from "@/hooks/use-sanity-queries";
import { formatWhatsAppUrl } from "@/lib/utils";
import {
  WHATSAPP_CHANNEL_URL,
  VERIFIED_WHATSAPP_PHONE,
} from "@/constants/navigation";

export function ContactMethods() {
  const { data: siteSettings } = useSiteSettings();

  const activeChannelUrl =
    siteSettings?.whatsappChannelUrl || WHATSAPP_CHANNEL_URL;
  const activePhoneNumber =
    siteSettings?.whatsappNumber || VERIFIED_WHATSAPP_PHONE;

  const methods = CONTACT_METHODS.map((method) => {
    if (method.label.includes("Channel")) {
      return {
        ...method,
        href: activeChannelUrl,
      };
    }
    if (method.label.includes("Chat")) {
      const phone = activePhoneNumber || "+91 91871 26193";
      return {
        ...method,
        value: `${phone} (Chat only)`,
        href: formatWhatsAppUrl(
          phone,
          "Hi DizitalGrow, I would like to discuss a project."
        ),
      };
    }
    return method;
  });

  return (
    <div className="border border-[rgba(213,255,64,0.18)] bg-[#0A0A0A] p-6 sm:p-8">
      <span className="font-mono text-xs uppercase tracking-widest text-[#D5FF40] font-bold">
        {"// DIRECT CHANNELS"}
      </span>
      <h3 className="font-display mt-2 text-xl font-bold text-white uppercase">
        Verified Contacts
      </h3>
      <p className="mt-2 text-xs sm:text-sm text-[#B0B0B0] font-normal leading-relaxed">
        Prefer to write directly, message on WhatsApp, or follow our updates? Use our verified links below.
      </p>

      <ul className="mt-6 border-t border-[rgba(213,255,64,0.15)] divide-y divide-[rgba(213,255,64,0.1)]">
        {methods.map((method) => {
          const normalized = method.iconName?.toLowerCase() || "";
          const isChannel = method.label.toLowerCase().includes("channel");
          const Icon = normalized.includes("instagram")
            ? InstagramIcon
            : isChannel
            ? WhatsAppChannelIcon
            : normalized.includes("whatsapp")
            ? WhatsAppIcon
            : Mail;

          return (
            <li key={method.label}>
              <a
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center justify-between py-4 text-sm transition-colors hover:text-[#D5FF40]"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] bg-[#141414] border border-[rgba(213,255,64,0.2)] text-white transition-colors group-hover:bg-[#D5FF40] group-hover:text-[#050505] group-hover:border-[#D5FF40]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="block font-display font-bold text-white text-xs sm:text-sm uppercase group-hover:text-[#D5FF40] transition-colors">
                        {method.label}
                      </span>
                      {method.badge && (
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#D5FF40] bg-[#141414] border border-[rgba(213,255,64,0.2)] px-1.5 py-0.2 rounded-[2px]">
                          {method.badge}
                        </span>
                      )}
                    </div>
                    <span className="block text-[#B0B0B0] text-xs font-mono mt-0.5">
                      {method.value}
                    </span>
                    {method.description && (
                      <span className="block text-[#737373] text-[11px] leading-tight mt-1">
                        {method.description}
                      </span>
                    )}
                  </div>
                </div>

                <ArrowUpRight className="h-4 w-4 text-[#B0B0B0] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#D5FF40] shrink-0 ml-2" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );

}

