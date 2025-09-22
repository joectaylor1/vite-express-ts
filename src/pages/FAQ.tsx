import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      question: "When should I RSVP?",
      answer: "Please RSVP by 13/12/2025.",
    },
    {
      question: "Will the ceremony be indoors or outdoors?",
      answer: "The ceremony will take place indoors in the main castle hall.",
    },
    {
      question: "Is there parking available?",
      answer:
        "Parking is available, please use the castle's main tourist entrance off Canonbury Street. Cars can be left in the car park overnight and collected in the morning.",
    },
    {
      question: "What transport options are available?",
      answer: (
        <>
          Train station - The nearest train station to Berkeley Castle is Cam & Dursley station,
          which is approximately 6 miles away. From the station, you will need to take a taxi to
          reach the castle.
          <br />
          <br />
          Airports - The nearest airports are Bristol (45 min drive) and Birmingham (1 hr 20 min
          drive).
          <br />
          <br />
          Taxis - Taxis must be pre-booked as it is a rural area. See details on 'Information' for
          local taxi companies.
          <br />
          <br />
          Helicopter - Please invite us if you plan on arriving by helicopter.
        </>
      ),
    },
    {
      question: 'What does "traditional wedding attire" mean?',
      answer:
        "Good question! We want you to look your best. Suits and ties, or mid-long length dresses. As a reminder, it is June and we are hoping to spend the afternoon outside. Please wear shoes suitable for this.",
    },
    {
      question: "Can I bring a plus-one?",
      answer: "Sorry, all guests are named on the invite.",
    },
    {
      question: "Can I bring children?",
      answer: "Sorry, all guests are named on the invite.",
    },
    {
      question: "What time should I arrive?",
      answer: "Please plan to arrive by 12:30 PM. The ceremony will begin promptly at 1:00 PM.",
    },
    {
      question: "Is there accommodation nearby?",
      answer: "Absolutely! Please see the accommodation section on the information page.",
    },
    {
      question: "Can I take pictures throughout the day?",
      answer:
        "Yes - we will be sharing a link for all guests to upload any pictures to share with all guests. We would love to see photos of you enjoying the day. However, we ask that during our ceremony that you are focused on sharing the moment with us, and that you have your phones and cameras kept away. We will share our professional photos of the day and ceremony once we receive them.",
    },
    {
      question: "Can I take pictures during the ceremony?",
      answer:
        "We ask that during our ceremony that you are focused on sharing the moment with us, and that you have your phones and cameras kept away. We will share our professional photos of the day and ceremony once we receive them.",
    },
    {
      question: "What dietary options will be available?",
      answer:
        "Please let us know of any dietry requirements in your RSVP. We will pass this information onto the caterer.",
    },
    {
      question: "How late will the reception go?",
      answer: "The party ends at midnight. Remember to pre-book your taxi if required.",
    },
    {
      question: "Do you have a gift registry?",
      answer: "We are very grateful for any contribution towards our honeymoon.",
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-script text-5xl text-primary mb-4">Frequently Asked Questions</h1>
        </div>

        {/* FAQ Accordion */}
        <Card className="romantic-shadow">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border/50"
                >
                  <AccordionTrigger className="text-left font-serif text-lg hover:text-primary romantic-transition">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact Card */}
        <Card className="mt-8 romantic-shadow">
          <CardContent className="p-8 text-center">
            <h2 className="font-serif text-2xl text-primary mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? We're here to help!
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Email:</strong> joecharliewedding2024@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 07944617740
              </p>
              <p>
                <strong>Venue Website:</strong>{" "}
                <a href="https://www.berkeley-castle.com/">www.berkeley-castle.com</a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Additional Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex sm:flex-row gap-4 justify-center">
            <Link to="/timeline">
              <Button variant="elegant">Timeline</Button>
            </Link>
            <Link to="/info">
              <Button variant="elegant">Information</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
