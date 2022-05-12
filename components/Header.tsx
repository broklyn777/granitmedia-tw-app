import { ChipIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaAndroid, FaApple } from 'react-icons/fa'
import { GrTwitter } from 'react-icons/gr'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header className={`${isScrolled && 'bg-[#eabf83]'}`}>
      <div className=" flex items-center space-x-2 md:space-x-10 ">
        <img
          src="https://granitmedia.se/wp-content/uploads/logo-2l-1.png"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex ">
          <li className="headerLink">Hem</li>
          <li className="headerLink">Tjänster</li>
          <li className="headerLink">Portfolio</li>
          <li className="headerLink">Blog</li>
          <li className="headerLink">Kontakt</li>
        </ul>
      </div>
      <div className="m-4 flex cursor-pointer items-center space-x-4 text-sm font-light">
        {/* <SearchIcon className="hidden h-6 w-6 sm:inline" /> */}
        <FaAndroid className=" h-6 w-6" />
        <FaApple className=" h-16 w-16" />
        <GrTwitter className=" h-6  w-6 " />
        <Link href="https://www.twitch.tv/">
          <img
            src="https://pbs.twimg.com/profile_images/1450901581876973568/0bHBmqXe_400x400.png"
            alt=""
            className=" h-8 w-8 cursor-pointer rounded"
          />
        </Link>
        <p className="hidden lg:inline">Priser</p>
        <ChipIcon className=" h-6 w-6" />
        <Link href="https://www.youtube.com/">
          <img
            src="https://pbs.twimg.com/profile_images/1427292844612595720/RC1YSvuT_400x400.jpg"
            alt=""
            className=" h-8 w-8 cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
