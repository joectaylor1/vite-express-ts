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
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
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
        </div>

        {/* Transportation */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Transportation */}
          <Card className="romantic-shadow romantic-transition hover:scale-105">
            <CardContent className="p-6 text-center">
              <Car className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">Transportation</h3>
              <p className="text-muted-foreground mb-4">
                There is ample parking availble at the venue. Cars can be left parked overnight. If
                you plan on getting a taxi, we recommend booking in advance. See the below local
                options.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong>Local Taxis</strong>
                </p>
                <p>
                  <strong>Bristol Travel: </strong>{" "}
                  <a href="https://www.bristoltravel.co.uk" className="underline">
                    bristoltravel.co.uk
                  </a>
                  {"  "}● 01454549165
                </p>
                <p>
                  <strong>CJ's Taxis: </strong>{" "}
                  <a href="mailto:cjstaxis@icloud.com" className="underline">
                    cjstaxis@icloud.com
                  </a>
                  {"  "}● 07840338889
                </p>
                <p>
                  <strong>Gee Bee Travel: </strong>{" "}
                  <a href="http://www.geebeetravel.co.uk" className="underline">
                    geebeetravel.co.uk
                  </a>
                  {"  "}● 01453521544
                </p>
                <p>
                  <strong>A&A Taxis: </strong>{" "}
                  <a href="https://www.aandataxis.co.uk" className="underline">
                    aandataxis.co.uk
                  </a>
                  {"  "}● 01453767777
                </p>
                <p>
                  <strong>ACA Taxis: </strong>{" "}
                  <a href="https://www.acataxis.com/" className="underline">
                    acataxis.com
                  </a>
                  {"  "}● 07525142295
                </p>
                <p>
                  <strong>Jenkins Taxis: </strong>{" "}
                  <a href="mailto:ajmobile@jenkinstaxis.com" className="underline">
                    ajmobile@jenkinstaxis.com
                  </a>
                  {"  "}● 01453542346
                </p>
                <p>
                  <strong>Christopher's Private Hire: </strong>{" "}
                  <a href="https://www.christophersprivatehire.co.uk " className="underline">
                    christophersprivatehire.co.uk
                  </a>
                  {"  "}● 07971864105
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
                There's a variety of accommodation options just a short walk from the castle in the
                town of Berkeley, or a little further afield in the surrounding towns and villages.
                Here are some recommended local places to stay.
              </p>
              <div className="inline-grid grid-cols-2 gap-2 mb-2">
                <h3 className="font-serif text-xl font-semibold mb-1">Houses</h3>
                <h3 className="font-serif text-xl font-semibold mb-1">Hotels</h3>
                <a
                  href="https://www.airbnb.co.uk/rooms/30583584?source_impression_id=p3_1729073692_P35oo-xOtZUVsdG9"
                  aria-label="Accommadation"
                >
                  <Button variant="outline" className="w-full text-sm">
                    Old School House (x15)
                  </Button>
                </a>
                <a href="https://www.hotelinberkeley.co.uk/" aria-label="Accommadation">
                  <Button variant="outline" className="w-full text-sm">
                    The Berkeley Arms
                  </Button>
                </a>
                <a href="https://www.marketviewmews.co.uk/" aria-label="Accommadation">
                  <Button variant="outline" className="w-full text-sm">
                    Market View Mews (x4)
                  </Button>
                </a>
                <a href="https://www.themalthouse.uk.com/" aria-label="Accommadation">
                  <Button variant="outline" className="w-full text-sm">
                    The Malt House
                  </Button>
                </a>
                <a
                  href="https://www.kateandtoms.com/houses/pedington-manor"
                  aria-label="Accommadation"
                >
                  <Button variant="outline" className="w-full text-sm">
                    Pedington Manor (x22)
                  </Button>
                </a>
                <a
                  href="https://www.bestwestern.co.uk/hotels/best-western-the-gables-hotel-83878"
                  aria-label="Accommadation"
                >
                  <Button variant="outline" className="w-full text-sm">
                    The Gables
                  </Button>
                </a>
                <a
                  href="https://www.framptoncourtestate.co.uk/frampton-court "
                  aria-label="Accommadation"
                >
                  <Button variant="outline" className="w-full text-sm">
                    Frampton Court (x14)
                  </Button>
                </a>
                <a href="https://www.devere.co.uk/tortworth-court" aria-label="Accommadation">
                  <Button variant="outline" className="w-full text-sm">
                    De Vere, Totworth Court
                  </Button>
                </a>
                <a
                  href="https://www.framptoncourtestate.co.uk/the-cyderhouse"
                  aria-label="Accommadation"
                >
                  <Button variant="outline" className="w-full text-sm">
                    The Cyder House (x16)
                  </Button>
                </a>
                <a href="https://www.thetudorarms.co.uk" aria-label="Accommadation">
                  <Button variant="outline" className="w-full text-sm">
                    Tudor Arms
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
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
