-- Remove plus one related columns and add Friday/Sunday attendance
ALTER TABLE public.rsvp_responses 
DROP COLUMN IF EXISTS plus_one,
DROP COLUMN IF EXISTS plus_one_name,
DROP COLUMN IF EXISTS plus_one_menu_choice,
DROP COLUMN IF EXISTS plus_one_dietary_requirements;

-- Add Friday evening and Sunday attendance columns
ALTER TABLE public.rsvp_responses 
ADD COLUMN friday_evening_attendance boolean DEFAULT false,
ADD COLUMN sunday_attendance boolean DEFAULT false;