
<p align="center">
  <a href="" rel="YTS">
    <img width=150px height=150px src="https://raw.githubusercontent.com/ravindudil5han/yts/main/lib/20230709_134408.jpg" alt="YTS">
  </a>
</p>

# YTS Torrent Search

[![npm version](https://img.shields.io/npm/v/@your-username/yts)](https://www.npmjs.com/package/@your-username/yts)
[![License](https://img.shields.io/github/license/your-username/yts)](LICENSE)

A Node.js library for scraping torrent data from YTS.

## Installation

You can install the `yts` library via npm:

```bash
npm install @@dil5han/yts
```

## Usage

```javascript
const yts = require('@dil5han/yts');

yts.yts('search', 'page') // yts('movies', '1') Replace the word "movies" with the search you want to search
    .then((data) => {
        if (data === null) {
            console.log('Error: Failed to fetch data from YTS.');

        } else if (data.length === 0) {
            console.log('No search results');

        } else {
            console.log(data);
        }
    })
    .catch((error) => {
        console.log('Error:', error);
    });
```

## API

### yts(search, page)

Performs a search on YTS with the given query and returns an array of movie objects.

- `search` (string): The search query.
- `page` (string, optional): The page number to retrieve. Defaults to '1'.

Returns: `Promise<Array<Object>>`

Each movie object in the returned array has the following properties:

- `Url` (string): The URL of the movie on YTS.
- `Name` (string): The name of the movie.
- `Language` (string): The language of the movie.
- `Img` (string): The URL of the movie's poster image.
- `Release_date` (string): The release date of the movie.
- `Gen` (string): The genre of the movie.
- `Rating` (string): The rating of the movie.
- `Likes` (string): The number of likes for the movie.
- `Runtime` (string): The runtime of the movie.

Each movie object also contains an array `Torrents` with the following properties for each torrent:

- `Quality` (string): The quality of the torrent.
- `Type` (string): The type of the torrent.
- `Size` (string): The size of the torrent.
- `Torrent` (string): The URL of the torrent file.
- `Magnet` (string): The magnet URL of the torrent.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please refer to the [Contributing Guidelines](CONTRIBUTING.md) for more details.

## Issues

If you encounter any issues or have suggestions, please [open an issue](https://github.com/your-username/yts/issues).

## Credits

This library is developed and maintained by dilshan.

## Disclaimer

This library is intended for educational and personal use only. Please respect the legal rights of content creators and use torrents responsibly.


