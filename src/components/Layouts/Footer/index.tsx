import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer
    className={`bg-[url('/ski.jpg')] flex w-full py-10 bg-top`}
    >
     <div className="w-5/6 flex mx-auto text-black">
        <div>
            <h4 className="text-lg uppercase">
                {`COntact`}
            </h4>

            <ul>
                <li>
                    {`Zermat tourism`}
                </li>
                <li>
                    {`Zermat tourism`}
                </li>
                <li>
                    {`Zermat tourism`}
                </li>
                <li>
                    {`Zermat tourism`}
                </li>
            </ul>
        </div>
     </div>
    </footer>
  )
}

export default Footer
