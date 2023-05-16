import AccordionQuestion from "./AccordionQuestion";

const questions = [
  {
    question: "Question 1",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit sint autem quibusdam iure. Itaque, similique! Ratione, iusto quisquam? Illum labore nesciunt mollitia atque, accusantium voluptate aperiam itaque facilis inventore rem?",
  },
  {
    question: "question 2",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit sint autem quibusdam iure. Itaque, similique! Ratione, iusto quisquam? Illum labore nesciunt mollitia atque, accusantium voluptate aperiam itaque facilis inventore rem?",
  },
  {
    question: "question 3",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit sint autem quibusdam iure. Itaque, similique! Ratione, iusto quisquam? Illum labore nesciunt mollitia atque, accusantium voluptate aperiam itaque facilis inventore rem?",
  },
  {
    question: "question 4",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit sint autem quibusdam iure. Itaque, similique! Ratione, iusto quisquam? Illum labore nesciunt mollitia atque, accusantium voluptate aperiam itaque facilis inventore rem?",
  },
  {
    question: "question 5",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit sint autem quibusdam iure. Itaque, similique! Ratione, iusto quisquam? Illum labore nesciunt mollitia atque, accusantium voluptate aperiam itaque facilis inventore rem?",
  },
];

const Faq = () => {
  return (
    <section className="mt-2">
      <div className="accordion">
        {questions.map((entry) => {
          return <AccordionQuestion entry={entry} />;
        })}
      </div>
    </section>
  );
};

export default Faq;
