import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Heart, MapPin, Calendar } from 'lucide-react';

const Timeline = () => {
  const timelineEvents = [
    {
      time: '3:30 PM',
      title: 'Guest Arrival',
      description: 'Welcome! Please arrive early to find your seats and enjoy the pre-ceremony atmosphere.',
      location: 'Garden Chapel Entrance',
      icon: <MapPin className="h-5 w-5" />
    },
    {
      time: '4:00 PM',
      title: 'Wedding Ceremony',
      description: 'Join us as we exchange vows in the beautiful garden chapel surrounded by vineyard views.',
      location: 'Garden Chapel',
      icon: <Heart className="h-5 w-5" />
    },
    {
      time: '4:30 PM',
      title: 'Cocktail Hour',
      description: 'Celebrate with signature cocktails, hors d\'oeuvres, and live acoustic music while we take photos.',
      location: 'Terrace Gardens',
      icon: <Clock className="h-5 w-5" />
    },
    {
      time: '6:00 PM',
      title: 'Reception Begins',
      description: 'Join us in the grand ballroom for dinner, dancing, and more celebration!',
      location: 'Grand Ballroom',
      icon: <Calendar className="h-5 w-5" />
    },
    {
      time: '7:00 PM',
      title: 'Dinner Service',
      description: 'A delicious three-course meal prepared by our award-winning culinary team.',
      location: 'Grand Ballroom',
      icon: <Clock className="h-5 w-5" />
    },
    {
      time: '8:30 PM',
      title: 'First Dance & Toasts',
      description: 'Our first dance as newlyweds followed by heartfelt toasts from family and friends.',
      location: 'Grand Ballroom',
      icon: <Heart className="h-5 w-5" />
    },
    {
      time: '9:00 PM',
      title: 'Dancing & Celebration',
      description: 'Let\'s dance the night away! The dance floor is open until midnight.',
      location: 'Grand Ballroom',
      icon: <Calendar className="h-5 w-5" />
    },
    {
      time: '11:30 PM',
      title: 'Last Dance',
      description: 'One final dance to close out our perfect wedding day.',
      location: 'Grand Ballroom',
      icon: <Heart className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-script text-5xl text-primary mb-4">Wedding Timeline</h1>
          <p className="text-lg text-muted-foreground">
            Saturday, June 15th, 2024 • Rosewood Manor
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
          
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <Card key={index} className="relative ml-16 romantic-shadow romantic-transition hover:scale-105">
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                  {event.icon}
                </div>
                
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="font-serif text-xl font-semibold text-primary">
                      {event.title}
                    </h3>
                    <span className="text-sm font-medium text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                      {event.time}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-2 leading-relaxed">
                    {event.description}
                  </p>
                  
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
        <Card className="mt-12 romantic-shadow">
          <CardContent className="p-8">
            <h2 className="font-serif text-2xl text-primary mb-6 text-center">
              Important Notes
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Dress Code</h3>
                <p>Cocktail attire recommended. The ceremony will be outdoors, so please dress comfortably for garden walking.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Weather Backup</h3>
                <p>In case of inclement weather, the ceremony will move to the indoor chapel. Reception will remain in the ballroom.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Photography</h3>
                <p>Our photographer will be capturing moments throughout the day. Feel free to take photos during cocktail hour and reception!</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Parking</h3>
                <p>Complimentary valet parking will be available starting at 3:15 PM. Simply pull up to the main entrance.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Timeline;