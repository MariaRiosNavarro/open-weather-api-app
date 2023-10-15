# Weather - App (Api)

# Api: https://openweathermap.org

Normally I would store the secret api_key in an .env file (.gitignore), but for deployment I would need a server. So as I use a free service key, it is not necessary for this repository. I mean, in this case the key is public. I also added this to the html

```
<meta
      http-equiv="Content-Security-Policy"
      content="upgrade-insecure-requests"
    />

```

to let me deploy. But normally you should NEVER make the KEYS public. I used this time the NETLIFY deployment

[NETLIFY deployment](https://main--cool-vacherin-47a2af.netlify.app/)
