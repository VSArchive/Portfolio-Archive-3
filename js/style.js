window.onscroll = function () { scrollFunction() }

let TxtType = function (el, toRotate, period) {
	this.toRotate = toRotate
	this.el = el
	this.loopNum = 0
	this.period = parseInt(period, 10) || 2000
	this.txt = ''
	this.tick()
	this.isDeleting = false
}

TxtType.prototype.tick = function () {
	let i = this.loopNum % this.toRotate.length
	let fullTxt = this.toRotate[i]

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1)
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1)
	}

	this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'

	let that = this
	let delta = 200 - Math.random() * 100

	if (this.isDeleting) { delta /= 2 }

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period
		this.isDeleting = true
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false
		this.loopNum++
		delta = 500
	}

	setTimeout(function () {
		that.tick()
	}, delta)
}

window.onload = function () {
	let elements = document.getElementsByClassName('typewrite')
	for (let i = 0; i < elements.length; i++) {
		let toRotate = elements[i].getAttribute('data-type')
		let period = elements[i].getAttribute('data-period')
		if (toRotate) {
			new TxtType(elements[i], JSON.parse(toRotate), period)
		}
	}
	let css = document.createElement("style")
	css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}"
	document.body.appendChild(css)
}

function scrollFunction() {
	if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
		document.getElementById("fab").style.color = "dodgerblue"
		document.getElementById("navbar").style.background = "#FFFFFF"
		document.getElementById("logo").style.color = "#00B4FF"
		// document.getElementById("text").style.color = "#00FFFF"
	} else {
		document.getElementById("navbar").style.background = "transparent"
		document.getElementById("fab").style.color = "transparent"
	}
}

function home() {
	document.getElementById("about-n").classList.remove('active')
	document.getElementById("home-n").classList.add('active')
	document.getElementById("skills-n").classList.remove('active')
	document.getElementById("projects-n").classList.remove('active')
	document.getElementById("contact-n").classList.remove('active')
}
function about() {
	document.getElementById("about-n").classList.add('active')
	document.getElementById("home-n").classList.remove('active')
	document.getElementById("skills-n").classList.remove('active')
	document.getElementById("projects-n").classList.remove('active')
	document.getElementById("contact-n").classList.remove('active')
}
function skills() {
	document.getElementById("about-n").classList.remove('active')
	document.getElementById("home-n").classList.remove('active')
	document.getElementById("skills-n").classList.add('active')
	document.getElementById("projects-n").classList.remove('active')
	document.getElementById("contact-n").classList.remove('active')
}
function projects() {
	document.getElementById("about-n").classList.remove('active')
	document.getElementById("home-n").classList.remove('active')
	document.getElementById("skills-n").classList.remove('active')
	document.getElementById("projects-n").classList.add('active')
	document.getElementById("contact-n").classList.remove('active')
}
function contact() {
	document.getElementById("contact-n").classList.add('active')
	document.getElementById("about-n").classList.remove('active')
	document.getElementById("home-n").classList.remove('active')
	document.getElementById("skills-n").classList.remove('active')
	document.getElementById("projects-n").classList.remove('active')
}

function mail() {
	let request = new XMLHttpRequest();
	request.open("POST", "https://discord.com/api/webhooks/842636632716214343/2FSz43xKnI9AiIpdlPVmhwjBEWuhkvrtwmlwhzINCKwOn6hGhUv__2ZtXvAgV7YmBZDT")

	request.setRequestHeader('Content-type', 'application/json')

	const name = document.getElementById("name").value
	const email = document.getElementById("email").value
	const subject = document.getElementById("subject").value

	const message = document.getElementById("message")

	if (name.trim().length == 0 || email.trim().length == 0 || subject.trim().length == 0) {
		message.style.visibility = "visible"
		message.style.color = "rgb(255, 0, 0)"
		message.innerText = "Please Fill the form!"
	} else {
		const content = "Name : " + name + "\n" + "Email : " + email + "\n" + "Subject : " + subject

		let params = {
			username: "Contact Form",
			avatar_url: "https://raw.githubusercontent.com/vineelsai26/vineelsai26.github.io/main/img/profile.jpg",
			content: content
		}
		request.send(JSON.stringify(params))

		message.style.color = "rgb(0, 255, 0)"
		message.style.visibility = "visible"
		message.innerText = "Success"
	}
}
