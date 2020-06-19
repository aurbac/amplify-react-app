# Create a React App from scratch and deploy with Amplify CLI

![Diagram](images/diagram.png)

Work inside your AWS Cloud9 or local environment.

## Configure your environment with IAM user credentials

Firstly, [create an **IAM** user with **Programmatic access**](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console).

Configure your AWS CLI with your credentials (access key and secret key).

``` bash
aws configure
```

- [Configure the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html#cli-quick-configuration) as follows.
    - AWS Access Key ID: **# YOUR_ACCESS_KEY_ID**
    - AWS Secret Access Key: **# YOUR_SECRET_ACCESS_KEY**
    - Default region name [us-east-1]: **us-east-1**
    - Default output format [json]: **json**

## Install dependencies and create the React project

Install Amplify CLI tool https://docs.amplify.aws/cli/start/install

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

## Initialize your project with Amplify CLI

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

? Select an Analytics provider **Amazon Pinpoint**

? Provide your pinpoint resource name: **myapp**

Adding analytics would add the Auth category to the project if not already added.

? Apps need authorization to send analytics events. Do you want to allow guests and unauthenticated users to send analytics events? (we recommend you allow this when getting started) **Yes**

Push to create these changes in the cloud.

``` bash
amplify push
```

? Are you sure you want to continue? **Yes**

After resources are created you will receive the URL for Amazon Pinpoint console to track your app events. Now you can [configure your app and record events](https://docs.amplify.aws/lib/analytics/getting-started/q/platform/js#configure-your-app).


## Authentication with Amazon Cognito

Check your current environment.

``` bash
amplify status
```

By adding Analytics, the authentication module was added. Update with the following command using the default values.

``` bash
amplify auth update
```

What do you want to do? **Apply default configuration without Social Provider (Federation)**

Push to create these changes in the cloud.

``` bash
amplify push
```

? Are you sure you want to continue? **Yes**

## Use Authentication and send events to Amazon Cognito

We are going to [use pre-built UI component for Authentication](https://docs.amplify.aws/lib/auth/getting-started/q/platform/js#option-1-use-pre-built-ui-components) and [record custom events to Amazon Pinpoint](https://docs.amplify.aws/lib/analytics/record/q/platform/js#recording-custom-events).

First, install the @aws-amplify/ui-react library as well as aws-amplify if you have not already:

``` bash
npm install aws-amplify @aws-amplify/ui-react
```

Replace your **src/App.js** with the following file [src/App.js](src/App.js) and **src/index.js** with the following file [src/index.js](src/index.js).

## Hosting with Amazon S3 and Amazon CloudFront

``` bash
amplify add hosting
```

? Select the plugin module to execute **Amazon CloudFront and S3**

? Select the environment setup: **PROD (S3 with CloudFront using HTTPS)**

? hosting bucket name **myapp-20190710043203-hostingbucket** (Use default name)

You can now publish your app.

``` bash
amplify publish
```

? Are you sure you want to continue? **Yes**

Use the **Hosting endpoint** to browse inside your React application.