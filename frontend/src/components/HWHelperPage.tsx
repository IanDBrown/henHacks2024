import React, { useState } from "react";
import "../css/App.css";
import { tailspin } from "ldrs";
import helper_css from "../css/hwHelper.module.css";

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
			<div>
				<h1>Math Homework Helper for Visual Learners</h1>
				<p>Provides live images and solutions to math based word problems!</p>
			</div>
			<div>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={userQuery}
						onChange={e => setUserQuery(e.target.value)}
						placeholder="Enter your question here..."
					/>

					{loading && (
						<l-tailspin
							size="40"
							stroke="5"
							speed="0.9"
							color="black"
						></l-tailspin>
					)}

					<button type="submit">Submit</button>
				</form>
			</div>
			<div>
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
