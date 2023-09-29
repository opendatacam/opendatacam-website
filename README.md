# OpenDataCam Website

This repository hosts the code for the OpenDataCam Website: [https://opendata.cam](https://opendata.cam).

## Contributing

Just like OpenDataCam, the website is open source, so anyone can contribute.
The simplest way to contribute to the OpenDataCam website is to edit pages directly via GitHub.
Just open the page/file that you want to update and follow the [instruction on how to edit files in GitHub](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files).

When you are done editing, create a new pull-request, so the OpenDataCam communitiy can review your edits.
Once the pull request get's merged, your changes will be visible on the website in a few minutes.

## Local Development

For more complex changes to the website it may be useful to set up a local development environment to test the changes before they go live.
Doing so is quite easy, as this website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

Requirements: NodeJS & npm

Install dependencies via npm

```
$ npm i
```

### Serving Locally

This command starts a local development server on HTTP port 3000 and opens up a browser window.
Most changes are reflected live without having to restart the server.

```
$ npm run dev
```

### Contributing your changes

Just like with editing GitHub directly, to make your changes go live, open a Pull Reques against the `main` branch of the [opendatacam-website](https://github.com/opendatacam/opendatacam-website) repository.

## License

The OpenDataCam Website is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
The source code in this repository is licensed under [MIT](https://mit-license.org/).
All third party components incorporated into the OpenDataCam Website are licensed under the original license provided by the owner of the applicable component.
