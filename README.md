# T-n-Tips

A platform for coders to share their experience and journey.


## Get it Running

```sh
openssl genrsa -out ./keys/private-key.pem 1024
openssl rsa -in ./keys/private-key.pem -out ./keys/public-key.pem -outform PEM -pubout
yarn install
yarn dev
```


**NOTE** : Add MongoDB URI in a `.env` file at project root, like this (or pass it as an environment variable):

```env
URI=mongodb+srv://username:password@cluster.url/db?retryWrites=true&w=majority
```

---
