import { FiFileText } from 'react-icons/fi'

import { NavLink } from './navlink'
import { LuGalleryVerticalEnd } from 'react-icons/lu'

export function Header() {
  return (
    <>
      <header
        className="bg-[rgba(0,0,0,0.9)] border-b-[1px] border-b-[#333]
        px-6 sticky top-0 z-50 w-full hidden sm:block"
      >
        <div className="max-w-[1200px] w-full mx-auto h-24">
          <div className="h-full w-full flex items-center justify-between">
            <div>
              <h1 className="font-bold text-xl">Sophia Pedrosa</h1>
              <span>Confeiteira profissional</span>
            </div>

            <nav className="flex gap-4 items-center">
              <NavLink
                title="portfolio"
                path="/"
                icon={<LuGalleryVerticalEnd />}
              />
              <NavLink title="cv" path="/cv" icon={<FiFileText />} />
            </nav>
          </div>
        </div>
      </header>

      <div
        className="bg-[rgba(0,0,0,0.9)] border-b-[1px] border-b-[#333]
          px-6 py-2 sticky top-0 z-50 w-full block sm:hidden"
      >
        <div>
          <h1 className="font-bold text-base">Sophia Pedrosa</h1>
          <span className="text-sm">Confeiteira profissional</span>
        </div>
      </div>

      <header
        className="bg-[rgba(0,0,0,0.9)] border-b-[1px] border-b-[#333]
          px-6 fixed bottom-0 z-50 w-full block sm:hidden"
      >
        <nav className="flex gap-4 items-center justify-evenly w-full mx-auto h-16">
          <NavLink title="portfolio" path="/" icon={<LuGalleryVerticalEnd />} />
          <NavLink title="cv" path="/cv" icon={<FiFileText />} />
        </nav>
      </header>
    </>
  )
}
