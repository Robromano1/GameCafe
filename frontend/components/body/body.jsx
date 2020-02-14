import React from 'react';

const Body = () => {
	return (

		<main className="page-content">
			<section className="landing grid">
				<div className="grid-content">
					<div className="theme-header">
						<h1 className="main-header">It's time to ditch Skype and Teamspeak.</h1>
						<p className="sub-header">
							Like a virtual cafe where gaming is the center of conversation.
							All-in-one voice/text chat for gamers and coffee lovers that's free,
							secure, and works on both your desktop and phone. Stop paying for 
							TeamSpeak servers and hassling with Skype. Simplify your life.
						</p>
					</div>
					<div className="buttonsWrapper">
						<div className="buttons">
							<a alt="Download GameCafe" href="https://discordapp.com/api/download?platform=osx"
								 className="downloadNow">Download for macOs</a>
								 <div>
									 <form className="fieldForm">
										 <input type="text" 
														 className="fieldInputClosed" 
														 placeholder="Enter a username" autofocus/>
											<button className="fieldButton">
												<span className="message">
													Open GameCafe in your browser.
												</span>
											</button>
									 </form>
								 </div>
						</div>
					</div>
				</div>
			</section>
		</main>
		// <div className="images">
		// 	<img className="desktop" src="https://discordapp.dcom/assets/0d82411c439e3558f8b2f6fb12eccbc1.svg"/>
		// </div>
	)
}

export default Body;