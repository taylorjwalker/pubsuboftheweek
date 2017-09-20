# Pub Sub of the Week
## Publix Weekly Ad Scraper

This app scrapes the Publix Weekly Ad and returns the *Pub Sub of the Week* (the sub on sale this week and its cost). Currently, it uses simple caching to minimize web scraping. It can be refactored to work as an Alexa Skill, run on AWS Lambda.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. You will need node and npm installed.

### Installing

Fork and clone the repository. Install dependencies with:

    npm install

### Running

Run the code with:

	node app.js

## Built With

* [Node.js](https://nodejs.org/) - JavaScript runtime used to run the application 
* [Request](https://github.com/request/request) - Simple client used to make HTTP requests
* [Cheerio](https://cheerio.js.org/) - Core jQuery implementation used to parse HTML and traverse/manipulate the resulting data structure
* [Moment.js](https://momentjs.com/) - Library used to generate and operate on caching dates and times

## Contributing

Please feel free to contribute or give feedback on the [issues page](https://github.com/taylorjwalker/pubsuboftheweek/issues). Let's make the best Publix Weekly Ad Crawler with a focus on deli deals out there!

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [releases on this repository](https://github.com/taylorjwalker/pubsuboftheweek/releases). 

## Authors

* **Taylor Walker** - *Initial work* - [Website](http://taylorwalker.me/)

See also the list of [contributors](https://github.com/taylorjwalker/pubsuboftheweek/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to Publix for giving me the inspiration for this project by their delicious subs and enticing deals!
