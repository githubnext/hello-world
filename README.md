# Hello World

This is a simple TypeScript project that prints hello world and nice to meet you six times.

## How to run

To run the project locally, you need to have Node.js and npm installed.

1. Clone the repository: `git clone https://github.com/<your-username>/hello-world.git`
2. Install the dependencies: `npm install`
3. Build the project: `npm run build`
4. Run the app: `node dist/app.js`

## How to test

To run the unit tests and generate the coverage report, run `npm run test`.

## How to deploy

To deploy the project to Heroku, you need to have a Heroku account and the Heroku CLI installed.

1. Create a Heroku app: `heroku create`
2. Set the Heroku app name as a secret in your GitHub repository: `heroku apps:info -s | grep web_url | cut -d/ -f3 | sed 's/.herokuapp.com//' | xargs -I {} gh secret set HEROKU_APP_NAME -b{}`
3. Set the Heroku email as a secret in your GitHub repository: `heroku auth:whoami | xargs -I {} gh secret set HEROKU_EMAIL -b{}`
4. Set the Heroku API key as a secret in your GitHub repository: `heroku auth:token | xargs -I {} gh secret set HEROKU_API_KEY -b{}`
5. Set the Codecov token as a secret in your GitHub repository: `gh secret set CODECOV_TOKEN -b<your-codecov-token>`
6. Push the main branch to GitHub: `git push origin main`
7. Wait for the GitHub Actions to run the build, test and deploy workflows
8. Visit your Heroku app URL to see the app running
