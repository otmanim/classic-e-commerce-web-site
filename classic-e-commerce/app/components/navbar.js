export default function Navbar() {
    return (
        <div className='flex'>
        <img src="https://media.discordapp.net/attachments/540419226788429825/1125813180027916338/image.png?width=1628&height=588" alt="alternatetext" className='w-[143px] mt-[26px] ml-[83px]'/>
        <div className='text-[18px] font-bold flex mt-[40px]'>
          <h1 className='ml-[115px]'>MEN</h1>
          <h1 className='ml-[75px]'>WOMAN</h1>
          <h1 className='ml-[75px]'>CHILD</h1>
          <h1 className='ml-[75px]'>BABY</h1>
        </div>

        <input type="text" placeholder="Search product" className='w-[333px] h-[35px] rounded-full pl-5 ml-[68px] mt-[33px] bg-gray-200'/>

        <div className='flex mt-[40px]'>
          <a href='/' className='flex ml-[23px]'>
            <img src='https://media.discordapp.net/attachments/540419226788429825/1125817378568159396/image.png?width=392&height=412' alt='icone-compte' className='w-[29px] h-[29px]'/>
            <h1 className='mt-[3px]'>Account</h1>
          </a>

          <a href='/' className='flex ml-[23px]'>
            <img src='https://media.discordapp.net/attachments/540419226788429825/1125817452299829268/image.png?width=324&height=332' alt='icone-compte' className='w-[29px] h-[29px]'/>
            <h1 className='mt-[3px]'>Cart</h1>
          </a>

        </div>

      </div>
    )
  }