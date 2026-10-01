interface SectionIntroProps {
  heading: string;
  note?: string;
  // Heading width; Figma uses 946px. Override when a heading needs a different line break.
  headingWidthClass?: string;
}

// Section opener used by Expertise and Work: an 80px heading on the start side and a short note
// at the far end, bottom-aligned. Figma: heading box 946px wide, 365px tall (3 lines + 44px).
export default function SectionIntro({ heading, note, headingWidthClass = 'max-w-[946px]' }: SectionIntroProps) {
  return (
    <div className="mx-auto max-w-page px-gutter pt-section">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <h2
          data-reveal
          className={`${headingWidthClass} text-80 leading-[1.338] font-bold tracking-[-0.05em] text-balance text-fg lg:min-h-[365px] lg:pb-11 lg:text-wrap`}
        >
          {heading}
        </h2>
        {note && (
          <p data-reveal className="max-w-[250px] shrink-0 text-15 leading-[24.5px] font-bold text-muted lg:pb-2">{note}</p>
        )}
      </div>
    </div>
  );
}
