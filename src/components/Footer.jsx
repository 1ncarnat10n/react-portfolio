import '../../style/Footer.css'
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function Footer() {
    return (
        <footer>
            <section className='footer-btn'>
                <div className='footer-link'>
                    <a href="https://github.com/1ncarnat10n" className='footer-button' target='blank'><SiGithub /></a>
                </div>
                <div className='footer-link'>
                    <a href="https://www.linkedin.com/in/william-tsai-slo/" className='footer-button' target='blank'><FaLinkedin /></a>
                </div>
                <div className='footer-link'>
                    <a href="mailto:tsaiwilliam888@gmail.com" className='footer-button' target='blank'><MdOutlineMailOutline /></a>
                </div>
            </section>
        </footer>
    )
}

export default Footer