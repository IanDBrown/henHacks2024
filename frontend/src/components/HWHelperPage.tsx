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
			{/* <div>{result?}</div> */}
			<div>
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
		</div>
	);
};

export default WolframAlphaExample;
