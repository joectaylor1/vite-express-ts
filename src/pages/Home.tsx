import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Heart } from "lucide-react";
import weddingHero from "@/assets/WeddingWebsite2.png";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${weddingHero})` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 mt-80 text-center text-white px-4 max-w-4xl mx-auto">
          <Link to="/rsvp">
            <Button variant="rsvp" size="hero" className="text-xl">
              RSVP Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="romantic-shadow romantic-transition hover:scale-105">
              <CardContent className="p-8 text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">When</h3>
                <p className="text-muted-foreground">Saturday, June 13th, 2026</p>
                <p className="text-muted-foreground">Ceremony at 1:00 PM</p>
                <p className="text-muted-foreground">Reception to follow</p>
                <Link to="/timeline">
                  <Button variant="link" className="mt-2">
                    View Timeline
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="romantic-shadow romantic-transition hover:scale-105">
              <CardContent className="p-8 text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">Where</h3>
                <p className="text-muted-foreground">Berekeley Castle</p>
                <p className="text-muted-foreground">Berkeley</p>
                <p className="text-muted-foreground">Gloucestershire, GL13 9PJ</p>
              </CardContent>
            </Card>

            <Card className="romantic-shadow romantic-transition hover:scale-105">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">RSVP</h3>
                <p className="text-muted-foreground">Please respond by</p>
                <p className="text-muted-foreground font-semibold">December 13th, 2025</p>
                <Link to="/rsvp">
                  <Button variant="rsvp" className="mt-4">
                    Respond Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-script text-4xl md:text-5xl text-primary mb-8">
            Additional Information
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Click on the following links for additional information on accommodation, dress code,
            and transportation.
          </p>
          <div className="flex sm:flex-row gap-4 justify-center">
            <Link to="/timeline">
              <Button variant="elegant">Timeline</Button>
            </Link>
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

export default Home;
