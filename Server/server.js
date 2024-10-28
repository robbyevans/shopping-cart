// server.js

import dotenv from "dotenv";
dotenv.config();
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import cors from "cors";
import moment from "moment";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Utility function to generate the Mpesa password
const generateMpesaPassword = (shortcode, passkey, timestamp) => {
  return Buffer.from(shortcode + passkey + timestamp).toString("base64");
};

// Endpoint to retrieve OAuth Token
app.get("/auth", async (req, res) => {
  try {
    const auth = Buffer.from(
      `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`
    ).toString("base64");

    const response = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(
      "Error fetching OAuth token:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Failed to retrieve OAuth token" });
  }
});

// Endpoint to initiate STK Push
app.post("/stkpush", async (req, res) => {
  const {
    phoneNumber, // Customer's phone number (e.g., 2547XXXXXXXX)
    amount, // Amount to be paid
    accountReference, // Reference for the transaction
    transactionDesc, // Description of the transaction
  } = req.body;

  console.log("req.body", req.body);

  // Input validation
  if (!phoneNumber || !amount || !accountReference || !transactionDesc) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Step 1: Get OAuth Token
    const auth = Buffer.from(
      `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`
    ).toString("base64");

    const tokenResponse = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );

    const accessToken = tokenResponse.data.access_token;

    // Step 2: Generate Timestamp
    const timestamp = moment().format("YYYYMMDDHHmmss");

    // Step 3: Generate Password
    const password = generateMpesaPassword(
      process.env.MPESA_SHORTCODE,
      process.env.MPESA_PASSKEY,
      timestamp
    );

    // Step 4: Prepare STK Push Payload
    const stkPushData = {
      BusinessShortCode: process.env.MPESA_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: phoneNumber,
      PartyB: process.env.MPESA_SHORTCODE,
      PhoneNumber: phoneNumber,
      CallBackURL: process.env.CALLBACK_URL,
      AccountReference: accountReference,
      TransactionDesc: transactionDesc,
    };
    console.log("stkPushData", stkPushData);
    // Step 5: Initiate STK Push
    const stkPushResponse = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      stkPushData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(stkPushResponse.data);
  } catch (error) {
    // Detailed error logging
    if (error.response) {
      // The request was made, and the server responded with a status code outside 2xx
      console.error("Error initiating STK Push:", {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers,
      });
      res.status(500).json({
        error: "Failed to initiate STK Push",
        details: error.response.data,
      });
    } else if (error.request) {
      // The request was made, but no response was received
      console.error("No response received:", error.request);
      res
        .status(500)
        .json({ error: "No response from Mpesa API", details: error.message });
    } else {
      // Something happened in setting up the request
      console.error("Error setting up request:", error.message);
      res
        .status(500)
        .json({ error: "Error initiating STK Push", details: error.message });
    }
  }
});

// Endpoint to handle payment confirmation
app.post("/callback", (req, res) => {
  const callbackData = req.body;

  // Log the callback data
  console.log("Mpesa Callback Data:", JSON.stringify(callbackData, null, 2));

  // TODO: Implement your logic to handle the callback data
  // For example:
  // 1. Verify the transaction details.
  // 2. Update the order status in your database.
  // 3. Notify the user about the payment status.

  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
