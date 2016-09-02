# Pixel 2 HTML demo
[![Build Status](https://travis-ci.org/adykto/htmltest.svg?branch=dev)](https://travis-ci.org/adykto/htmltest)
[![Code Climate](https://codeclimate.com/github/adykto/htmltest/badges/gpa.svg)](https://codeclimate.com/github/adykto/htmltest)
[![Dependency Status](https://www.versioneye.com/user/projects/57c8feaa968d640039516e59/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/57c8feaa968d640039516e59)

### Environments

* Production: https://px2html.alonsomendez.net/
* Stage: https://px2html-amendez-stage.netlify.com/
* Development: http://px2html.dev


### Dev Requirements

* NodeJS
* Docker
* Gulp, Bower, Karma

### Dev Setup

* Clone this repo in your ~/Public directory:
```bash
    $ cd ~/Public
    $ git clone git@github.com:adykto/px2html.git
    $ cd px2html
```

* Install project dependencies
```bash
    $ npm install
    $ bower install
```

* Build assets
```bash
    $ gulp build
```

* Start server
```bash
    $ npm serve
```

* Add `px2html.dev` to your hosts file pointing to localhost
```bash
   $ sudo echo "127.0.0.1  px2html.dev" >> /etc/hosts
```

* Open `http://px2html.dev` in your browser

### Collaborators

* Adykto
* Px2HTML
