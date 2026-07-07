import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/site-config";
import { Newsletter } from "@/components/layout/newsletter";
import { XIcon, InstagramIcon, FacebookIcon, YoutubeIcon, TelegramIcon } from "@/components/shared/social-icons";

const socials = [
  { icon: XIcon, href: siteConfig.links.twitter, label: "X" },
  { icon: InstagramIcon, href: siteConfig.links.instagram, label: "Instagram" },
  { icon: TelegramIcon, href: siteConfig.links.telegram, label: "Telegram" },
  { icon: FacebookIcon, href: siteConfig.links.facebook, label: "Facebook" },
  { icon: YoutubeIcon, href: siteConfig.links.youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/[0.06]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full opacity-70"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(30,79,255,0.12), transparent 70%)" }}
      />
      <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <Newsletter />

        <div className="grid grid-cols-2 gap-10 py-16 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative size-9 overflow-hidden rounded-xl ring-1 ring-cyan/30">
                <Image src="/brand/logo.png" alt="DMWin Game logo" fill sizes="36px" className="object-cover" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                DM<span className="text-gradient-blue">Win</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">{siteConfig.description}</p>
            <div className="flex flex-col gap-2.5 pt-2 text-sm text-muted-foreground">
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 hover:text-cyan-light">
                <Mail className="size-4 text-cyan/70" /> {siteConfig.contact.email}
              </a>
              <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 hover:text-cyan-light">
                <Phone className="size-4 text-cyan/70" /> {siteConfig.contact.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="size-4 text-cyan/70" /> {siteConfig.contact.address}
              </span>
            </div>
          </div>

          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Platform" links={footerLinks.platform} />
          <FooterColumn title="Legal" links={footerLinks.legal} />

          <div className="col-span-2 flex flex-col gap-4 sm:col-span-1">
            <p className="text-sm font-semibold text-white">Follow us</p>
            <div className="flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="glass-subtle flex size-10 items-center justify-center rounded-full text-white/70 transition-all hover:-translate-y-0.5 hover:text-cyan-light hover:shadow-[0_0_20px_-4px_rgba(56,189,248,0.6)]"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-8 text-xs text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="max-w-xl text-center sm:text-right">
            18+ Play Responsibly. Gaming may be habit-forming and financially risky. Please play within your means.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-semibold text-white">{title}</p>
      <div className="flex flex-col gap-2.5">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-cyan-light">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
