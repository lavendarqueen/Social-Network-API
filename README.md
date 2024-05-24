# <Social-Network-API>

![vite](https://img.shields.io/badge/vite-5.1.6-violet) ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath) ![Express](https://img.shields.io/badge/Express-4.19.2-blue) ![Mongoose](https://img.shields.io/badge/Mongoose-8.4.0-green)

## Description

Social-Network-API is an API for a social network that uses a NoSQL database
so that the website can handle large amounts of unstructured data. I built this project because I wanted to learn how to use a database with unstructured data. I learned how to use compass and Insomnia to check and manipulate the Mongo database.

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)
- [Contributions](#contributions)
- [Questions](#questions)
- [User Story](#user_story)

## Installation

Installation required installation of express and mongoose from the command line as follows:

npm express@4.19.2
npm mongoose@

## Usage

The user must turn on the server by entering the following command in the command line:



## Tests

All routes were tested using Insomnia. Please see screenshots and video walk-through;

![alt text](assets/images/screenshot.png)

## Credits

I collaborated with the following individuals: Fellow student Melissa Cade and Tutor Megan Meyers.

I also consulted the following third-party assets:

## License

![License](https://img.shields.io/badge/License-MIT-blue.svg)

Copyright (c) 2024 Phyllis Ann Lataille

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributions

Any contributions made in the spirit of sharing ideas and concepts, will be greatly appreciated. If you have any suggestions that would make this app better, please fork the repo and create a pull request. You can also open an issue with the tag "contribute". Please give this project a star!

### Instructions for forking:

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/fileName)
3. Commit your Changes (git commit -m)
4. Push to the Branch (git push origin feature/newFeature)
5. Open a Pull Request

## Questions

Please reach out by email or visit my GitHub account with any questions:

- Email: lataillep@gmail.com
- GitHub Username: lavendarqueen
- Deployed Website: <Link>
- GitHub Repository: <https://github.com/lavendarqueen/Social-Network-API

## User Story

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

### Acceptance Criteria

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
