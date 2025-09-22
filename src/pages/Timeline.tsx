import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Heart, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Timeline = () => {
  const FridayEvents = [
    {
      time: "7:00 PM",
      title: "Welcome Party",
      description: "All are welcome to join us for a meal the evening before.",
      location: "Kitchen Garden Cafe, Berkeley Castle",
      icon: <MapPin className="h-5 w-5" />,
    },
  ];
  const SaturdayEvents = [
    {
      time: "12:30 PM",
      title: "Guest Arrival",
      description: "Welcome! Please arrive early to find your seats.",
      location: "Castle Courtyard",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      time: "1:00 PM",
      title: "Wedding Ceremony",
      description: "Share our joy as we begin the next chapter of our story together.",
      location: "The Great Hall",
      icon: <Heart className="h-5 w-5" />,
    },
    {
      time: "1:30 PM",
      title: "Drinks and Canapés",
      description: "Drinks and Canapés will be served at the Lily Pond in the castle gardens.",
      location: "Lily Pond (The Long Drawing Room in case of bad weather)",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      time: "2:00 PM",
      title: "Garden Games",
      description: "Games will be available all afternoon in the castle grounds.",
      location: "Castle Grounds",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      time: "2:30 PM",
      title: "Castle Tours",
      description: "Guided tours of the castle will be available for guests.",
      location: "Castle Courtyard",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      time: "4:30 PM",
      title: "Wedding Banquet",
      description:
        "Join us for a celebratory meal as we share our first meal together as a married couple.",
      location: "The Great Hall",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      time: "7:00 PM",
      title: "First Dance",
      description: "Please join us on the dancefloor.",
      location: "The Great Hall",
      icon: <Heart className="h-5 w-5" />,
    },
    {
      time: "9:00 PM",
      title: "Evening Food",
      description: "Some snacks to keep your energy up, while we are on the dancefloor.",
      location: "Castle Courtyard",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      time: "Midnight",
      title: "Last Dance",
      description: "One final dance to end the evening.",
      location: "The Great Hall",
      icon: <Heart className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-script text-5xl text-primary mb-4">Wedding Timeline</h1>
          <p className="text-lg text-muted-foreground">
            Saturday, June 13th, 2026 • Berkeley Castle
          </p>
        </div>

        {/* Timeline */}
        <div className="text-left mb-6">
          <h3 className="font-serif text-xl font-semibold text-primary">Friday 12th</h3>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>

          <div className="space-y-8">
            {FridayEvents.map((event, index) => (
              <Card
                key={index}
                className="relative ml-16 romantic-shadow romantic-transition hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="font-serif text-xl font-semibold text-primary">{event.title}</h3>
                    <span className="text-sm font-medium text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                      {event.time}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-2 leading-relaxed">{event.description}</p>

                  <div className="flex items-center space-x-2 text-sm text-primary">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-left mb-6 mt-10">
          <h3 className="font-serif text-xl font-semibold text-primary">Saturday 13th</h3>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>

          <div className="space-y-8">
            {SaturdayEvents.map((event, index) => (
              <Card
                key={index}
                className="relative ml-16 romantic-shadow romantic-transition hover:scale-105"
              >
                {/* Timeline dot */}

                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="font-serif text-xl font-semibold text-primary">{event.title}</h3>
                    <span className="text-sm font-medium text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                      {event.time}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-2 leading-relaxed">{event.description}</p>

                  <div className="flex items-center space-x-2 text-sm text-primary">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Information */}
      </div>
      {/* Additional Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-row gap-4 justify-center">
            <Link to="/info">
              <Button variant="elegant">Information</Button>
            </Link>
            <Link to="/faq">
              <Button variant="elegant">FAQs</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
