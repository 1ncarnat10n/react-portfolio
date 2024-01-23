import '../../style/Portfolio.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Portfolio = () => {
    return (
        <div className='port-component'>
            <Header />
            <div className='container'>
                <div className='wrapper'>
                    <div className="card">
                        <div className="cardBody">
                            <img src="https://raw.githubusercontent.com/pToum21/sports-odds-app/main/assets/photos/bookies-bank_720.png" alt="bookiesbank" className='cardImage' />
                            <h2 className="cardTitle">Bookie's Bank</h2>
                            <p className="cardDescription">Showcase live games with the ability to click and show the spread of the selected game.</p>
                            <div className='portfolioBtn'>
                                <a href="https://ptoum21.github.io/sports-odds-app/" className='cardBtn' target='null'>Deployed Link</a>
                                <a href="https://github.com/pToum21/sports-odds-app" className='cardBtn' target='null'>GitHub Repository</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='wrapper'>
                    <div className="card">
                        <div className="cardBody">
                            <img src='https://raw.githubusercontent.com/sgiannette/Blitz/main/assets/images/Blitzscreenshot.png' alt="blitz website" className='cardImage' />
                            <h2 className="cardTitle">Blitz</h2>
                            <p className="cardDescription">A website where gamers can post about what they are currently playing and then react to each others post.</p>
                            <div className='portfolioBtn'>
                                <a href="https://games-blitz-b15f3705b087.herokuapp.com/" className='cardBtn' target='null'>Deployed Link</a>
                                <a href="https://github.com/sgiannette/Blitz" className='cardBtn' target='null'>GitHub Repository</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='wrapper'>
                    <div className="card">
                        <div className="cardBody">
                            <img src="https://png.pngtree.com/png-vector/20221119/ourmid/pngtree-flat-under-construction-sign-background-design-png-image_6471962.png" alt="" className='cardImage' />
                            <h2 className="cardTitle">Project 3</h2>
                            <p className="cardDescription">To be determined... this project is still in process.</p>
                            <div className='portfolioBtn'>
                                <a href="" className='cardBtn' target='null'>Deployed Link</a>
                                <a href="" className='cardBtn' target='null'>GitHub Repository</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Portfolio