import '../../style/About.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
    return (
        <div className='about-background'>
            <Header />
            <div className="about-container">
                <div className="card-section">
                    <div className="card-body">
                        <h1 className="card-title">About Me</h1>
                        <p className="card-text">Technical and focused professional with strong educational background and ability to develop efficient, scalable, and reliable software solutions while leveraging data science techniques to drive data-driven decision-making. I have an eagerness to learn and am extremely passionate about technology.

                            Quick leader with sound proficiencies in designing, coding, and testing software applications, utilizing data science techniques to extract insights from large datasets, and applying statistical analysis, machine learning, and data visualization to solve complex problems.
                            Excellent strategist with a strong capacity in handling projects and programs in rapidly changing, pressured environments to successfully deliver significant benefits within specified timescales and budgets.</p>
                        <a href="https://drive.google.com/file/d/1-Wc0pxUnL2o2xN4PKNeXCghtXEG5EYO1/view" className='resume-btn' target='null'>View CV</a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About