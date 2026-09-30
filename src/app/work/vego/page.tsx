import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import VegoCaseStudy from '@/components/case-study/VegoCaseStudy';
import { VEGO_CASE_STUDY } from '@/constants/data';

export const metadata: Metadata = VEGO_CASE_STUDY.meta;

export default function VegoCaseStudyPage() {
  return (
    <>
      <Header />
      <main>
        <VegoCaseStudy />
      </main>
      <Footer />
    </>
  );
}
