import { Copyright } from '@/components/layout/footer/Copyright';
import { Licence } from '@/components/layout/footer/Licence';
import { MetaLinks } from '@/components/layout/footer/MetaLinks';

export const Footer = () => (
  <footer className="border-2 border-t-gray-200 bg-gray-100 p-3 flex items-center justify-center">
    <div
      className="grid w-full max-w-7xl gap-2 grid-cols-1 md:grid-cols-[1fr_min-content]
        grid-rows-[min-content_min-content_min-content] md:grid-rows-[min-content_min-content]"
    >
      <nav className="row-start-1 col-start-1 md:col-span-2 w-full pb-2">
        <h2 className="sr-only">Support Links</h2>

        <MetaLinks />
      </nav>

      <div className="row-start-2 col-start-1 pt-1">
        <Licence />
      </div>

      <div className="row-start-3 col-start-1 md:row-start-2 md:col-start-2 w-full h-min">
        <Copyright />
      </div>
    </div>
  </footer>
);
