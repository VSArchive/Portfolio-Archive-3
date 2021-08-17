import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React from 'react';

export default function Home() {
	return (
		<div>
			<Head>
				<title>
					Vineel Sai
				</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="Description"
					content="Portfolio website of Vineel Sai I am an undergraduate at IIIT Kalyani, pursuing Bachelors in Computer
						Science and Engineering. I am a Android Developer and a Web Developer currently trying out game development with Unity" />
				<link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet' />
				<link rel="icon" type="image/gif/png" href="img/profile-no-bg.png" />
			</Head>

			<main>
				<div className={styles.navbar}>
					<Link href="/" id={styles.logo}>Vineel Sai</Link>
					<div className={styles.navbarRight}>
						<Link className={styles.active} href="#home">Home</Link>
						<Link href="#about">About</Link>
						<Link href="#skills">Skills</Link>
						<Link href="#projects">Projects</Link>
						<Link href="resume/resume.pdf">Resume</Link>
						<Link href="#contact">Contact</Link>
					</div>
				</div>

				<div id="home" className={styles.parallax}>
				</div>

				<div id="about" className={styles.about}>
					<div className={`${styles.row} ${styles.card} ${styles.rounded}`}>
						<div className={styles.columnAbout1}>
							<img id="img" alt="profile" src="img/profile.jpg" className={`${styles.width100} ${styles.container}`} />
						</div>
						<div className={styles.columnAbout2}>
							<p><span className={styles.titles}>Name: </span> <span className={styles.des}>Vineel Sai</span></p>
							<p><span className={styles.titles}>Profile: </span> <span className={styles.des}>Android
								Developer</span></p>
							<p><span className={styles.titles}>Email: </span> <span className={styles.des}>vineelsai26@gmail.com</span></p>
							<p><span className={styles.titles}>Phone: </span> <span className={styles.des}>9390345080</span></p>
						</div>
						<div className={styles.columnAbout3}>
							<div>
								<p className={styles.title}>
									About me
								</p>
								<p className={styles.fontItalic}>
									I am an undergraduate at <Link href="https://iiitkalyani.ac.in">IIIT
										Kalyani</Link>, pursuing
									Bachelors in Computer
									Science and Engineering. I am interested Android Developer and Web Developer currently trying
									out game development with Unity.
								</p>
								<h6>Check out the blog that featured my game <Link
									href="https://gameskeys.net/under-the-radar-games-on-android-in-2021/">Flapping Fish</Link>
								</h6>
							</div>
						</div>
					</div>
				</div>

				<div id="skills" className={styles.skills}>
					<div>
						<h3 className={styles.title}>
							Skills
						</h3>
						<p className={styles.fontItalic}>These are the things I am
							good at.</p>
					</div>
					<div className={`${styles.row} ${styles.card} ${styles.titleSkills} ${styles.rounded}`}>
						<ul className={styles.column3}>
							<li>C/C++</li>
							<li>Java</li>
							<li>Kotlin</li>
							<li>Python</li>
							<li>Java Script</li>
						</ul>

						<ul className={styles.column3}>
							<li>Html</li>
							<li>CSS</li>
							<li>PHP</li>
							<li>Android</li>
							<li>Django</li>
						</ul>

						<ul className={styles.column3}>
							<li>SQL</li>
							<li>MongoDB</li>
							<li>Node Js</li>
							<li>Linux</li>
							<li>Bash</li>
						</ul>
					</div>
				</div>

				<div id="projects" className={styles.projects}>

					<div>
						<h3 className={styles.title}>
							Projects
						</h3>
						<p className={styles.fontItalic}>These are the projects I
							have made.</p>
					</div>

					<div className={styles.row}>
						<div className={`${styles.columnProjects} ${styles.card} ${styles.rounded} ${styles.des}`}>
							<h1>Android</h1>
							<ul>
								<li><Link href="https://play.google.com/store/apps/details?id=com.vs.supermarket">SVS Market</Link></li>
								<li><Link href="https://github.com/vineelsai26/IIIT-Kalyani">IIIT Kalyani</Link></li>
								<li><Link href="https://github.com/vineelsai26/Paint">Paint</Link></li>
								<li><Link href="https://github.com/vineelsai26/Take-Notes">Notes</Link></li>
							</ul>
						</div>
						<div className={`${styles.columnProjects} ${styles.card} ${styles.rounded} ${styles.des}`}>
							<h1>Python</h1>
							<ul>
								<li><Link href="https://github.com/vineelsai26/AmazonPriceTracker">Amazon Price Tracker</Link></li>
								<li><Link href="https://github.com/vineelsai26/Twitter-Bot">Twitter Bot</Link></li>
								<li><Link href="https://github.com/vineelsai26/Find-Temperature">Find Temperature</Link></li>
								<li><Link href="https://github.com/vineelsai26/ADB-Exploit">ADB Exploit</Link></li>
							</ul>
						</div>
						<div className={`${styles.columnProjects} ${styles.card} ${styles.rounded} ${styles.des}`}>
							<h1>Java Script</h1>
							<ul>
								<li><Link href="https://github.com/vineelsai26/Blog">Blog</Link></li>
								<li><Link href="https://github.com/vineelsai26/F.R.I.D.A.Y-Bot">Telegram Bot</Link></li>
								<li><Link href="https://github.com/vineelsai26/URL-Shortener">URL Shortener</Link></li>
							</ul>
						</div>
						<div className={`${styles.columnProjects} ${styles.card} ${styles.rounded} ${styles.des}`}>
							<h1>Web</h1>
							<ul>
								<li><Link href="https://github.com/vineelsai26/vineelsai26.github.io">This Website</Link></li>
								<li><Link href="https://github.com/vineelsai26/Tic-Tac-Toe-Web">Tic Tac Toe</Link></li>
								<li><Link href="https://github.com/vineelsai26/Sudoku-Web">Sudoku</Link></li>
							</ul>
						</div>
						<div className={`${styles.columnProjects} ${styles.card} ${styles.rounded} ${styles.des}`}>
							<h1>PHP</h1>
							<ul>
								<li><Link href="https://github.com/vineelsai26/Billing-Website">Billing Website</Link></li>
							</ul>
						</div>
					</div>
				</div>

				<div id="contact" className={styles.contact}>
					<div>
						<h1 className={styles.title}>
							Contact
						</h1>
						<p className={styles.fontItalic}>Hear is the way to contact
							me.</p>
					</div>
					<div className={`${styles.row} ${styles.card} ${styles.titleSkills} ${styles.rounded}`}>
						<div className={styles.contactColumn}>
							<form method="GET" action="/api/contact">
								<label htmlFor="name">Your Name</label>
								<input type="text" id="name" name="name" placeholder="Name" required />

								<label htmlFor="email">Email</label>
								<input type="email" id="email" name="email" placeholder="Email" required />

								<label htmlFor="subject">Subject</label>
								<textarea id="subject" name="subject" placeholder="Write something.." required></textarea>

								<div className={styles.width100}>
									<p id="message" className={styles.message}>Success</p>
									<button className={styles.submit} >Submit</button>
								</div>
							</form>
						</div>
						<div className={styles.contactColumn}>
							<h2 className={styles.title}>
								Contact Me
							</h2>
							<p className={styles.fontItalic}>
								I am an undergraduate at <Link href="https://iiitkalyani.ac.in">IIIT
									Kalyani</Link>, pursuing
								Bachelors in Computer
								Science and Engineering.
							</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
