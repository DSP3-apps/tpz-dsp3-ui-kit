import { DropdownMenu, DropdownMenuItem } from '@/components/dropdown/DropdownMenu';
import { ExternalLink } from '@/components/links/ExternalLink';
import { Link } from '@/components/links/Link';
import { NavLink } from '@/utils/types';

type HeaderNavClientProps = {
  navLinks: NavLink[];
};

const NavItem = ({ label, url, icon, isExternal, ...props }: DropdownMenuItem<NavLink>) => {
  return isExternal ? (
    <ExternalLink href={url} {...props}>
      {icon ?? null}
      <span>{label}</span>
    </ExternalLink>
  ) : (
    <Link {...props} href={url}>
      {icon ?? null}
      <span>{label}</span>
    </Link>
  );
};

export const HeaderNavClient = ({ navLinks }: HeaderNavClientProps) => {
  return (
    <>
      <nav className="block sm:hidden" aria-label="Small Screen Navigation">
        <DropdownMenu
          items={navLinks}
          itemRenderer={NavItem}
          itemClassName="text-black cursor-pointer px-2 py-1 gap-1 text-base flex items-center shrink-0"
        />
      </nav>

      <nav
        className="hidden sm:block col-span-full sm:col-span-1 sm:justify-self-end sm:gap-4 min-w-0 px-2 gap-2"
        aria-label="Large Screen Navigation"
      >
        <ul className="flex flex-row gap-2 order-1 shrink-0">
          {navLinks.map((link) => (
            <li key={link.label} className="w-full py-1">
              <NavItem
                {...link}
                className="text-black visited:text-black active:text-black hover:text-black gap-1 text-base flex items-center
                  justify-center shrink-0 w-max"
              />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
