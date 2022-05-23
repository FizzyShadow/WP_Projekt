import {address, email, IBAN, OIB, phoneNumber} from '../components/globalValues';

const ContactPage = () => {
    return (
      <div className="flex justify-center h-screen resize-none">

        <div className="absolute basis-[80%] bg-[url('images/letter3.png')] bg-cover max-w-[1300px] h-[100%] w-[80%] p-[15%]">
        <h1 className='text-[#000]/70 font-semibold text-center md:text-[40px] pb-4'>Kontakt i informacije</h1>
        <ul className="absolute md:text-2xl text-[#000]/70 font-semibold text-left">
              <li className='py-2 pl-2'>Kontakt: {phoneNumber}</li>
              <li className='py-2 pl-2'>E-mail: {email}</li>
              <li className='py-2 pl-2'>OIB: {OIB}</li>
              <li className='py-2 pl-2'>IBAN: {IBAN}</li>
              <li className='py-2 pl-2'>Adresa: {address}</li>
            </ul>
        </div>
        
      </div>
      );
}
 
export default ContactPage;
