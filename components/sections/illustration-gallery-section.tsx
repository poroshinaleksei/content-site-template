import Image from "next/image";

import type { IllustrationGallerySection as IllustrationGallerySectionConfig } from "@/config/types";

import { SectionShell } from "./section-shell";

type IllustrationGallerySectionProps = {
  section: IllustrationGallerySectionConfig;
};

export function IllustrationGallerySection({ section }: IllustrationGallerySectionProps) {
  return (
    <SectionShell className="border-y border-border bg-muted/55">
      <div className="max-w-3xl">
        {section.title ? (
          <h2 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
            {section.title}
          </h2>
        ) : null}
        {section.body ? (
          <p className="mt-4 text-lg leading-8 text-muted-foreground">{section.body}</p>
        ) : null}
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {section.images.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-md border border-border bg-surface"
          >
            <div className="relative aspect-[3/2]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            {image.caption ? (
              <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
                {image.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </SectionShell>
  );
}
