import React, { useState } from "react";
import "../css/App.css";
import { tailspin } from "ldrs";

tailspin.register();

interface ResponseType {
	queryresult: {
		pods: Array<{
			subpods: Array<{
				img: { src: string; alt: string };
			}>;
		}>;
	};
}

const WolframAlphaExample: React.FC = () => {
	const [userQuery, setUserQuery] = useState<string>("");
	const [result, setResult] = useState<ResponseType | null>(null);
	const [loading, setLoading] = useState(false);

	const fetchData = async (query: string) => {
		const url = "https://api.wolframalpha.com/v2/query";
		const apiKey = "J42TK3-YV2Y949VRV";
		const input = encodeURIComponent(query);

		try {
			console.log("query", query);
			setLoading(true);

			const response = await fetch(
				`https://cors-anywhere.herokuapp.com/${url}?appid=${apiKey}&input=${input}&output=json`,
				{ method: "GET" }
			);

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data: ResponseType = await response.json();
			setResult(data);
		} catch (error) {
			console.error("Fetch error:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		fetchData(userQuery);
	};

	return (
		<div>
			<div
				style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
			>
				<h1>Math Homework Helper for Visual Learners</h1>
				<p>Provides live images and solutions to math based word problems!</p>
			</div>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<form
					onSubmit={handleSubmit}
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center"
					}}
				>
					<input
						type="text"
						value={userQuery}
						onChange={e => setUserQuery(e.target.value)}
						placeholder="Enter your question here..."
						style={{
							marginBottom: "1rem",
							width: "500%", // Adjusts the width of the textbox
							height: "2rem", // Adjusts the height of the textbox
							padding: "0.5rem", // Adds some padding inside the textbox for better text visibility
							fontSize: "1rem" // Increases the font size for better readability
						}}
					/>

					{loading && (
						<l-tailspin
							size="40"
							stroke="5"
							speed="0.9"
							color="black"
						></l-tailspin>
					)}

					<button
						type="submit"
						style={{
							width: "100px", // Adjusts the width of the button
							height: "50px", // Adjusts the height of the button
							padding: "10px", // Adds padding inside the button for a larger clickable area
							fontSize: "1rem", // Increases the font size for better readability
							cursor: "pointer", // Changes the cursor to a pointer when hovering over the button
							borderRadius: "5px" // Adds rounded corners to the button (optional)
						}}
					>
						Submit
					</button>
				</form>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center"
				}}
			>
				{result &&
					result.queryresult.pods.map(pod =>
						pod.subpods.map((subpod, subIndex) => (
							<div key={subIndex} style={{ margin: "1rem" }}>
								<img
									src={subpod.img.src}
									alt={subpod.img.alt}
									style={{ maxWidth: "100%", height: "auto" }}
								/>
							</div>
						))
					)}
			</div>
		</div>
	);
};

export default WolframAlphaExample;
