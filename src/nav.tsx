import inyoniLogo from './assets/inyoni.png';

export default function NewFacts(){
  return(
    <div className="flex mt-0 w-full">
      <img className='w-40' src={inyoniLogo} alt="logo" />
      <nav className="w-full">
        <ul className="flex justify-between items-center p-16 w-full">
          <li>Us</li>
          <li>what we do</li>
          <li>services</li>
        </ul>
      </nav>
    </div>
  )
}
