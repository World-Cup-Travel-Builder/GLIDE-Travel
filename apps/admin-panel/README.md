curl --request POST \
  --url https://dev-zfl1u5uhp5jvjnyj.us.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{
    "client_id": "V6mvX3XQUwB8BFlPYRIZTFpJQUqyCNf5",
    "client_secret": "NxEV5Vu_CDYX9J9SoAH0YN_TGNf0xdIB7JZlB-xjJVwFcD65LBM8aMqUSoYYQvVB",
    "audience": "https://dev-zfl1u5uhp5jvjnyj.us.auth0.com/api/v2/",
    "grant_type": "client_credentials"
  }'


Generates new access token