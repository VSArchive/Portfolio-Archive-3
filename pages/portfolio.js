import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Typewriter from 'typewriter-effect'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
	return (
		<div>
			<Head>
				<link rel="icon" href="/img/logo.png" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="Description"
					content="Portfolio website of Vineel Sai. Hello, I am currently pursuing a bachelor's degree in Computer Science and Engineering at IIIT Kalyani. I'm interested in Android and Web development, and 
									I enjoy self-hosting my projects on various cloud providers such as AWS, Azure, Google Cloud Platform, Oracle Cloud, and other platforms. Docker, Kubernetes, 
									and other CI/CD and deployment-related applications also pique my interest." />
				<link rel="apple-touch-icon" href="/img/logo.png" />
				<link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet' />

				<title>Vineel Sai</title>
				<script defer src="/js/style.js"></script>
			</Head>
			<main>
				<div id="navbar" className={styles.navbar}>
					<a href="/" id="logo">Vineel Sai</a>
					<div className={styles.navbarRight}>
						<a id="homeNav" href="#home">Home</a>
						<a id="projectsNav" href="#projects">Projects</a>
						<a id="blogNav" href="https://vineelsai.com">Blog</a>
						<a id="resumeNav" href="https://vineelsai.com/resume/resume.pdf">Resume</a>
						<a id="contactNav" href="#contact">Contact</a>
					</div>
				</div>

				<a id="fab" href="#home" className={styles.float}>
					<FontAwesomeIcon id="upArrow" className={styles.myFloat} icon={faArrowUp} />
				</a>

				<div id="home" className={styles.parallax}>
					<p id="typewriter" className={styles.typewrite}>
						<Typewriter
							options={{
								strings: ["Hi, I am Vineel Sai", "I am an Android Developer", "I am a Web Developer"],
								autoStart: true,
								loop: true,
							}} />
					</p>
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
							<h1 className={styles.centerHeading}>Android</h1>
							<ul>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/Shopping-App">SVS Market</a></li>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/IIIT-Kalyani">IIIT Kalyani</a></li>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/Paint">Paint</a></li>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/Take-Notes">Notes</a></li>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/Root-Checker">Root Checker</a></li>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/Camera">Camera</a></li>
							</ul>
						</div>
						<div className={`${styles.columnProjects} ${styles.card} ${styles.rounded} ${styles.des}`}>
							<h1 className={styles.centerHeading}>Python</h1>
							<ul>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/AmazonPriceTracker">Amazon Price Tracker</a></li>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/Twitter-Bot">Twitter Bot</a></li>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/Discord-Bot">Discord Bot</a></li>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/Custom-Rom-Builder">Custom Rom Builder</a></li>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/Find-Temperature">Find Temperature</a></li>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/ADB-Exploit">ADB Exploit</a></li>
							</ul>
						</div>
						<div className={`${styles.columnProjects} ${styles.card} ${styles.rounded} ${styles.des}`}>
							<h1 className={styles.centerHeading}>Java Script</h1>
							<ul>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/Balance-Sheet-Generator">Balance Sheet Generator</a></li>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/Algo">Algorithm Visualizer</a></li>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/Telegram-Bot">Telegram Bot</a></li>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/Portfolio">This Website</a></li>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/Shortify">Shortify</a></li>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/Blog">Blog</a></li>
							</ul>
						</div>
						<div className={`${styles.columnProjects} ${styles.card} ${styles.rounded} ${styles.des}`}>
							<h1 className={styles.centerHeading}>Unity</h1>
							<ul>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/Flappy-Bird">Flappy Bird</a></li>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/Space-Invaders">Space Invaders</a></li>
							</ul>
						</div>
						<div className={`${styles.columnProjects} ${styles.card} ${styles.rounded} ${styles.des}`}>
							<h1 className={styles.centerHeading}>Web</h1>
							<ul>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/Billing-Website">Billing Website</a></li>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/Tic-Tac-Toe-Web">Tic Tac Toe</a></li>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/Sudoku-Web">Sudoku</a></li>
							</ul>
						</div>
						<div className={`${styles.columnProjects} ${styles.card} ${styles.rounded} ${styles.des}`}>
							<h1 className={styles.centerHeading}>Other</h1>
							<ul>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/SDMS">SDMS</a></li>
								<li><a className={styles.removeUnderline} href="https://redirect.vineelsai.com/github/vscoder">VSCoder Theme</a></li>
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
							<form method="GET" action="contact">
								<label htmlFor="name">Your Name</label>
								<input type="text" id="name" name="name" placeholder="Name" required />

								<label htmlFor="email">Email</label>
								<input type="email" id="email" name="email" placeholder="Email" required />

								<label htmlFor="subject">Subject</label>
								<textarea id="subject" name="subject" placeholder="Write something.." required></textarea>

								<div className={styles.width100}>
									<button className={styles.submit}>Submit</button>
								</div>
							</form>
						</div>
						<div className={styles.contactColumn}>
							<h2 className={styles.title}>
								Contact Me
							</h2>
							<p className={styles.fontItalic}>
								I am an undergraduate at <a href="https://redirect.vineelsai.com/iiitkalyani">IIIT
									Kalyani</a>, pursuing
								Bachelors in Computer
								Science and Engineering.
							</p>
							<a className={styles.social} href="https://redirect.vineelsai.com/facebook">
								<FontAwesomeIcon icon={faFacebook} />
							</a>
							<a className={styles.social} href="https://redirect.vineelsai.com/twitter">
								<FontAwesomeIcon icon={faTwitter} />
							</a>
							<a className={styles.social} href="https://redirect.vineelsai.com/instagram">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
							<a className={styles.social} href="https://redirect.vineelsai.com/linkedin">
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
							<a className={styles.social} href="https://redirect.vineelsai.com/github">
								<FontAwesomeIcon icon={faGithub} />
							</a>
							<a className={styles.social} href="https://redirect.vineelsai.com/vstech">
								<FontAwesomeIcon icon={faMedium} />
							</a>
							<a className={styles.social} href="mailto:mail@vineelsai.com">
								<FontAwesomeIcon icon={faEnvelope} />
							</a>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
