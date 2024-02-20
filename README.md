# This project is an example using Refine.dev, RJSF and Supabse


## What is Refine.dev
Refine is a meta React framework that enables the rapid development of a wide range of web applications. https://refine.dev/

## What is RJSF (react-jsonschema-form)
A simple React component capable of using JSON Schema to declaratively build and customize web forms. https://github.com/rjsf-team/react-jsonschema-form

## What is supabase
Supabase is an open-source platform that helps developers build and scale applications. Supabase service includes a variety of tools such as Database, Authentication, Storage, and Auto generated APIs for building and scaling applications https://supabase.com/

## Purpose of this project
Combine the power of Refine, Supabase and RJSF.

Define forms using RJSF. Generate APIs using Supabase. Let Refine do all the plumbing. Now, form building made easier. 

All the form definitons are in JSON. They are stored in supbase or your local rest simulator datbase(db.json)

## Sample pages

* Partners
  * Backend is Supabase
  * Uses AntdInferencer to render List, Read and Create pages
  * Uses RJSF for the update form. 

* Companies
  * Backend is Supabase
  * Uses AntdInferencer to render List, Read, Update and Create pages


* Customers
  * Backend is any REST API
  * Uses AntdInferencer to render List, Read and Create pages
  * Uses RJSF for the update form. 

# How to run
* Clone/fork the project
* Go to supabse, create an account. get URL and API_KEY from supabase
* Copy src/utility/supabaseSampleClient.ts to src/utility/supabaseClient.ts
* Update src/utility/supabaseSampleClient.ts with your own URL and API_KEY 
* In Supabase, create the sample tables used in this project. The sample SQL statements are saved to supabaseDbSetup.sql. Note that RJSF schemas are also stored in the database.
* npm install
* go to rest-simulator folder and run npm install
* npm run dev
* to login, you need to register with email and activate your account. email based login will store details in your database. You can use social logins too, but you will have to configure the settins in supabase admin page

# TODO
* Need to get loading of environment variables from .env file working. 
* Integrate more complex examples where tables have foreign key relationships
