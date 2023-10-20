import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import type { NextPage } from "next";

import { Footer } from "@components/footer";

import { FormContactUs } from "@components/contact/formContactUs.";

import FlameIcons from "@icons/flame.svg";

const ContactUsPage: NextPage = () => {
  return (
    <>
      <main>
        <section className="relative flex flex-col items-center pt-40 md:pt-52 pb-[20rem]  bg-[url('/assets/images/contact/jumbotron.jpg')] bg-auto bg-repeat before:bg-neutral-900/50 before:absolute before:inset-0">
          <div className="flex items-center flex-col gap-y-6 absolute">
            <h1 className="text-3xl sm:text-5xl font-bold font-['KaushanScript',cursive] text-neutral-50">
              Contact Us
            </h1>

            <div className="flex my-7 gap-5 items-center">
              <span className="flex w-[80px] sm:w-[150px] border border-50-400"></span>
              <i>
                <FlameIcons className="w-4 h-4 fill-neutral-50" />
              </i>
              <span className="flex w-[80px] sm:w-[150px] border border-50-400"></span>
            </div>
          </div>
        </section>

        <section className="lg:w-10/12 w-full py-[6rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-4">
          <FormContactUs />

          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248.36866949790138!2d119.5235797549031!3d-5.120021337245377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1697844388647!5m2!1sid!2sid" className="w-full h-[300px] lg:h-full" loading="lazy"></iframe>
        </section>
      </main>

      <Footer />

      <footer className="bg-slate-800 py-5 w-full">
        <div className="w-4/5 mx-auto">
          <p className="text-sm font-['Roboto'] font-normal text-neutral-400">
            Copyright &copy; Wahyudi Umar From Makassar
          </p>
        </div>
      </footer>
    </>
  );
};

export default ContactUsPage;
