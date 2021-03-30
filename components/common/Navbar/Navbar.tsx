import { FC } from 'react'
import Link from 'next/link'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import NavbarRoot from './NavbarRoot'
import s from './Navbar.module.css'

const Navbar: FC = () => (
  <NavbarRoot>
    <Container>
      <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
        <div className="flex items-center flex-1">
          <a aria-label="Logo">
            <a
              title="Hack Club"
              href="https://hackclub.com/"
              className="nav-flag"
            >
              <style jsx>{`
                a {
                  display: inline-block;
                  background-image: url(https://assets.hackclub.com/flag-orpheus-top.svg);
                  background-repeat: no-repeat;
                  background-position: top left;
                  background-size: contain;
                  cursor: pointer;
                  flex-shrink: 0;
                  width: 112px;
                  height: 48px;
                  position: absolute;
                  top: 0;
                }
                @media (min-width: 32em) {
                  a {
                    height: 64px;
                  }
                }
                @media (prefers-reduced-motion: no-preference) {
                  a {
                    transition: ${3 / 16}s cubic-bezier(0.375, 0, 0.675, 1)
                      transform;
                    transform-origin: top left;
                  }
                  a:hover,
                  a:focus {
                    animation: waveFlag 0.5s linear infinite alternate;
                  }
                }
                @keyframes waveFlag {
                  from {
                    transform: rotate(0deg);
                  }
                  to {
                    transform: rotate(-5deg);
                  }
                }
              `}</style>
            </a>
          </a>
          <nav className="hidden ml-36 space-x-4 lg:block">
            <Link href="/">
              <a className={s.link}>Home</a>
            </Link>
            <Link href="/search/clothes">
              <a className={s.link}>Clothes</a>
            </Link>
            <Link href="/search/development-boards">
              <a className={s.link}>Development Boards</a>
            </Link>
          </nav>
        </div>

        <div className="flex justify-end flex-1 space-x-8">
          <div className="hidden lg:block">
            <Searchbar />
          </div>
          <UserNav />
        </div>
      </div>

      <div className="flex pb-4 lg:px-6 lg:hidden">
        <Searchbar id="mobile-search" />
      </div>
    </Container>
  </NavbarRoot>
)

export default Navbar
