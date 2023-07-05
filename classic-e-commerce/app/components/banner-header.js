export default function BannerHeader() {
    return (
      <main className="">
        <div className='w-full, h-[31px], bg-blue-400 flex justify-between text-white'>
          <label className='ml-5'>+633549482</label>
          <label className='ml-9'>Get 50% Off on Selected Items  |  Shop Now</label>
          <div>
            
            <select name="lang" id="lang-select" className='bg-blue-400 mr-7'>
              <option value="eng">Eng</option>
              <option value="fr">Fr</option>
              <option value="de">De</option>
              <option value="es">Es</option>
            </select>
  
            <select name="location" id="location-select" className='bg-blue-400 mr-5'>
              <option value="uk">UK</option>
              <option value="france">France</option>
              <option value="deutschland">Deutschland</option>
              <option value="spain">Spain</option>
            </select>
  
          </div>
        </div>
      </main>
    )
  }