import { createClient } from '@supabase/supabase-js'

const URL = 'https://lvgdzskckhmajhvblizq.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2Z2R6c2tja2htYWpodmJsaXpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2OTc4NjIsImV4cCI6MjAyODI3Mzg2Mn0.wCVgrOrO70GsXYOMORMunThtdP1m9gwj1KdGdAFFN4Y';

export const supabase = createClient(URL, API_KEY);