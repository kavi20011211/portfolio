const {createClient} = require('@supabase/supabase-js');
require('dotenv').config();

const superbase = createClient(process.env.PROJECT_URL, process.env.PROJECT_API);

module.exports = superbase;