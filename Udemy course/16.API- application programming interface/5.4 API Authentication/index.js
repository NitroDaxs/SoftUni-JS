import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "Kon";
const yourPassword = "1234";
const yourAPIKey = "c7e7001a-7d83-4a90-b0ad-8fc32850c0ca";
const yourBearerToken = "5bff5096-939d-464a-bbbc-4cecfd420bed";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", { content: JSON.stringify(result) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */

  try {
    const response = await axios.get(
      "https://secrets-api.appbrewery.com/all?page=2",
      {
        auth: {
          username: yourUsername,
          password: yourPassword,
        },
      }
    );
    const result = response.data;
    res.render("index.ejs", {
      content: JSON.stringify(result),
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  let emScore = 5;

  try {
    const response = await axios.get(
      `https://secrets-api.appbrewery.com/filter?score=${emScore}&apiKey=${yourAPIKey}`
    );
    const result = response.data;
    res.render("index.ejs", {
      content: JSON.stringify(
        result[Math.floor(Math.random() * result.length)]
      ),
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  let id = 42;
  try {
    const response = await axios.get(
      `https://secrets-api.appbrewery.com/secrets/${id}`,
      {
        headers: {
          Authorization: `Bearer ${yourBearerToken}`,
        },
      }
    );
    const result = response.data;
    res.render("index.ejs", {
      content: JSON.stringify(
        result[Math.floor(Math.random() * result.length)]
      ),
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
