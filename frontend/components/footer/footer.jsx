import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="app-mount">
			<div style={{ height: "100%" }}>
				<div className="pageWrapper">
					<footer className="footerPrimary footer1 footer2">
						<svg className="footerBackground" preserveAspectRatio="none" width="1920" height="100%" viewBox="0 0 1920 330" version="1.1">

						</svg>
						<div className="footerContent">
							<div className="navigation">
								<div className="logoWrap">
									<a className="logo" href="/">
										<img alt="Home" src="https://discordapp.com/assets/8c9701b98ad4372b58f13fd9f65f966e.svg"/>
									</a>
								</div>
								<div className="navigationSection">
									<h3 className="navHeader">Product</h3>
									<Link className="navRoute" to="/signup">
										<span>Sign Up</span>
									</Link>
								</div> 
								<div className="navigationSection">
									<h3 className="navHeader">Developer</h3>
									<a className="navRoute" href="https://github.com/Robromano1/Fullstack_Project_GameCafe">
										<span>Github</span>
									</a>
									<a className="navRoute" href="https://www.linkedin.com/in/robert-romano/">
										<span>LinkedIn</span>
									</a>
								</div>
								<div className="navigationSection">
									<h3 className="navHeader">Resources</h3>
										{/* <Link className="navRoute" to=""> */}
										<div className="navRoute">
											<span>Terms of service</span>
										</div>
										{/* </Link> */}
										{/* <Link className="navRoute" to=""> */}
										<div className="navRoute">
											<span>Privacy Policy</span>
										</div>
										{/* </Link> */}
								</div>
								<div className="navigationSection">
									<h3 className="navHeader">Credits</h3>
									<a className="navRoute" href="https://discord.com">
										<span>Discord</span>
									</a>
								</div>
							</div>
							<div className="footerSeperator"></div>
							<div className="joinGameCafe">
								<div className="joinWrap">
									<h2 className="readyToJoin">Ready to try GameCafe? It's free!</h2>
									<h3 className="joinOthers">JOIN OVER 250 MILLION PLAYERS TODAY</h3>
								</div>
								<Link className="buttonSignup button" to="/signup">Sign Up Now</Link>
							</div>
						</div>
					</footer>
				</div>
			</div>
		</div>
	)
}

export default Footer;