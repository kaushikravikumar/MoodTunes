export default (request, response) => {

    const xhr = require('xhr'); // xhr module to make HTTP requests

    var speech_input = JSON.parse(request.body).queryResult.queryText; // User's speech input

    const amazon_url = "ENTER URL TO AMAZON COMPREHEND FUNCTION";

    // Object with amazon comprehend function request parameters
    const amazon_request_options = {
        "method": "POST",
        "body": {
            "speechInput": speech_input,
            "comprehend": {
                "language": "en",
                "location": "speechInput"
            }
        }
    };
    return xhr.fetch(amazon_url, amazon_request_options).then((sentiment_response) => {
        var positive_measure = JSON.parse(sentiment_response.body).sentiment.SentimentScore.Positive; // Number from 0 to 1 representing how positive user's speech input was.
        var song_url;

        // Really happy song
        if (positive_measure > 0.75) {
            song_url = "https://github.com/kaushikravikumar/MoodTunes/blob/master/music_files/reallypositive.mp3?raw=true";
        }
        // Slightly happy song
        else if (positive_measure > 0.5) {
            song_url = "https://github.com/kaushikravikumar/MoodTunes/blob/master/music_files/slightlypositive.mp3?raw=true";
        }
        // Slightly sad song
        else if (positive_measure > 0.25) {
            song_url = "https://github.com/kaushikravikumar/MoodTunes/blob/master/music_files/slightlynegative.mp3?raw=true";
        }
        // Really sad song
        else {
            song_url = "https://github.com/kaushikravikumar/MoodTunes/blob/master/music_files/reallynegative.mp3?raw=true";
        }
        // Stringified JSON response sent to Dialogflow, which contains instructions on playing song.
        response.send(JSON.stringify({
            "payload": {
                "google": {
                    "expectUserResponse": false,
                    "richResponse": {
                        "items": [{
                                "simpleResponse": {
                                    "textToSpeech": "Playing song!"
                                }
                            },
                            {
                                "mediaResponse": {
                                    "mediaType": "AUDIO",
                                    "mediaObjects": [{
                                        "name": "Song",
                                        "description": "Based on your mood",
                                        "contentUrl": song_url
                                    }]
                                }
                            }
                        ],
                        "suggestions": []
                    }
                }
            }
        }));
        return response;
    });
};
