import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Camera, Music, Utensils, Car, MapPin, Heart, Plane } from 'lucide-react';

const Info = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-script text-5xl text-primary mb-4">
            Wedding Information
          </h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know for our special day
          </p>
        </div>

        {/* Main Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Gift Registry */}
          <Card className="romantic-shadow romantic-transition hover:scale-105">
            <CardContent className="p-6 text-center">
              <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">Gift Registry</h3>
              <p className="text-muted-foreground mb-4">
                Your presence is the only present we need! But if you'd like to celebrate with a gift, we've registered at a few of our favorite places.
              </p>
              <div className="space-y-2">
                <Button variant="outline" className="w-full">Williams Sonoma</Button>
                <Button variant="outline" className="w-full">Crate & Barrel</Button>
                <Button variant="outline" className="w-full">Honeymoon Fund</Button>
              </div>
            </CardContent>
          </Card>

          {/* Photography */}
          <Card className="romantic-shadow romantic-transition hover:scale-105">
            <CardContent className="p-6 text-center">
              <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">Photography</h3>
              <p className="text-muted-foreground mb-4">
                We're having an unplugged ceremony, but please feel free to take photos during cocktail hour and reception!
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Photographer:</strong> Emma Chen Photography</p>
                <p><strong>Instagram:</strong> @emmachenphotos</p>
                <p>Photos will be available 2-3 weeks after the wedding</p>
              </div>
            </CardContent>
          </Card>

          {/* Music & Entertainment */}
          <Card className="romantic-shadow romantic-transition hover:scale-105">
            <CardContent className="p-6 text-center">
              <Music className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">Music & Dancing</h3>
              <p className="text-muted-foreground mb-4">
                Live acoustic music during cocktail hour, followed by DJ entertainment for dancing the night away!
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Cocktail Hour:</strong> Acoustic Duo</p>
                <p><strong>Reception:</strong> DJ Mike Martinez</p>
                <p>Song requests welcome on your RSVP!</p>
              </div>
            </CardContent>
          </Card>

          {/* Dining */}
          <Card className="romantic-shadow romantic-transition hover:scale-105">
            <CardContent className="p-6 text-center">
              <Utensils className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">Dining</h3>
              <p className="text-muted-foreground mb-4">
                A delicious three-course plated dinner featuring locally-sourced ingredients from Napa Valley farms.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Cocktail Hour:</strong> Hors d'oeuvres & Signature Drinks</p>
                <p><strong>Dinner:</strong> 7:00 PM - 8:30 PM</p>
                <p>Special dietary needs accommodated</p>
              </div>
            </CardContent>
          </Card>

          {/* Transportation */}
          <Card className="romantic-shadow romantic-transition hover:scale-105">
            <CardContent className="p-6 text-center">
              <Car className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">Transportation</h3>
              <p className="text-muted-foreground mb-4">
                Multiple options to get you to and from the venue safely and comfortably.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Valet Parking:</strong> Complimentary</p>
                <p><strong>Hotel Shuttles:</strong> Available from select hotels</p>
                <p><strong>Ride Share:</strong> Uber/Lyft readily available</p>
              </div>
            </CardContent>
          </Card>

          {/* Accommodations */}
          <Card className="romantic-shadow romantic-transition hover:scale-105">
            <CardContent className="p-6 text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-3">Accommodations</h3>
              <p className="text-muted-foreground mb-4">
                We've secured special rates at several beautiful hotels in the Napa Valley area.
              </p>
              <div className="space-y-2">
                <Button variant="outline" className="w-full text-sm">
                  Napa Valley Lodge
                </Button>
                <Button variant="outline" className="w-full text-sm">
                  Maison Fleurie
                </Button>
                <p className="text-xs text-muted-foreground">Booking codes on formal invitation</p>
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
                After the wedding, we'll be heading to Greece for two weeks of island hopping! 
                We're planning to visit Santorini, Mykonos, and Crete to soak up the Mediterranean sun 
                and start our married life with an unforgettable adventure.
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
                  sarah.michael.wedding@email.com<br />
                  (555) 123-4567
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Wedding Coordinator</h3>
                <p className="text-muted-foreground text-sm">
                  Emma Johnson<br />
                  emma@rosewoodmanor.com<br />
                  (707) 555-0123
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Venue</h3>
                <p className="text-muted-foreground text-sm">
                  Rosewood Manor<br />
                  info@rosewoodmanor.com<br />
                  (707) 555-0100
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Info;