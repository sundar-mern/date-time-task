# date-time-task


deployment link  :  https://datetime-649p.onrender.com/


DateTime API
This API allows you to get the current date and time and store it in a file.
Base URL
Base URL: http://localhost:7000

Endpoints
1. Get Current Date and Time
Endpoint: /
Method: GET
Description: Retrieves the current date and time and responds with the details.
No request parameters required.
Example Response:
time:HH:mm:ss Date:Day, DD Month YYYY
Status Code: 200 OK
Body: The response body will contain the current date and time.

Request
GET http://localhost:7000/
Responce
time: 05:17:20.36 Date: 2023-11-30
Running the Server
npm start

