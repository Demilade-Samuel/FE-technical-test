import { gallery1, gallery2, gallery3 } from "../assets/images";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade, Slide } from "react-awesome-reveal";

const Hero = () => {
	return (
		<>
			<div className="container" id="hero">
				<Slide direction="left">
					<div className="col-lg-6 col-mg-12 heading">
						<h1>Where creators run their business</h1>
					</div>
				</Slide>
				<Fade direction="in" duration={900}>
					<form className="d-flex mt-4" role="" action="/getstarted.js">
						<button class="btn getStartedBTN" type="submit">
							Get Started
						</button>
					</form>
				</Fade>
				<div className="container mb-4">
					<div className="d-flex flex-wrap justify-content-around">
						<Fade direction="in" className="col-lg-4 col-md-6 col-sm-12">
							<div className="mb-4 siContainer">
								<div className="sendInvoice">
									Send invoices
									<FontAwesomeIcon icon={faArrowRight} className="arrLeft" />
								</div>
								<img src={gallery1} alt="" className="img-fluid" />
							</div>
						</Fade>
						<Fade direction="in" className="col-lg-4 col-md-6 col-sm-12">
							<div className="mb-4">
								<img src={gallery2} alt="" className="img-fluid" />
							</div>
						</Fade>
						<Fade direction="in" className="col-lg-4 col-md-6 col-sm-12">
							<div className="mb-4">
								<img src={gallery3} alt="" className="img-fluid" />
							</div>
						</Fade>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
