import React from 'react';

const Body = () => {
	return (
		<div className="app-mount">
			<div style={{ height: "100%" }}>
				<div className="pageWrapper">
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
											className="downloadNow defaultTheme">Download for macOs</a>
											<div>
												<form className="fieldForm buttonTry formBranding">
													<input type="text" 
																	className="fieldInputClosed inputBranding" 
																	placeholder="Enter a username" autoFocus/>
														<button className="fieldButton buttonBranding">
															<span className="message">
																Open GameCafe in your browser.
															</span>
														</button>
												</form>
											</div>
									</div>
								</div>
							</div>
							<div className="gridContentFull">
								<div className="images">
									<div className="imageShadow"></div>
									<img src="https://discordapp.com/assets/0a2fd7b3bab977b4619f466b81b426d4.svg" className="triangle0 background svg"/>
									<img src="https://discordapp.com/assets/0a2fd7b3bab977b4619f466b81b426d4.svg" className="triangle1 background svg"/>
									<img src="https://discordapp.com/assets/0a2fd7b3bab977b4619f466b81b426d4.svg" className="triangle2 background svg"/>
									<img src="https://discordapp.com/assets/f877364ca453abc089cf7fe8d22c9c3f.svg" className="dot0 background svg"/>
									<img src="https://discordapp.com/assets/f877364ca453abc089cf7fe8d22c9c3f.svg" className="dot1 background svg"/>
									<img src="https://discordapp.com/assets/f877364ca453abc089cf7fe8d22c9c3f.svg" className="dot2 background svg"/>
									<img src="https://discordapp.com/assets/f877364ca453abc089cf7fe8d22c9c3f.svg" className="dot3 background svg"/>
									<img src="https://discordapp.com/assets/f877364ca453abc089cf7fe8d22c9c3f.svg" className="dot4 background svg"/>
									<img src="https://discordapp.com/assets/afdfaaeb6d6639e24086ced7aa07975d.svg" className="circle0 background svg"/>
									<img src="https://discordapp.com/assets/afdfaaeb6d6639e24086ced7aa07975d.svg" className="circle1 background svg"/>
									<img src="https://discordapp.com/assets/afdfaaeb6d6639e24086ced7aa07975d.svg" className="circle2 background svg"/>
									<img src="https://discordapp.com/assets/173ee5a6d2f1b6a19190465c41371a3b.svg" className="square0 background svg"/>
									<img src="https://discordapp.com/assets/173ee5a6d2f1b6a19190465c41371a3b.svg" className="square1 background svg" />
									<img src="https://discordapp.com/assets/173ee5a6d2f1b6a19190465c41371a3b.svg" className="square2 background svg" />
									<img src="https://discordapp.com/assets/a14c5b02487874dca7fae0481ef90dbb.svg" className="x0 background svg"/>
									<img src="https://discordapp.com/assets/a14c5b02487874dca7fae0481ef90dbb.svg" className="x1 background svg" />
									<img src="https://discordapp.com/assets/a14c5b02487874dca7fae0481ef90dbb.svg" className="x2 background svg" />
									<img alt="potion" src="https://discordapp.com/assets/0b5a0339571e72656eea93eb55d73eae.svg" className="potion svg"/>
									<img alt="bomb" src="https://discordapp.com/assets/eb301f28da3199edbd3ef19690d61674.svg" className="bomb svg animation-delay float"/>
									<img alt="coin" src="https://discordapp.com/assets/9e05338bd66e0985fceb83317cb94b9c.svg" className="coin svg float"/>
									<img alt="coin" src="https://discordapp.com/assets/9e05338bd66e0985fceb83317cb94b9c.svg" className="coin2 svg float"/>
									<img alt="Game Cartridge" src="https://discordapp.com/assets/215346366a9a7d50924fc245ddb048d2.svg" className="GCartridge svg float"/>
									<img alt="shield" src="https://discordapp.com/assets/15149ecb9d5cd8faa24e1bbf45d70e5b.svg" className="shield svg"/>
									<div className="divPotion"></div>
									<div className="box"></div>
									<div className="box"></div>
									<div className="box"></div>
									<div className="box"></div>
									<div className="box"></div>
									<div className="box"></div>
									<img src="https://discordapp.com/assets/81d74b2ebb053fbccee41865a47d48c3.svg" className="questionBox svg"/>
									<img alt="desktop" src="https://discordapp.com/assets/0d82411c439e3558f8b2f6fb12eccbc1.svg" className="desktop svg"/>
									<img alt="android" src="https://discordapp.com/assets/5a31f41848bf3ba1817a092ac28c623d.svg" className="android svg"/>
									<img alt="Iphone" src="https://discordapp.com/assets/82fa4f388cfc9cf47a6972ae39ae90de.svg" className="Iphone svg"/>
									<img alt="Game Controller" src="https://discordapp.com/assets/c4bae281354a2b4e2db85415955e0994.svg" className="controller svg"/>
									<img alt="laptop" src="https://discordapp.com/assets/7edaed9d86e1b5dd9d4c98484372222b.svg" className="laptop svg"/>
									<img alt="headphones" src="https://discordapp.com/assets/69db64955960eb333f5ff831cc1c0294.svg" className="headphones svg"/>
								</div>
							</div>
						</section>
					</main>
				</div>
			</div>
		</div>
		// <div className="images">
		// 	<img className="desktop" src="https://discordapp.dcom/assets/0d82411c439e3558f8b2f6fb12eccbc1.svg"/>
		// </div>
	)
}

export default Body;