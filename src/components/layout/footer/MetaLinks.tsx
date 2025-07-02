import { ExternalLink } from '@/components/links/ExternalLink';

const LINKS = [
  {
    label: 'Accessibility statement',
    url: '/support/faqs/275810340/275810354',
  },
  {
    label: 'Cookie Policy',
    url: '/help/cookies',
  },
  {
    label: 'Terms and Conditions',
    url: '/support/faqs/275811163/275811177',
  },
  {
    label: 'Privacy',
    url: '/support/faqs/275811163/275811229',
  },
  {
    label: 'Contact Us',
    url: '/support',
  },
];

export const MetaLinks = () => (
  <ul className="flex w-full flex-wrap gap-x-4 gap-y-2 md:gap-6 text-xs md:justify-start">
    {LINKS.map((link) => (
      <li className="flex" key={link.label}>
        <ExternalLink className="text-black md:text-left" href={link.url}>
          {link.label}
        </ExternalLink>
      </li>
    ))}
  </ul>
);
