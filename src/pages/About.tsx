import { Link } from "react-router-dom";
import Header from "../components/Header";
import starticon from "../assets/images/icons/starticon.svg";
import borrowicon from "../assets/images/icons/borrowicon.svg";
import planicon from "../assets/images/icons/planicon.svg";
import Container from "../components/Container";

function About() {
  return (
    <div>
      <Header />
      <section className="mt-10 bg-[#930941] py-28 2xl:py-32 text-white">
        <Container>
          <div className="text-center max-w-7xl mx-auto">
            <h1 className="font-medium text-4xl sm:text-6xl lg:text-7xl mb-14">
              The possibilities are endless with
              <span className="text-[#F8CFE0] sm:mt-4 block">Townhouse</span>
            </h1>

            <p className="px-4 sm:p-0 sm:text-left font-medium text-lg sm:text-3xl max-w-[45.313rem] mx-auto leading-normal mb-16">
              Connect with your neighbours, share local finds, and experience
              the best of your local community.
            </p>

            <Link to="/getstarted">
              <button className="sm:text-2xl font-semibold px-9 py-3 sm:px-14 sm:py-4 rounded-[4px] bg-[var(--primary-01)] text-[var(--white)]">
                Join Us
              </button>
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-32">
        <Container>
          <h2 className="text-3xl sm:text-5xl font-medium text-black mb-24 mx-4">
            What makes us different?
          </h2>

          <div className="space-y-28 md:space-y-16">
            <div className="grid md:grid-cols-2 justify-items-center">
              <div className="flex flex-col items-center max-w-96 gap-4">
                <img src={starticon} alt="starticon" className="h-28 mx-10" />

                <div className="text-center">
                  <h3 className="font-semibold p-2 text-2xl text-center mb-1">
                    Empowering Local Engagement
                  </h3>
                  <p className="text-lg font-medium">
                    Our platform bridges the gap between residents and local
                    authorities, enabling meaningful interactions and collective
                    action on community issues, fostering positive change from
                    the grassroot level
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 justify-items-center">
              <div className="flex flex-col items-center max-w-96 gap-4 md:col-start-2">
                <img src={planicon} alt="planicon" className="h-28 mx-10" />

                <div className="text-center">
                  <h3 className="font-semibold p-2 text-2xl text-center mb-1">
                    Resident-Centric Design
                  </h3>
                  <p className="text-lg font-medium">
                    With an intuitive and accessible interface, our platform
                    allows residents to easily connect, stay informed, and
                    engage with their neighborhoods, overall enhancing
                    transparency
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 justify-items-center">
              <div className="flex flex-col items-center max-w-96 gap-4">
                <img src={borrowicon} alt="borrowicon" className="h-28 mx-10" />

                <div className="text-center">
                  <h3 className="font-semibold p-2 text-2xl text-center mb-1">
                    Interactive Features
                  </h3>
                  <p className="text-lg font-medium">
                    Through features like bulletin boards and event
                    collaboration tools our platform provides local governments
                    with valuable insights into community needs for future
                    integration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-32">
        <Container>
          <div className="text-center max-w-6xl mx-auto">
            <h2 className="font-medium text-4xl sm:text-7xl mb-10">
              What are you waiting for?
            </h2>

            <p className="font-medium text-xl sm:text-3xl mx-auto leading-normal mb-16">
              Join our community and get connected with like minded individuals
              and neighbors, while sharing meaningful experiences,.
            </p>

            <Link to="/getstarted">
              <button className="px-9 py-3 sm:text-2xl font-semibold sm:px-14 sm:py-4 rounded-[4px] bg-[var(--primary-01)] text-[var(--white)]">
                Join Us
              </button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default About;
