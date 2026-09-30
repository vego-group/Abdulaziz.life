'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import { WORK, WORK_PROJECTS } from '@/constants/data';
import SectionIntro from '@/components/ui/SectionIntro';
import Tag from '@/components/ui/Tag';
import type { WorkProject } from '@/types';

// Bottom-up photo overlays, per project, as in Figma.
const SCRIMS: Record<string, string> = {
  'business-transformation': 'from-scrim/65 to-transparent',
  'venture-ecosystem': 'from-scrim/65 to-transparent',
  mamsa: 'from-scrim/90 to-scrim/60',
  ithaba: 'from-scrim/80 to-scrim/40',
  'ev-share': 'from-scrim/90 to-scrim/32',
};

// Figma shows the Mamsa photo at its natural size (1024×572) offset 240px from the left, not cover-scaled.
const IMAGE_CLASSES: Record<string, string> = {
  mamsa:
    'absolute inset-0 size-full object-cover lg:inset-auto lg:top-0 lg:left-[-240px] lg:h-[572px] lg:w-[1024px] lg:max-w-none',
};

const indexLabel = (index: number) => String(index + 1).padStart(2, '0');

export default function WorkSection() {
  const { t } = useLanguage();
  const [featured, ...projects] = WORK_PROJECTS;

  return (
    <section id="work" className="border-t border-line">
      <SectionIntro heading={t(WORK.heading)} note={t(WORK.note)} />

      <div className="pt-12 lg:pt-22">
        <FeaturedProject project={featured} />
        {projects.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index + 1} imageFirst={index % 2 === 0} />
        ))}
      </div>
    </section>
  );
}

function ArrowLink({ href, label, large = false }: { href: string; label: string; large?: boolean }) {
  const { language } = useLanguage();
  return (
    <Link
      href={href}
      aria-label={label}
      className={`flex shrink-0 items-center justify-center border font-display text-fg transition-colors hover:border-fg ${
        large ? 'size-12 border-fg/25 text-18' : 'size-10 border-fg/30 text-16'
      }`}
    >
      {language === 'ar' ? '←' : '→'}
    </Link>
  );
}

function ViewProjectLink({ href }: { href: string }) {
  const { t } = useLanguage();
  return (
    <Link
      href={href}
      className="text-12 font-semibold tracking-label text-accent uppercase transition-colors hover:text-accent-soft"
    >
      {t(WORK.viewProject)}
    </Link>
  );
}

function FeaturedProject({ project }: { project: WorkProject }) {
  const { t } = useLanguage();

  return (
    <article className="border-t border-line">
      <div className="relative h-[480px] overflow-hidden bg-media sm:h-[560px] lg:h-[604px]">
        <Image src={project.image} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-scrim via-scrim/32 to-scrim/60" />

        {/* In Figma "01" sits under the tags; it is moved to the opposite corner so both stay visible. */}
        <span className="absolute start-12 top-10 font-mono text-11 leading-[17.6px] tracking-[2.2px] text-fg/35 max-sm:hidden">
          01
        </span>
        <ul className="absolute end-gutter top-10 flex flex-wrap gap-2.5 max-sm:start-gutter">
          {project.tags.map((tag) => (
            <li key={tag.en}>
              <Tag tone="overlay">{t(tag)}</Tag>
            </li>
          ))}
        </ul>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 px-gutter-md py-12">
          <div>
            <p className="text-14 leading-4 font-medium tracking-label text-white uppercase">{t(project.category)}</p>
            <h3 className="pt-3 font-display text-68 leading-[0.95] font-bold tracking-[-0.04em] text-fg">
              {t(project.title)}
            </h3>
            <p className="pt-4 text-16 leading-6 font-bold text-fg/60">{t(project.tagline)}</p>
          </div>
          {project.caseStudy && <ArrowLink href={project.caseStudy} label={t(WORK.viewProject)} large />}
        </div>
      </div>

      <div className="flex flex-col gap-6 border-b border-line bg-card px-gutter-md py-9 lg:flex-row lg:items-center lg:justify-between">
        {/* Figma reserves 77px (three lines) for the description, top-aligned. */}
        <p className="max-w-[592px] text-20 leading-[25.5px] font-semibold text-muted lg:min-h-[77px]">
          {t(project.description)}
        </p>
        {project.caseStudy && <ViewProjectLink href={project.caseStudy} />}
      </div>
    </article>
  );
}

function ProjectRow({ project, index, imageFirst }: { project: WorkProject; index: number; imageFirst: boolean }) {
  const { t } = useLanguage();

  return (
    // Rows alternate the image side; rows with the image on the start side also carry a top rule (Figma).
    <article className={`grid border-b border-line lg:grid-cols-2 ${imageFirst ? 'border-t' : ''}`}>
      <div
        className={`relative aspect-[685/440] overflow-hidden bg-media lg:aspect-auto lg:min-h-[440px] ${
          imageFirst ? '' : 'lg:order-last'
        }`}
      >
        {IMAGE_CLASSES[project.id] ? (
          <Image
            src={project.image}
            alt=""
            width={1024}
            height={572}
            sizes="(min-width: 1024px) 1024px, 100vw"
            className={IMAGE_CLASSES[project.id]}
          />
        ) : (
          <Image src={project.image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        )}
        <div className={`absolute inset-0 bg-linear-to-t to-55% ${SCRIMS[project.id]}`} />

        {project.logo && (
          <Image
            src={project.logo.src}
            alt=""
            width={project.logo.width}
            height={project.logo.height}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        )}

        <span className="absolute start-7 bottom-7 font-mono text-10 leading-4 tracking-[2px] text-fg/30">
          {indexLabel(index)}
        </span>
        {project.caseStudy && (
          <div className="absolute end-6 bottom-7">
            <ArrowLink href={project.caseStudy} label={t(WORK.viewProject)} />
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between gap-10 bg-card px-gutter py-10 lg:min-h-[440px] lg:px-12 lg:py-14">
        <div>
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag.en}>
                <Tag>{t(tag)}</Tag>
              </li>
            ))}
          </ul>
          <p className="pt-8 text-13 leading-4 font-medium tracking-label text-accent uppercase">{t(project.category)}</p>
          <h3 className="pt-4 text-32 leading-[36.8px] font-bold tracking-[-1px] text-fg">{t(project.title)}</h3>
          {/* Figma: start-side panels use a 529px description and a 14px tagline; end-side panels 583px and 15px. */}
          <p className={`pt-6 text-15 leading-[25.8px] text-muted ${imageFirst ? 'max-w-[583px]' : 'max-w-[529px]'}`}>
            {t(project.description)}
          </p>
          <p className={`pt-5 leading-[23.1px] text-muted opacity-75 ${imageFirst ? 'text-15' : 'text-14'}`}>
            {t(project.tagline)}
          </p>
        </div>
        {project.caseStudy && <ViewProjectLink href={project.caseStudy} />}
      </div>
    </article>
  );
}
