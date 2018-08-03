# youtube-videos

## Development setup


To use this application you will need an [Youtube API Key](https://developers.google.com/youtube). After register and get your key, go to ```./src/.env/``` and rename the ```config_example.js```to ```config.js```. Open the file and add your key to the variable ```API_KEY```

```
  const API_KEY = '<your-api-key>';

  export default API_KEY;

```

## Running

```
  npm install
  npm start
```
