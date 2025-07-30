import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "What should I wear?",
      answer: "We're asking for formal attire. We're hoping to spend the afternoon in the grassy areas of the grounds, weather permitting, so please wear appropiate shoes."
    },
    {
      question: "Will the ceremony be indoors or outdoors?",
      answer: "The ceremony will take place indoors in the main castle hall."
    },
    {
      question: "Is there parking available?",
      answer: "Parking is available, please use the castle's main tourist entrance off Canonbury Street. Cars can be left in the car park overnight and collected in the morning."
    },
    {
      question: "Can I bring a plus-one?",
      answer: ""
    },
    {
      question: "Are children welcome?",
      answer: ""
    },
    {
      question: "What time should I arrive?",
      answer: "Please plan to arrive by 12:45 PM. The ceremony will begin promptly at 1:00 PM."
    },
    {
      question: "Is there accommodation nearby?",
      answer: "Absolutely! Please see the accomadation section of the website."
    },
    {
      question: "Can I take photos during the ceremony?",
      answer: ""
    },
    {
      question: "What dietary options will be available?",
      answer: "Please let us know of any dietry requirements in your RSVP. We will pass this information onto the caterer."
    },
    {
      question: "How late will the reception go?",
      answer: "The reception will run until midnight."
    },
    {
      question: "Do you have a gift registry?",
      answer: "Your presence is the only present we need! If you'd like to give a gift, We'd be grateful for contributions to our honeymoon fund."
    },
    {
      question: "Who can I contact if I have other questions?",
      answer: "For any questions not covered here, please feel free to reach out to us directly."
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="font-script text-5xl text-primary mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our special day
          </p>
        </div>

        {/* FAQ Accordion */}
        <Card className="romantic-shadow">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
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
            <h2 className="font-serif text-2xl text-primary mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? We're here to help!
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Bride & Groom:</strong> sarah.michael.wedding@email.com
              </p>
              <p>
                <strong>Wedding Coordinator:</strong> Emma Johnson • (707) 555-0123
              </p>
              <p>
                <strong>Venue:</strong> Rosewood Manor • info@rosewoodmanor.com
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
