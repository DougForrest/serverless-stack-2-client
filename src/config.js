const dev = {
  STRIPE_KEY: "pk_test_0d8b9zKx6R0iGfJ666JGtO1R00YrwP9Gtv",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1r47r1vo31qk6"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.fml.guru/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ZjKk9bjdn",
    APP_CLIENT_ID: "3i3n9houa3bpigtqq07i8reej",
    IDENTITY_POOL_ID: "us-east-1:2be52f19-3010-4b24-9e34-8ef94afe5f4f"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_0d8b9zKx6R0iGfJ666JGtO1R00YrwP9Gtv",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-13ba9ti4nkem1"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.fml.guru/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_4Tp91W5U3",
    APP_CLIENT_ID: "2q3lapgcq9ga0q00lm2at18pu9",
    IDENTITY_POOL_ID: "us-east-1:80e7ef5d-cd18-409d-a999-8195100c5953"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
