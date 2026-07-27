import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import PageHero from "../components/PageHero";
import FeatureRow from "../components/FeatureRow";
import CtaBand from "../components/CtaBand";
import usePageMeta from "../lib/seo";
import kootahMicrosoft365 from "../assets/kootah-microsoft365.png";
import kootahSignature from "../assets/kootah-signature.png";

export default function Microsoft365() {
  usePageMeta({
    title: "Microsoft 365 & E-mail Signatures",
    description:
      "Koodh sets up and manages Microsoft 365 \u2014 mail, Teams and files \u2014 and creates consistent, professional e-mail signatures with Xink for your whole team.",
    path: "/microsoft-365",
  });

  return (
    <>
      <Header />
      <main className="pt-[68px] bg-white">
        <PageHero
          eyebrow="Microsoft 365 & e-mail signatures"
          title={
            <>
              Your business, in the{" "}
              <span className="font-script" style={{ color: "#3f5b9e" }}>
                cloud
              </span>
            </>
          }
          subtitle={
            "We get your team up and running on Microsoft 365 and make every e-mail look sharp with consistent Xink signatures."
          }
          chips={["Microsoft 365 setup", "Migration", "Teams & files", "Xink signatures"]}
        />

        <FeatureRow
          title="Microsoft"
          script="365"
          text={
            "Mail, Teams, files and collaboration \u2014 all in one secure, familiar place. We set it up, migrate your existing data and keep everything running so your team can simply get to work."
          }
          features={[
            { title: "Setup & migration", text: "Move your mail and files to Microsoft 365 without the headaches or downtime." },
            { title: "Teams & collaboration", text: "Chat, meet and work together on documents from anywhere, on any device." },
            { title: "Secure by default", text: "Sensible security and backups so your business data stays protected." },
            { title: "Day-to-day management", text: "New starters, licences and questions \u2014 we handle the admin for you." },
          ]}
          image={kootahMicrosoft365}
          imgAlt="Koodh Microsoft 365 cloud workspace"
          infoTestId="m365-info"
          caption={{ title: "Microsoft 365 Cloud", sub: "Setup, migration & day-to-day management" }}
        />

        <FeatureRow
          title="Xink"
          script="e-mail signatures"
          text={
            "Give every message a professional, on-brand finish. With Xink we roll out consistent e-mail signatures across your whole team \u2014 centrally managed, always up to date and looking great on every device."
          }
          features={[
            { title: "One consistent look", text: "Every colleague sends mails with the same polished, on-brand signature." },
            { title: "Centrally managed", text: "Update details or campaigns once and they apply to the whole team instantly." },
            { title: "Works everywhere", text: "Looks sharp in Outlook, on the web and on mobile devices." },
            { title: "Little promo banners", text: "Add subtle banners to promote news, events or offers in every e-mail." },
          ]}
          image={kootahSignature}
          imgAlt="Koodh Xink e-mail signature design"
          reverse
          tinted
          infoTestId="signature-info"
          caption={{ title: "Xink E-mail Signatures", sub: "Consistent, professional signatures for your whole team" }}
        />

        <CtaBand
          title={
            <>
              Let&rsquo;s set up your{" "}
              <span className="font-script text-[#c7d3f2]">cloud</span>
            </>
          }
        />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
