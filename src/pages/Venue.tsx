import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Car, Clock, Phone, Mail, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const Venue = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-script text-5xl text-primary mb-4">Berkeley Castle</h1>
          <p className="text-lg text-muted-foreground">
            A historic castle, located in Gloucestershire
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Venue Details */}
          <Card className="romantic-shadow">
            <CardContent className="p-8">
              <h2 className="font-serif text-2xl text-primary mb-6">Venue Details</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-muted-foreground">
                      Berkeley Castle<br />
                      Gloucestershire, GL13 9PJ
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Schedule</p>
                    <p className="text-muted-foreground">
                      Ceremony: 1:00 PM<br />
                      Wedding Breakfast: 5:00 PM<br />
                      Carriages: Midnight
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Contact</p>
                    <p className="text-muted-foreground">
                      01453 810303<br />
                      info@berkeley-castle.com<br />
                      <a href="https://www.berkeley-castle.com/">www.berkeley-castle.com</a>              
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button 
                  variant="romantic" 
                  onClick={() => window.open('https://www.google.com/maps/place/Berkeley+Castle/@51.6886211,-2.4593073,674m/data=!3m2!1e3!4b1!4m6!3m5!1s0x48710c1ccd3d16c3:0x5b39843524d7955a!8m2!3d51.6886211!4d-2.4567324!16s%2Fg%2F1pxq6mq3k?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D', '_blank')}
                >
                  Get Directions
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="romantic-shadow">
            <CardContent className="p-8">
              <h2 className="font-serif text-2xl text-primary mb-6">About the Venue</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Rosewood Manor is a breathtaking estate set among rolling vineyards and 
                majestic oak trees. The venue features elegant indoor and outdoor spaces, 
                including a charming chapel for ceremonies and a grand ballroom for receptions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The property's stunning gardens and panoramic valley views create the 
                perfect backdrop for our special day. With its blend of rustic charm 
                and sophisticated elegance, Rosewood Manor embodies the romantic atmosphere 
                we've always dreamed of for our wedding.
              </p>
            </CardContent>
          </Card>
          <Card className="romantic-shadow">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Car className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-xl text-primary">Transportation</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Driving:</strong> The venue is located 15 minutes from downtown Napa. 
                  Complimentary valet parking will be provided.
                </p>
                <p>
                  <strong>Ride Share:</strong> Uber and Lyft are readily available in the area.
                </p>
                <p>
                  <strong>Shuttle Service:</strong> We'll provide shuttle service from select hotels. 
                  More details to follow with your invitation.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="romantic-shadow">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-xl text-primary">Accommodations</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We've reserved room blocks at several nearby hotels. Booking information 
                  and special rates will be included with your formal invitation.
                </p>
                <p>
                  <strong>Recommended Hotels:</strong><br />
                  • Napa Valley Lodge<br />
                  • Maison Fleurie<br />
                  • Hotel Yountville
                </p>
                <Button variant="outline" className="mt-4">
                  View Hotel Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
          

        {/* Transportation & Accommodation */}
        <div className="grid md:grid-cols-1 gap-8">


          {/* Venue Images */}
          <Card className="romantic-shadow overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-rose-gold/20 flex items-center justify-center">
              <div className="text-center">
                <Camera className="h-12 w-12 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground">Venue Photo Gallery</p>
                <p className="text-sm text-muted-foreground">Coming Soon</p>
              </div>
            </div>
          </Card>

          <Card className="romantic-shadow overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-sage/20 to-champagne/20 flex items-center justify-center">
              <div className="text-center">
                <Camera className="h-12 w-12 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground">Ceremony Location</p>
                <p className="text-sm text-muted-foreground">Garden Chapel</p>
              </div>
            </div>
          </Card>

          <Card className="romantic-shadow overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-blush/20 to-primary/20 flex items-center justify-center">
              <div className="text-center">
                <Camera className="h-12 w-12 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground">Reception Space</p>
                <p className="text-sm text-muted-foreground">Grand Ballroom</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Venue;