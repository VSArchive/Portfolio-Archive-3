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
					content="Portfolio website of Vineel Sai I am an undergraduate at IIIT Kalyani, pursuing Bachelors in Computer
    						Science and Engineering. I am a Android Developer and a Web Developer currently trying out game development with Unity" />
				<link rel="apple-touch-icon" href="/img/logo.png" />
				<link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet' />

				<title>Vineel Sai</title>
				<script defer src="/js/style.js"></script>
			</Head>
			<main>
				<div id="navbar" className={styles.navbar}>
					<a href="/" id="logo">Vineel Sai</a>
					<div className={styles.navbarRight}>
						<a id="homeNav" className={styles.active} href="#home">Home</a>
						<a id="aboutNav" href="#about">About</a>
						<a id="skillsNav" href="#skills">Skills</a>
						<a id="projectsNav" href="#projects">Projects</a>
						<a id="resumeNav" href="/resume/resume.pdf">Resume</a>
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

				<div id="about" className={styles.about}>
					<div className={`${styles.row} ${styles.card} ${styles.rounded}`}>
						<div className={styles.columnAbout1}>
							<img id="img" alt="profile" src={'/img/profile.jpg'} className={styles.container}></img>
						</div>
						<div className={styles.columnAbout2}>
							<p><span className={styles.titles}>Name: </span> <span className={styles.des}>Vineel Sai</span></p>
							<p><span className={styles.titles}>Profile: </span> <span className={styles.des}>Android
								Developer</span></p>
							<p><span className={styles.titles}>Email: </span> <span className={styles.des}>mail@vineelsai.com</span></p>
						</div>
						<div className={styles.columnAbout3}>
							<div>
								<p className={styles.title}>
									About me
								</p>
								<p className={styles.fontItalic}>
									I am an undergraduate at <a href="https://iiitkalyani.ac.in">IIIT
										Kalyani</a>, pursuing
									Bachelors in Computer
									Science and Engineering. I am interested Android Developer and Web Developer currently trying
									out game development with Unity.
								</p>
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
								<li><a href="https://play.google.com/store/apps/details?id=com.vs.supermarket">SVS Market</a></li>
								<li><a href="https://github.com/vineelsai26/IIIT-Kalyani">IIIT Kalyani</a></li>
								<li><a href="https://github.com/vineelsai26/Paint">Paint</a></li>
								<li><a href="https://github.com/vineelsai26/Take-Notes">Notes</a></li>
							</ul>
						</div>
						<div className={`${styles.columnProjects} ${styles.card} ${styles.rounded} ${styles.des}`}>
							<h1>Unity</h1>
							<ul>
								<li><a href="https://github.com/vineelsai26/Flappy-Bird">Flappy Bird</a></li>
								<li><a href="https://github.com/vineelsai26/Space-Invaders">Space Invaders</a></li>
							</ul>
						</div>
						<div className={`${styles.columnProjects} ${styles.card} ${styles.rounded} ${styles.des}`}>
							<h1>Python</h1>
							<ul>
								<li><a href="https://github.com/vineelsai26/AmazonPriceTracker">Amazon Price Tracker</a></li>
								<li><a href="https://github.com/vineelsai26/Twitter-Bot">Twitter Bot</a></li>
								<li><a href="https://github.com/vineelsai26/Find-Temperature">Find Temperature</a></li>
								<li><a href="https://github.com/vineelsai26/ADB-Exploit">ADB Exploit</a></li>
							</ul>
						</div>
						<div className={`${styles.columnProjects} ${styles.card} ${styles.rounded} ${styles.des}`}>
							<h1>Java Script</h1>
							<ul>
								<li><a href="https://github.com/vineelsai26/vineelsai">This Website</a></li>
								<li><a href="https://github.com/vineelsai26/Blog">Blog</a></li>
								<li><a href="https://github.com/vineelsai26/F.R.I.D.A.Y-Bot">Telegram Bot</a></li>
								<li><a href="https://github.com/vineelsai26/URL-Shortener">URL Shortener</a></li>
							</ul>
						</div>
						<div className={`${styles.columnProjects} ${styles.card} ${styles.rounded} ${styles.des}`}>
							<h1>Web</h1>
							<ul>
								<li><a href="https://github.com/vineelsai26/Tic-Tac-Toe-Web">Tic Tac Toe</a></li>
								<li><a href="https://github.com/vineelsai26/Sudoku-Web">Sudoku</a></li>
							</ul>
						</div>
						<div className={`${styles.columnProjects} ${styles.card} ${styles.rounded} ${styles.des}`}>
							<h1>PHP</h1>
							<ul>
								<li><a href="https://github.com/vineelsai26/Billing-Website">Billing Website</a></li>
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
							<form method="GET" action="https://contact.vineelsai.workers.dev/contact">
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
								I am an undergraduate at <a href="https://iiitkalyani.ac.in">IIIT
									Kalyani</a>, pursuing
								Bachelors in Computer
								Science and Engineering.
							</p>
							<a className={styles.social} href="https://facebook.com/vineelsai26">
								<FontAwesomeIcon icon={faFacebook} />
							</a>
							<a className={styles.social} href="https://twitter.com/vineelsai26">
								<FontAwesomeIcon icon={faTwitter} />
							</a>
							<a className={styles.social} href="https://instagram.com/vineelsai26">
								<FontAwesomeIcon icon={faInstagram} />
							</a>
							<a className={styles.social} href="https://linkedin.com/in/vineelsai26">
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
							<a className={styles.social} href="https://github.com/vineelsai26">
								<FontAwesomeIcon icon={faGithub} />
							</a>
							<a className={styles.social} href="https://vstech.medium.com">
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
