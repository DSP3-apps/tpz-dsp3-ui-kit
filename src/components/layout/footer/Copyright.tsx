import { ExternalLink } from '@/components/links/ExternalLink';

export const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <ExternalLink
      className="text-black text-balance sm:text-nowrap text-center sm:text-left justify-start"
      href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/"
    >
      &copy; Crown Copyright {currentYear}
    </ExternalLink>
  );
};
