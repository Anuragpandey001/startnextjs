import React from 'react'

function Footer({font } : {font ?:string}) {
  return (
      <footer className='py-12 bg-gray-952 text-gray-953'>
          <div className={`max-w-[100rem] px-12 max-auto flex justify-between ${font}`}>
              <p className='tex-xl'>Anky Coby Been Imc.</p>
          </div>
          
    </footer>
  )
}

export default Footer