'use client';

import { useState, type FormEvent, type ReactNode } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { ABOUT, BIO_INFO, CONSULTATION_TYPES, CONTACT } from '@/constants/data';
import { submitConsultationRequest, validateConsultationRequest } from '@/lib/api';

const inputClass =
  'block w-full border-b bg-transparent text-16 font-light text-fg outline-none transition-colors placeholder:text-fg/50 focus:border-accent-soft';

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block pb-2 text-10 leading-[15px] tracking-label text-muted uppercase">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ContactSection() {
  const { language, t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { fields } = CONTACT;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    setIsSuccess(false);
    setError(null);

    const formData = new FormData(form);
    const company = String(formData.get('company') ?? '').trim();
    const message = String(formData.get('request_details') ?? '').trim();
    const requestData = {
      fullname: String(formData.get('fullname') ?? ''),
      email: String(formData.get('email') ?? ''),
      consultation_type: String(formData.get('consultation_type') ?? ''),
      // The API has no company field, so it is prepended to the request details.
      request_details: company ? `${t(CONTACT.companyPrefix)}${company}\n\n${message}` : message,
    };

    const validation = validateConsultationRequest(requestData);
    if (!validation.valid) {
      setError(language === 'ar' ? t(CONTACT.invalid) : validation.errors[0]);
      setIsSubmitting(false);
      return;
    }

    const result = await submitConsultationRequest(requestData);
    if (result.success) {
      setIsSuccess(true);
      form.reset();
    } else {
      // Network/API details are logged by submitConsultationRequest; users get the friendly message.
      setError(t(CONTACT.failed));
    }
    setIsSubmitting(false);
  };

  const details = [
    {
      label: ABOUT.profileFields.email,
      value: (
        <a href={`mailto:${BIO_INFO.email}`} className="transition-colors hover:text-accent-soft">
          {BIO_INFO.email}
        </a>
      ),
    },
    {
      label: ABOUT.profileFields.phone,
      value: (
        <a href={`tel:${BIO_INFO.phone.replace(/\s/g, '')}`} dir="ltr" className="transition-colors hover:text-accent-soft">
          {BIO_INFO.phone}
        </a>
      ),
    },
    { label: ABOUT.profileFields.location, value: t(BIO_INFO.location) },
  ];

  const status = error ?? (isSuccess ? t(CONTACT.success) : null);

  return (
    <section id="contact" className="border-t border-line">
      {/* Heading block */}
      <div className="mx-auto max-w-page px-gutter pt-section-lg lg:ps-gutter-lg lg:pe-gutter-md">
        {/* Figma insets the heading 20px more than the rest of the block. */}
        <h2 data-reveal className="text-100 leading-[1.0706] font-bold tracking-[-0.05em] text-balance text-fg lg:ms-5 lg:text-wrap">
          {CONTACT.heading.map((line) => (
            <span key={line.en} className="block">
              {t(line)}
            </span>
          ))}
        </h2>
        <div className="mt-12 flex flex-col items-start gap-8 border-b border-line pb-12 lg:mt-[166.5px] lg:min-h-[186.43px] lg:flex-row lg:justify-between lg:pb-0">
          <p data-reveal className="max-w-[588px] text-16 leading-[28.48px] text-muted">{t(CONTACT.intro)}</p>
          {/* The wrapper carries the reveal so the link keeps its own colour transition. */}
          <div data-reveal className="flex shrink-0 lg:mt-[18.63px]">
            <a
              href="#contact-form"
              className="border border-line py-[18px] ps-8 pe-6 text-14 leading-[22.4px] font-semibold tracking-label text-fg uppercase transition-colors hover:border-muted hover:bg-surface"
            >
              {t(CONTACT.startCta)}
            </a>
          </div>
        </div>
      </div>

      {/* Contact details and "available for" */}
      <div className="border-b border-line">
        <div className="mx-auto grid max-w-page px-gutter lg:min-h-[541px] lg:grid-cols-[minmax(0,580.5px)_minmax(0,580.5px)] lg:justify-end lg:gap-x-8 lg:px-gutter-lg">
          <div className="py-12 lg:py-18">
            <p data-reveal className="text-13 leading-4 font-medium tracking-[1px] text-muted uppercase">
              {t(CONTACT.contactLabel)}
            </p>
            <dl data-reveal className="mt-10">
              {details.map((row) => (
                <div key={row.label.en} className="border-b border-line py-7 last:border-b-0">
                  <dt className="font-mono text-9 leading-[14.4px] tracking-[1.8px] text-accent uppercase">{t(row.label)}</dt>
                  <dd className="mt-2.5 text-18 leading-8 font-medium text-fg">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col justify-center border-t border-line py-12 lg:border-s lg:border-t-0 lg:py-18 lg:pe-20">
            <p data-reveal className="text-13 leading-4 font-medium tracking-[1px] text-muted uppercase lg:ps-20">
              {t(CONTACT.availableLabel)}
            </p>
            <ul data-reveal className="mt-10">
              {CONTACT.available.map((item) => (
                <li
                  key={item.en}
                  className="border-b border-line py-5 text-22 leading-[38.4px] font-semibold tracking-[-0.22px] text-fg last:border-b-0 lg:ps-20"
                >
                  {t(item)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Form row */}
      <div className="mx-auto flex max-w-page flex-col gap-12 px-gutter pt-section lg:flex-row lg:items-start lg:gap-0 lg:ps-gutter-lg lg:pe-gutter-md">
        <div className="relative lg:flex-1">
          <h3 data-reveal className="text-42 leading-[43.7px] font-bold tracking-[-1px] text-fg lg:py-6">{t(CONTACT.formHeading)}</h3>
          <p data-reveal className="mt-6 max-w-[434px] text-20 leading-[28.9px] font-medium text-muted lg:mt-8">{t(CONTACT.formIntro)}</p>
          <p data-reveal className="mt-12 lg:absolute lg:inset-x-0 lg:top-[226.7px] lg:mt-0">
            <span className="block font-display text-90 leading-[0.958] font-bold tracking-[-4px] text-line lg:h-[111px]">
              {t(CONTACT.tagline[0])}
            </span>
            <span className="mt-2 block max-w-[523px] text-90 leading-[0.958] font-bold tracking-[-4px] text-fg">
              {t(CONTACT.tagline[1])}
            </span>
          </p>
        </div>

        <form
          id="contact-form"
          data-reveal
          onSubmit={handleSubmit}
          className="flex flex-col pb-section lg:w-[684.5px] lg:shrink-0 lg:py-section lg:ps-20 lg:pe-18"
        >
          <p className="self-end font-geist text-10 leading-[15px] tracking-[2px] text-accent-soft uppercase">
            {t(CONTACT.formLabel)}
          </p>

          <div className="mt-11 grid gap-x-10 gap-y-1 sm:grid-cols-2">
            <Field id="contact-name" label={t(fields.name.label)}>
              <input
                id="contact-name"
                name="fullname"
                type="text"
                required
                autoComplete="name"
                placeholder={t(fields.name.placeholder)}
                className={`${inputClass} h-[55px] border-line pt-[15px] pb-2`}
              />
            </Field>
            <Field id="contact-email" label={t(fields.email.label)}>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder={t(fields.email.placeholder)}
                className={`${inputClass} h-[55px] border-line pt-[15px] pb-2`}
              />
            </Field>
          </div>

          <div className="mt-1">
            <Field id="contact-company" label={t(fields.company.label)}>
              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder={t(fields.company.placeholder)}
                className={`${inputClass} h-[55px] border-line pt-[15px] pb-2`}
              />
            </Field>
          </div>

          <div className="mt-7">
            <Field id="contact-topic" label={t(fields.topic.label)}>
              <div className="relative">
                <select
                  id="contact-topic"
                  name="consultation_type"
                  required
                  defaultValue=""
                  className={`${inputClass} h-[54px] cursor-pointer appearance-none border-line-strong pe-10`}
                >
                  <option value="" disabled>
                    {t(fields.topic.placeholder)}
                  </option>
                  {CONSULTATION_TYPES.map((type) => (
                    <option key={type.en} value={t(type)} className="bg-ink text-fg">
                      {t(type)}
                    </option>
                  ))}
                </select>
                {/* Figma chevron used as a mask so it follows the text color in both themes. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute end-5 top-1/2 h-1.5 w-2.5 -translate-y-1/2 bg-fg [mask:url(/icons/chevron-down.svg)_center/contain_no-repeat]"
                />
              </div>
            </Field>
          </div>

          <div className="mt-7">
            <Field id="contact-message" label={t(fields.message.label)}>
              <textarea
                id="contact-message"
                name="request_details"
                required
                placeholder={t(fields.message.placeholder)}
                className={`${inputClass} h-[127px] resize-none border-line py-[15px] leading-6`}
              />
            </Field>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-12 h-14 w-full rounded-submit bg-accent px-10 text-13 font-semibold tracking-label text-on-accent transition hover:brightness-110 active:scale-[0.99] disabled:cursor-wait disabled:opacity-60"
          >
            {isSubmitting ? t(CONTACT.sending) : t(CONTACT.submit)}
          </button>

          <p
            role="status"
            aria-live="polite"
            className={status ? `mt-4 text-13 ${error ? 'text-danger' : 'text-accent-soft'}` : undefined}
          >
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
