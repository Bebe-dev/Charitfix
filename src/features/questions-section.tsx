import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";

export default function QuestionSection() {
  return (
    <div className="flex items-center gap-10 px-[40px] md:px-[100px]">
      <div>
        <h2 className="font-semibold text-2xl">Any Question</h2>
        <p>
          When deciding which charity to donate to, it's important to do your
          search and find one that aligns with your values and interests.
        </p>
        <Accordion allowToggle w="75%">
          <AccordionItem p="2">
            <AccordionButton>
              Have you weighed the potential risks and benefits?
            </AccordionButton>
            <AccordionPanel>
              When deciding which charity to donate to, it's important to do
              your search.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem p="2">
            <AccordionButton>
              How will you gather feedback from stakeholders
            </AccordionButton>
            <AccordionPanel>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
              harum laboriosam quasi sint quaerat suscipit ratione enim
              reprehenderit soluta debitis culpa, delectus dolores quam
              reiciendis necessitatibus, neque quos accusamus modi.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem p="2">
            <AccordionButton>
              Are there any sustainability or ethical to take into account?
            </AccordionButton>
            <AccordionPanel>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores quidem magni non similique animi explicabo ducimus
              reiciendis, ex soluta? Cumque, at possimus temporibus deleniti
              architecto magni distinctio nostrum ullam fugit.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem p="2">
            <AccordionButton>
              Have you weighed the potential risks and benefits?
            </AccordionButton>
            <AccordionPanel boxShadow="4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              repellat sequi perspiciatis? Nihil rem est tempore, in sint error
              eveniet exercitationem molestias atque dignissimos assumenda,
              officia minima explicabo fugit illo!
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="hidden md:block">
        <img src="\images\questions.svg" alt="children" />
      </div>
    </div>
  );
}
