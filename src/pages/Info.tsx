import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { House, Gift, Shirt, Car, MapPin, Heart, Plane } from "lucide-react";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-script text-5xl text-primary mb-4">Wedding Information</h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know for our special day
          </p>
        </div>

        {/* Main Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Location */}
          <Card className="romantic-shadow romantic-transition hover:scale-105">
            <CardContent className="p-6 text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">Location</h3>
              <p className="text-muted-foreground mb-1">Berkeley Castle</p>
              <p className="text-muted-foreground mb-1">Berkeley</p>
              <p className="text-muted-foreground mb-1">Gloucestershire, GL13 9PJ</p>
            </CardContent>
          </Card>

          {/* Dress Code */}
          <Card className="romantic-shadow romantic-transition hover:scale-105">
            <CardContent className="p-6 text-center">
              <Shirt className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">Dress Code</h3>
              <p className="text-muted-foreground mb-1">
                Suitable for outdoor games and a night of dancing
              </p>
              <p className="text-muted-foreground mb-1">Bright colours encouraged</p>
            </CardContent>
          </Card>

          {/* Gift Registry */}
          <Card className="romantic-shadow romantic-transition hover:scale-105">
            <CardContent className="p-6 text-center">
              <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">Gift Regsitry</h3>
              <p className="text-muted-foreground mb-4">
                We are very grateful for any contribution towards our honeymoon.
              </p>
            </CardContent>
          </Card>
          {/* Gift Registry Old */}
          <Card className="romantic-shadow romantic-transition hover:scale-105">
            <CardContent className="p-6 text-center">
              <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">Gift Registry</h3>
              <p className="text-muted-foreground mb-4">
                Your presence is the only present we need! But if you'd like to celebrate with a
                gift, we've registered at a few of our favorite places.
              </p>
              <div className="space-y-2">
                <Button variant="outline" className="w-full">
                  Williams Sonoma
                </Button>
                <Button variant="outline" className="w-full">
                  Crate & Barrel
                </Button>
                <Button variant="outline" className="w-full">
                  Honeymoon Fund
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Transportation */}
          <Card className="romantic-shadow romantic-transition hover:scale-105">
            <CardContent className="p-6 text-center">
              <Car className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">Transportation</h3>
              <p className="text-muted-foreground mb-4">
                There is ample parking availble at the venue. Cars can be left parked overnight. If
                you plan on getting a taxi, we recommend booking in advance as it's quite rural.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong>Local Taxis</strong>
                </p>
                <p>
                  <strong>Taxi A:</strong>{" "}
                  <a href="https://www.berkeley-castle.com/">www.berkeley-castle.com</a>
                </p>
                <p>
                  <strong>Taxi B:</strong>{" "}
                  <a href="https://www.berkeley-castle.com/">www.berkeley-castle.com</a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Accommodation */}
          <Card className="romantic-shadow romantic-transition hover:scale-105">
            <CardContent className="p-6 text-center">
              <House className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">Accommodation</h3>
              <p className="text-muted-foreground mb-4">
                There is limited accomadation available at the venue. There are various accomadtion
                options nearby.
              </p>
              <div className="space-y-2">
                <a href="https://www.google.com/" aria-label="Accommadation">
                  <Button variant="outline" className="w-full text-sm">
                    Napa Valley Lodge
                  </Button>
                </a>
                <div className="space-y-2"></div>
                <a href="https://www.google.com/" aria-label="Accommadation">
                  <Button variant="outline" className="w-full text-sm">
                    Napa Valley Lodge
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Wedding Party & Honeymoon */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="romantic-shadow">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl text-primary">Our Wedding Party</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Bridesmaids</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Emma Johnson (Maid of Honor)</li>
                    <li>Jessica Chen</li>
                    <li>Rachel Martinez</li>
                    <li>Ashley Williams</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Groomsmen</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>David Thompson (Best Man)</li>
                    <li>Ryan O'Connor</li>
                    <li>Mark Rodriguez</li>
                    <li>James Lee</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="romantic-shadow">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Plane className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl text-primary">Honeymoon</h2>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                After the wedding, we'll be heading to Greece for two weeks of island hopping! We're
                planning to visit Santorini, Mykonos, and Crete to soak up the Mediterranean sun and
                start our married life with an unforgettable adventure.
              </p>

              <p className="text-muted-foreground">
                We'll be sharing photos from our trip on Instagram @SarahAndMichaelAdventures -
                follow along for stunning sunsets and delicious Greek food!
              </p>

              <Button variant="romantic" className="mt-4">
                Contribute to Honeymoon Fund
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="romantic-shadow">
          <CardContent className="p-8">
            <h2 className="font-serif text-2xl text-primary text-center mb-8">
              Contact Information
            </h2>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Bride & Groom</h3>
                <p className="text-muted-foreground text-sm">
                  sarah.michael.wedding@email.com
                  <br />
                  (555) 123-4567
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Wedding Coordinator</h3>
                <p className="text-muted-foreground text-sm">
                  Emma Johnson
                  <br />
                  emma@rosewoodmanor.com
                  <br />
                  (707) 555-0123
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Venue</h3>
                <p className="text-muted-foreground text-sm">
                  Rosewood Manor
                  <br />
                  info@rosewoodmanor.com
                  <br />
                  (707) 555-0100
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
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
            <Link to="/timeline">
              <Button variant="elegant">Timeline</Button>
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

export default Info;
