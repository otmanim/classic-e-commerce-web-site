import Image from 'next/image'
import BannerHeader from './components/banner-header'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <main className="">
      <BannerHeader/>
      <Navbar/>

      <img src='https://media.discordapp.net/attachments/540419226788429825/1125822405806411806/image.png?width=2160&height=522' alt="banner" className='w-[1276px] h-[307px] ml-[80px] mt-[17px]'/>

    </main>
  )
}
