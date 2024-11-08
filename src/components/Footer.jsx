import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import iedc from "../assets/iedc.png"

const Footer = () =>
{
    return(
        <div className="flex flex-col w-full justify-center h-min  text-white ">
        {/* <a href='https://www.iedctkmce.com/'><div className='flex justify-center my-4'><img src={iedc} className='h-10'/></div></a>  */}
            <div className="flex gap-4 justify-evenly mx-6 my-6 border border-gradient-animation p-4 rounded-xl">
            {/* <div className="flex gap-4 justify-evenly mx-6 my-6 border-2 border-gradient-animation p-4 rounded-xl"> */}
              <a href='https://www.instagram.com/hack4tkm/'> <InstagramIcon sx={{ fontSize: 40}} className='hover:text-white'/></a> 
              <a href='https://www.linkedin.com/company/iedc-tkmce/'> <LinkedInIcon sx={{ fontSize: 40 }} className='hover:text-white'/></a>
              <a href="https://twitter.com/iedctkmce/"><TwitterIcon sx={{ fontSize: 40 }} className='hover:text-white'/></a>
{/*               <a href='"https://www.facebook.com/tkmiedc'><FacebookIcon sx={{ fontSize: 40 }} className='hover:text-blue-600'/></a> 
              <a href='" https://wa.me/+919207408109"'> <WhatsAppIcon sx={{ fontSize: 40 }} className='hover:text-green-500'/></a> */}
            </div>
            <hr className=" h-px border border-gradient-animation lg:mx-4 lg:mb-2"></hr>
            <div className="w-full flex flex-col items-center">
               <p className="text-center  my-2">© HACK4TKM 2023 - All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
