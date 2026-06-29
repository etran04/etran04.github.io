import { resume } from "@/data/resume";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const { email, linkedin, phone } = resume.links;

  return (
    <section
      id="contact"
      className="animate-fade-in scroll-mt-20 border-t border-zinc-200 py-20 dark:border-zinc-800"
      aria-labelledby="contact-heading"
    >
      <SectionHeading id="contact-heading" title="Contact" />
      <p className="mb-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
        Open to new opportunities and conversations. Reach out via email or
        LinkedIn — I&apos;d love to hear from you.
      </p>
      <div className="flex flex-wrap gap-4">
        <Button href={`mailto:${email}`}>
          <Mail className="h-4 w-4" />
          {email}
        </Button>
        <Button href={linkedin} target="_blank" rel="noopener noreferrer" variant="secondary">
          <ExternalLink className="h-4 w-4" />
          LinkedIn
        </Button>
        <Button href={`tel:${phone}`} variant="secondary">
          <Phone className="h-4 w-4" />
          {resume.phone}
        </Button>
      </div>
      <p className="mt-8 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
        <MapPin className="h-4 w-4" />
        {resume.location}
      </p>
    </section>
  );
}
