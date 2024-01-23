import '../../style/Resume.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Resume = () => {
    return (
        <>
            <Header />
            <div className='resume-component'>
                <a href="https://drive.google.com/file/d/1-Wc0pxUnL2o2xN4PKNeXCghtXEG5EYO1/view" className="resume-btn" target="null">View CV</a>
            </div>
            <Footer />
        </>
    )
}

export default Resume