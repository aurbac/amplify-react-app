# Create a React project from Scratch

Work inside your AWS Cloud9 environment.

## Configure local environment

Configure Confirm that you are using the local credentials, and set the region name to **`us-east-1`** and the output format to **`json`**. 

``` bash
aws configure
```

## Install dependencies and create the React project

``` bash
nvm i v8
npm install -g @aws-amplify/cli
npx create-react-app myapp
cd myapp
npm install @material-ui/core
```

## Initialize your project with Amplify

``` bash
amplify init
npm install --save aws-amplify
npm install --save aws-amplify-react
```

## Analytics with Amazon Pinpoint

``` bash
amplify add analytics
amplify push
```

## Hosting with Amazon S3

``` bash
amplify add hosting
amplify push
amplify publish
```

Use the **Hosting endpoint** to browse inside your React application.

## Authentication with Amazon Cognito

By adding Analytics, the authentication module was added. Update with the following command using the default values.

``` bash
amplify auth update
amplify push
```

## Use Authentication and send events to Cognito

Replace your **src/App.js** with the following file [src/App.js](src/App.js) and publish your app.

``` bash
amplify publish
```
