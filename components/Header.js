import Image from 'next/image'
import { GlobeAsiaAustraliaIcon,Bars3Icon,UsersIcon,UserCircleIcon,MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function Header() {
  return (
<header class="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-2 px-10 md:px-14">


{/* Left */}
  <div className='relative flex h-10 cursor-pointer items-center my-auto'>
    <Image src='https://links.papareact.com/qd3' objectPosition='left' objectFit='contain' layout='fill'/>
     
    </div>

    {/* Middle -search */}
    <div className='flex md:shadow-sm items-center md:border-2 rounded-full py-2'>
      <input className='flex-grow pl-5 bg-transparent text-sm text-gray-600 placeholder-grey-600 outline-none' type='text' placeholder='Хайх'/>
      <MagnifyingGlassIcon className='cursor-pointer hidden md:inline-flex h-8 rounded-lg  p-2'/>

    </div>

  {/* Right */}
  <div className='flex items-center justify-end text-gray-500 space-x-4'>
<p className='hidden md:inline'>become a host</p>
<GlobeAsiaAustraliaIcon className='h-6 cursor-pointer'/>
<div className='flex space-x-2 border-2 p-2 rounded-full items-center'>
  <Bars3Icon className='h-6 cursor-pointer'/>
  <UserCircleIcon className='h-6 cursor-pointer'/>
</div>
  </div>

  </header>
    )
}

export default Header