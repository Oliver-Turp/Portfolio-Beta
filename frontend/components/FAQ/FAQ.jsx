import { useState, useRef, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import faqData from "./faqData";

const FAQ_Accordion = () => {
  const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };

  return (
    <div className="faq_wrap">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item) => (
        <button
          key={item.id}
          className={`faq_item ${active}`}
          onClick={toggleAccordion}
        >
          <section>
            <section
              className={
                active
                  ? `faq_item_align faq_item_align_border`
                  : `faq_item_align`
              }
            >
              <h4>{item.question}</h4>
              <FiPlus
                className={active ? `faq_icon faq_icon_rotate` : `faq_icon`}
              />
            </section>
            <section
              ref={contentRef}
              className={
                active ? `faq_answer faq_answer_divider` : `faq_answer`
              }
            >
              <p>{item.answer}</p>
            </section>
          </section>
        </button>
      ))}
    </div>
  );
};

export default FAQ_Accordion;
