import { OglLogo } from '@/components/images/OglLogo';
import { ExternalLink } from '@/components/links/ExternalLink';

export const Licence = () => (
  <div className="flex gap-2 w-full items-center">
    <OglLogo className="inline h-9 w-9" aria-hidden />

    <span className="text-xs text-black break-words flex-auto">
      All content is available under the{' '}
      <ExternalLink
        className="inline-flex break-words min-w-0 text-black"
        href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
      >
        Open Government Licence v3.0
      </ExternalLink>
      , except where otherwise stated.
    </span>
  </div>
);
