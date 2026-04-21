'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import { PROJECTS } from '@/constants/data';
import MaterialIcon from '@/components/ui/MaterialIcon';

export default function ProjectsSection() {
  const { language, t } = useLanguage();

  const featuredProject = PROJECTS.find(p => p.featured);
  const otherProjects = PROJECTS.filter(p => !p.featured);

  return (
    <section className="projects-bg" id="projects">
      <div className="container">
        <div className="text-center mb-12">
          <span className="section-label">
            {language === 'ar' ? 'محفظة الأعمال' : 'Portfolio'}
          </span>
          <h2 className="section-title">
            {language === 'ar' ? 'مشاريع استراتيجية' : 'Strategic Projects'}
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {featuredProject && (
          <div className="project-featured">
            <div className="project-img">
              <Image
                src={featuredProject.image}
                alt={t(featuredProject.name)}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="project-body">
              <div className="project-logo-badge">
                <div className="project-logo-icon">V</div>
                <div className="project-name">{t(featuredProject.name)}</div>
              </div>
              <p className="project-desc">{t(featuredProject.description)}</p>
              <div className="project-tags">
                {featuredProject.tags.map((tag, index) => (
                  <span key={index} className="tag">{t(tag)}</span>
                ))}
              </div>
              {featuredProject.link && (
                <Link 
                  href={featuredProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  <span>
                    {language === 'ar' ? 'عرض تفاصيل المشروع' : 'View Project Details'}
                  </span>
                  <MaterialIcon icon="arrow_back" className="text-[1.1rem]" />
                </Link>
              )}
            </div>
          </div>
        )}

        <div className="projects-secondary">
          {otherProjects.map((project) => (
            <div key={project.id} className="proj-card">
              <div className="proj-img">
                <Image
                  src={project.image}
                  alt={t(project.name)}
                  width={400}
                  height={190}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="proj-body">
                <h4 className="proj-title">{t(project.name)}</h4>
                <p className="proj-desc">{t(project.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
