# MoodTunes

MoodTunes is a demo Google Home App that integrates PubNub functions into Google's Dialogflow API in order to perform functions on user speech input. MoodTunes will analyze a user's sentiment based off their one sentence response to the question "What's Up." Then it will play the right song according to their mood.

[Click here for full tutorial](https://www.pubnub.com/blog/google-home-dialogflow-app-using-pubnub-functions/)


# Quickstart

1. Sign Up for PubNub and create a new Project
2. Sign Up for Dialogflow and create a new Agent and a Intent named Get_Emotion.
3. In Default Welcome Intent, add text response, "Hey What's up?"
4. In Get_Emotion intent, add training phrase @sys.any:any
5. Enable webhook calls for Get_Emotion intent and then set its webhook URL as playmusic function's URL.
6. Sign Up for Amazon Web Services
7. Create AWS Access Key and Secret Key. Enter these credentials into My Secrets key-value store with keys "AWS_access_key" and "AWS_secret_key."
8. Create functions module and two functions within it: playmusic and amazoncomprehend.
9. Enter code for each function into its respective code editor on PubNub functions page.
10. Ensure that functions module is running and test your app!

**Sign up for PubNub click here:**

<a href="https://dashboard.pubnub.com/signup?devrel_gh=MoodTunes">
    <img alt="PubNub Signup" src="https://i.imgur.com/og5DDjf.png" width=260 height=97/>
</a>
