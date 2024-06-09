import { useState } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

function Contact() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Header />
      <section className="mt-10 bg-[#930941] py-28 2xl:py-32 text-white">
        <Container>
          <div className="text-center max-w-7xl mx-auto">
            <h1 className="font-medium text-4xl sm:text-7xl mb-14">
              How can we help you today?
            </h1>

            <div className="relative">
              <IoIosSearch className="fill-black w-9 h-9 absolute top-2/4 -translate-y-1/2 left-6" />
              <input
                type="text"
                className="w-full text-black px-20 py-6 text-xl rounded-md"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-32 sm:mb-72 mx-4">
        <Container>
          <h2 className="font-medium text-4xl mb-16 mx-4">Contact us</h2>

          <form className="flex flex-col gap-8 w-full sm:w-3/4">
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="text-2xl">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="text-lg px-5 py-3 border rounded"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-2xl">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="email"
                className="text-lg px-5 py-3 border rounded"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="subject" className="text-2xl">
                Subject <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="subject"
                className="text-lg px-5 py-3 border rounded"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="help" className="text-2xl">
                How can we help? <span className="text-red-600">*</span>
              </label>
              <textarea
                id="help"
                rows={8}
                className="text-lg px-5 py-3 border rounded"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="sm:text-2xl font-semibold bg-[var(--primary-01)] text-[var(--white)] px-10 py-3 rounded"
              >
                Submit
              </button>
            </div>
          </form>
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

export default Contact;
