import axios from "axios";

export default function handler(req, res) {
	const name = req.query.name;
	const email = req.query.email;
	const subject = req.query.subject;

	const content = "Name : " + name + "\n" + "Email : " + email + "\n" + "Subject : " + subject

	let params = {
		username: "Contact Form",
		avatar_url: "https://raw.githubusercontent.com/vineelsai26/vineelsai26.github.io/main/img/profile.jpg",
		content: content
	}
	axios({
		method: 'post',
		url: 'https://discord.com/api/webhooks/842636632716214343/2FSz43xKnI9AiIpdlPVmhwjBEWuhkvrtwmlwhzINCKwOn6hGhUv__2ZtXvAgV7YmBZDT',
		data: params
	})
	res.send("Success");
}
