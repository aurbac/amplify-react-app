# Create a React project from scratch and deploy with Amplify

Work inside your AWS Cloud9 or local environment.

## Configure your environment

* In AWS Cloud9 configure the AWS CLI using the local credentials, and set the region name to **`us-east-1`** and the output format to **`json`**. 

``` bash
aws configure
```

## Install dependencies and create the React project

Update Node.js to the minimal version of 10.

``` bash
nvm i v10
```

Install Amplify CLI tool https://github.com/aws-amplify/amplify-cli

``` bash
npm install -g @aws-amplify/cli
```

Create the React project.

``` bash
npx create-react-app myapp
cd myapp
npm install @material-ui/core
npm install --save aws-amplify
npm install --save aws-amplify-react
```

## Initialize your project with Amplify

``` bash
amplify init
```

? Enter a name for the project **myapp**

? Enter a name for the environment **dev**

? Choose your default editor: **Sublime Text**

? Choose the type of app that you're building **javascript**

Please tell us about your project

? What javascript framework are you using **react**

? Source Directory Path:  **src**

? Distribution Directory Path: **build**

? Build Command:  **npm run-script build**

? Start Command: **npm run-script start**

Using default provider  awscloudformation

For more information on AWS Profiles, see:

https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? **Yes**

? Please choose the profile you want to use **default**

## Analytics with Amazon Pinpoint

``` bash
amplify add analytics
```

? Provide your pinpoint resource name: **myapp**

Adding analytics would add the Auth category to the project if not already added.

? Apps need authorization to send analytics events. Do you want to allow guests and unauthenticated users to send analytics events? (we recommend you allow this when getting started) **Yes**

``` bash
amplify push
```

? Are you sure you want to continue? **Yes**

## Hosting with Amazon S3

``` bash
amplify add hosting
```

? Select the environment setup: **DEV (S3 only with HTTP)**

? hosting bucket name **myapp-20190710043203-hostingbucket** (Use default name)

? index doc for the website **index.html**

? error doc for the website **index.html**

``` bash
amplify push
```

? Are you sure you want to continue? **Yes**

``` bash
amplify publish
```

Use the **Hosting endpoint** to browse inside your React application.

## Authentication with Amazon Cognito

By adding Analytics, the authentication module was added. Update with the following command using the default values.

``` bash
amplify auth update
```

What do you want to do? **Apply default configuration without Social Provider (Federation)**

``` bash
amplify push
```

## Use Authentication and send events to Cognito

Replace your **src/App.js** with the following file [src/App.js](src/App.js) and publish your app.

``` bash
amplify publish
```
