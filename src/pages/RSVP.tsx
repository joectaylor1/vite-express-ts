import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const RSVP = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    guest_name: "",
    email: "",
    phone: "",
    attending: "",
    dietary_requirements: "",
    friday_evening_attendance: false,
    sunday_attendance: false,
    comments: "",
  });

  const handleInputChange = (field: string, value: unknown) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.guest_name || !formData.attending) {
      toast({
        title: "Please fill in required fields",
        description: "Name and attendance status are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:9001/api/v1/attendance-response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unknown error from server");

      setIsSubmitted(true);
      toast({
        title: "RSVP Submitted Successfully!",
        description: "Thank you for your response. We can't wait to celebrate with you!",
      });
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      toast({
        title: "Error submitting RSVP",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-16 px-4 bg-secondary/20">
        <div className="max-w-2xl mx-auto">
          <Card className="romantic-shadow text-center">
            <CardContent className="p-12">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h1 className="font-script text-4xl text-primary mb-4">Thank You!</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Your RSVP has been received. We're so excited to celebrate with you!
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>If you need to make any changes, please contact us directly.</p>
                <p>We'll send more details closer to the wedding date.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 bg-secondary/20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-script text-5xl text-primary mb-4">RSVP</h1>
          <p className="text-lg text-muted-foreground">Please respond by December 1st, 2025</p>
        </div>

        <Card className="romantic-shadow">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-center">
              We Hope You Can Join Us!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Guest Information */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg font-semibold text-primary">Your Information</h3>

                <div>
                  <Label htmlFor="guest_name">Full Name *</Label>
                  <Input
                    id="guest_name"
                    value={formData.guest_name}
                    onChange={(e) => handleInputChange("guest_name", e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="071234567890"
                    />
                  </div>
                </div>
              </div>

              {/* Attendance */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg font-semibold text-primary">
                  Will you be attending? *
                </h3>

                <RadioGroup
                  value={formData.attending}
                  onValueChange={(value) => handleInputChange("attending", value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="attending" id="attending" />
                    <Label htmlFor="attending">Yes, I'll be there!</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="not_attending" id="not_attending" />
                    <Label htmlFor="not_attending">Sorry, I can't make it.</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Menu Choice - only show if attending */}
              {formData.attending === "attending" && (
                <>
                  <div className="space-y-4">
                    <h3 className="font-serif text-lg font-semibold text-primary">
                      Dinner Selection
                    </h3>

                    <div>
                      <Label htmlFor="dietary_requirements">
                        Dietary Requirements or Allergies
                      </Label>
                      <Textarea
                        id="dietary_requirements"
                        value={formData.dietary_requirements}
                        onChange={(e) => handleInputChange("dietary_requirements", e.target.value)}
                        placeholder="Please let us know of any allergies or special dietary needs..."
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Additional Events */}
                  <div className="space-y-4">
                    <h3 className="font-serif text-lg font-semibold text-primary">
                      Night Before and Morning After
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      We would love it if you could join us for a meal on the friday evening before
                      the wedding and brunch the morning after. Please let us know which events
                      you'll be attending:
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="friday_evening"
                          checked={formData.friday_evening_attendance}
                          onCheckedChange={(checked) =>
                            handleInputChange("friday_evening_attendance", checked)
                          }
                        />
                        <Label htmlFor="friday_evening">Friday Evening Dinner</Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="sunday"
                          checked={formData.sunday_attendance}
                          onCheckedChange={(checked) =>
                            handleInputChange("sunday_attendance", checked)
                          }
                        />
                        <Label htmlFor="sunday">Sunday Brunch</Label>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Additional Comments */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg font-semibold text-primary">
                  Additional Comments
                </h3>

                <div>
                  <Label htmlFor="comments">Anything else you'd like us to know?</Label>
                  <Textarea
                    id="comments"
                    value={formData.comments}
                    onChange={(e) => handleInputChange("comments", e.target.value)}
                    placeholder="Special requests, or just a note for the happy couple..."
                    rows={4}
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="rsvp"
                size="lg"
                className="w-full text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit RSVP"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RSVP;
