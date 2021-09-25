# project-atelier
Totally not phase one of world domination. Not at all

What steps do people need to take to get this app running?
1) Clone the repo
2) Obtain a GitHub API Key
3) Set up an AWS account with an S3 bucket and CloudFront distribution.
4) Make a copy of the file '.secret.example.json' and rename it to '.secret.json' (note the dot before 'secret')
5) Add your GitHub API Key and AWS access information to the new '.secret.json' file
6) Run the command "npm install"
7) Run the command "npm run server-dev"
8) Navigate to localhost:3000
9) Select one of the sample links on the landing page to view a product
