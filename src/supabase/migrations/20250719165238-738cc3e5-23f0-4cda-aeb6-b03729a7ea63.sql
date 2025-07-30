-- Create RSVP responses table
CREATE TABLE public.rsvp_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  guest_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  attendance_status TEXT NOT NULL CHECK (attendance_status IN ('attending', 'not_attending')),
  menu_choice TEXT,
  dietary_requirements TEXT,
  plus_one BOOLEAN DEFAULT false,
  plus_one_name TEXT,
  plus_one_menu_choice TEXT,
  plus_one_dietary_requirements TEXT,
  comments TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.rsvp_responses ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert RSVP responses (public form)
CREATE POLICY "Anyone can submit RSVP responses" 
ON public.rsvp_responses 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow anyone to view RSVP responses (for confirmation)
CREATE POLICY "Anyone can view RSVP responses" 
ON public.rsvp_responses 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_rsvp_responses_updated_at
BEFORE UPDATE ON public.rsvp_responses
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();