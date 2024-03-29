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
	const [error, setError] = useState<string | null>(null); // Add error state

	const fetchData = async (query: string) => {
		const url = "https://api.wolframalpha.com/v2/query";
		const apiKey = "J42TK3-YV2Y949VRV";
		const input = encodeURIComponent(query);

		try {
			setLoading(true);
			setError(null); // Reset error before fetching

			const response = await fetch(
				`https://cors-anywhere.herokuapp.com/${url}?appid=${apiKey}&input=${input}&output=json`,
				{ method: "GET" }
			);

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const data = await response.json();

			if (!data.queryresult.success) {
				throw new Error("Wolfram Alpha query was not successful");
			}
			// const x = data.queryresult.pods.map(x => {
			// 	console.log(x);
			// });

			// const y = data.queryresult.pods.map(x => {
			// 	if (
			// 		x.scanner !== "Numeric" ||
			// 		x.scanner !== "Integer" ||
			// 		x.scanner !== "Identity" ||
			// 		x.scanner !== "Simplification" ||
			// 		x.scanner !== "NumberLine" ||
			// 		x.scanner !== "Rational" ||
			// 		x.scanner !== "ContinuedFraction"
			// 	) {
			// 		("n/a");
			// 	}
			// });

			// console.log(y.includes("n/a"));

			// const x = data.queryresult.pods.map(x => {
			// 	if (x.title === "Network information" || x.title === "Upper case") {
			// 		return "n/a";
			// 	}
			// });

			// console.log(x.includes("n/a"));

			// console.log(data.queryresult);

			setResult(data);
		} catch (error) {
			console.error("Fetch error:", error);
			setError(
				"Sorry, there was a problem fulfilling your request. Please try another problem."
			);
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
				<h1 className={helper_css.header}>
					Math Homework Helper for Visual Learners
				</h1>
				<p className={helper_css.para}>
					Provides live images and solutions to math based word problems!
				</p>
			</div>
			<div>
				<form onSubmit={handleSubmit}>
					<div className={helper_css.queryInput}>
						<input
							type="text"
							value={userQuery}
							onChange={e => setUserQuery(e.target.value)}
							placeholder="Enter your question here..."
						/>
						<button type="submit" className={helper_css.submitButton}>
							Learn!
						</button>
						{loading && (
							<div className={helper_css.loadingSpinner}>
								<l-tailspin
									size="55"
									stroke="5"
									speed="0.9"
									color="lime"
								></l-tailspin>
							</div>
						)}
					</div>
				</form>
			</div>
			{/* Display error message if exists */}
			{error || loading ? (
				<div className={helper_css.contentDisplay}>
					<h1>{error}</h1>
				</div>
			) : (
				<div className={helper_css.contentDisplay}>
					{result &&
						result.queryresult.pods.map(pod =>
							pod.subpods.map((subpod, subIndex) => (
								<div key={subIndex} className={helper_css.imageContainer}>
									<img
										src={subpod.img.src}
										alt={subpod.img.alt}
										className={helper_css.resultImage}
									/>
								</div>
							))
						)}
				</div>
			)}
		</div>
	);
};

export default WolframAlphaExample;
