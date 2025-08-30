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
      description: "All are welcome to join us for a meal the evening before the big day. ",
      location: "Kitchen Garden Cafe, Berkeley Castle",
      icon: <MapPin className="h-5 w-5" />,
    },
  ];
  const SaturdayEvents = [
    {
      time: "3:30 PM",
      title: "Guest Arrival",
      description:
        "Welcome! Please arrive early to find your seats and enjoy the pre-ceremony atmosphere.",
      location: "Garden Chapel Entrance",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      time: "4:00 PM",
      title: "Wedding Ceremony",
      description:
        "Join us as we exchange vows in the beautiful garden chapel surrounded by vineyard views.",
      location: "Garden Chapel",
      icon: <Heart className="h-5 w-5" />,
    },
    {
      time: "4:30 PM",
      title: "Cocktail Hour",
      description:
        "Celebrate with signature cocktails, hors d'oeuvres, and live acoustic music while we take photos.",
      location: "Terrace Gardens",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      time: "6:00 PM",
      title: "Reception Begins",
      description: "Join us in the grand ballroom for dinner, dancing, and more celebration!",
      location: "Grand Ballroom",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      time: "7:00 PM",
      title: "Dinner Service",
      description: "A delicious three-course meal prepared by our award-winning culinary team.",
      location: "Grand Ballroom",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      time: "8:30 PM",
      title: "First Dance & Toasts",
      description:
        "Our first dance as newlyweds followed by heartfelt toasts from family and friends.",
      location: "Grand Ballroom",
      icon: <Heart className="h-5 w-5" />,
    },
    {
      time: "9:00 PM",
      title: "Dancing & Celebration",
      description: "Let's dance the night away! The dance floor is open until midnight.",
      location: "Grand Ballroom",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      time: "11:30 PM",
      title: "Last Dance",
      description: "One final dance to close out our perfect wedding day.",
      location: "Grand Ballroom",
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
          <h2 className="font-script text-4xl md:text-5xl text-primary mb-8">
            Additional Information
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Click on the follwing links for additional information on accomadation, dress code,
            transportation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/info">
              <Button variant="elegant">More Information</Button>
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
