import express from "express";

// npm start

const app = express();
const port = 1000;

app.get("/", (req, res) => {
	fetch(
		"https://api.wolframalpha.com/v2/query?appid=J42TK3-YV2Y949VRV&input=Rachel%20has%2017%20apples.%20She%20gives%209%20to%20Sarah.%20How%20many%20apples%20does%20Rachel%20have%20now&output=json"
	)
		.then(response => response.json())
		.then(data => {
			res.json(data);
		})
		.catch(error => {
			console.error("Error fetching data:", error);
			res.status(500).send("Error fetching data");
		});
});

app.listen(port, () => {
	console.log(`[server]: Server is running on port ${port}`);
});
