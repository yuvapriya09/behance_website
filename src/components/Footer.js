import React from 'react'
import { adobeLogo } from '../Data'
const Footer = () => {
    return (
        <section className='px-4 py-3 fixed w-full bottom-0 bg-white'>
            <div className="container-fluid ">
                {/* left side */}
                <div className="grid lg:grid-cols-2 gap-3 items-center ">
                <div className="left-foot">
                    <ul className='flex items-center'>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">More Behance </label>
<select id="countries" class="bg-white text-black border border-black-5 text-sm rounded-lg focus:ring-white-50 focus:border-white-40 block w-1/5 p-1 dark:bg-white-700 dark:border-gray-60 dark:placeholder-gray-40 dark:text-black dark:focus:ring-blue-50 dark:focus:border-blue-50

">
  <option selected>More Behance</option>
  <option value="US">Careers at Behance</option>
  <option value="CA">Adobe Portfolio</option>
  <option value="FR">Blog</option>
  <option value="DE">Download the App</option>
  <option value="MR">About Behance</option>
</select>

                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">English </label>
<select id="countries" class="bg-white text-black border border-black-5 text-sm rounded-lg focus:ring-white-50 focus:border-white-40 block w-1/5 p-1 dark:bg-white-700 dark:border-gray-60 dark:placeholder-gray-40 dark:text-black dark:focus:ring-blue-50 dark:focus:border-blue-50

">
  <option selected>English</option>
  <option value="US">French</option>
  <option value="CA">Russian</option>
  <option value="FR">Tamil</option>
  <option value="DE">Hindi</option>
  <option value="MR">Urdu</option>
  <option value="DE">Arabic</option>
  <option value="MR">Japanese</option>
  <option value="DE">Spanish</option>
  <option value="MR">Bengali</option>
  <option value="DE">Turkish</option>
  <option value="MR">German</option>
  <option value="DE">Cantonese</option>
  <option value="MR">Chinese</option>
  <option value="DE">Marathi</option>
  <option value="MR">Italian</option>
  <option value="DE">Oriya</option>
  <option value="MR">Dutch</option>

</select>
                        <li className='mx-3 font-medium text-sm'><a href="http://" target="_blank" rel="noopener noreferrer">Tou</a></li>
                        <li className='mx-3 font-medium text-sm'><a href="http://" target="_blank" rel="noopener noreferrer">privacy</a></li>
                        <li className='mx-3 font-medium text-sm'><a href="http://" target="_blank" rel="noopener noreferrer">Community</a></li>
                        <li className='mx-3 font-medium text-sm'><a href="http://" target="_blank" rel="noopener noreferrer">Help</a></li>
                    </ul>
                </div>

                <div className="adobe-right flex lg:justify-end">
                    <div className="adobe-btn mx-4 flex items-center hover:opacity-70">
                        <img src={adobeLogo} alt={adobeLogo} className="w-5 h-5" />
                        <a href="" className='pl-1 font-bold text-black text-sm'> Adobe</a>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Footer