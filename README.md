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


# TODO
* Need to get loading of environment variables from .env file working. 
* Integrate more complex examples where tables have foreign key relationships
