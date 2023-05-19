import { Container } from "react-bootstrap";
import AccordionQuestion from "./AccordionQuestion";
import "../../styles/Faq.css";

const questions = [
  {
    question: "Are there limits on the amount of users we can register?",
    answer:
      "No. When you register your company, the initial email address used is assigned as the main account holder. You're then able to add as many sub accounts as required. Alternatively, have them register as a user, and we'll then send you an email requiring your approval.",
  },
  {
    question: "Do you charge per invoice generated?",
    answer:
      "We'll never charge you for using features provided with your account. PDF's are generated as and when they're needed and deleted from our server once the download has completed, due to this, they take up zero server resources and can be provided for free.",
  },
  {
    question: "How far back does the historical data persist?",
    answer:
      "From the day you register your account, we'll begin keeping data on any stock you add and any changes to that stock. This means you're able to see all data for a given item from the day it was created.",
  },
  {
    question: "What information do you keep about our employees and/or clients?",
    answer:
      "We understand privacy is as important as ever! We promise we'll only keep information we deem neccesary to provide you the services we offer. This includes email address, business names & addresses and usernames.",
  },
  {
    question: "question 5",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit sint autem quibusdam iure. Itaque, similique! Ratione, iusto quisquam? Illum labore nesciunt mollitia atque, accusantium voluptate aperiam itaque facilis inventore rem?",
  },
];

const Faq = () => {
  return (
    <section className="faq pt-3 mt-3 pb-5">
      <div className="text-center text-white mb-5 ">
        <h2>Faq</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatum ipsam quam ullam
          quaerat natus quisquam fugiat mollitia ratione totam iste, dolorem officiis, accusamus
          adipisci laudantium atque sint nemo culpa.
        </p>
        <p>
          Distinctio ut aut maiores ipsa eum hic similique corrupti cumque harum magni repudiandae
          quasi asperiores incidunt, repellendus accusamus veritatis dolore facilis excepturi.
        </p>
      </div>
      <Container>
        <div className="accordion">
          {questions.map((entry) => {
            return <AccordionQuestion entry={entry} />;
          })}
        </div>
      </Container>
      <span className="curve"></span>
    </section>
  );
};

export default Faq;
