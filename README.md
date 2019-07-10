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

Create React project.

``` bash
npx create-react-app myapp
cd myapp
npm install @material-ui/core
```

## Initialize your project with Amplify

``` bash
amplify init
```




``` bash
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
