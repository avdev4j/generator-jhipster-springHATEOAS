# generator-jhipster-springHATEOAS
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> JHipster blueprint, add spring hateoas for better REST API -&gt; let the media, let the media in !

# Introduction

This is a [JHipster](http://jhipster.github.io/) blueprint, that is meant to be used in a JHipster application.

# Prerequisites

As this is a [JHipster](http://jhipster.github.io/) blueprint, we expect you have JHipster and its related tools already installed:

- [Installing JHipster](https://jhipster.github.io/installation.html)

# Installation

## With Yarn

To install this blueprint:

```bash
yarn global add generator-jhipster-springHATEOAS
```

To update this blueprint:

```bash
yarn global upgrade generator-jhipster-springHATEOAS
```

## With NPM

To install this blueprint:

```bash
npm install -g generator-jhipster-springHATEOAS
```

To update this blueprint:

```bash
npm update -g generator-jhipster-springHATEOAS
```

# Usage

To use this blueprint, run the below command

```bash
jhipster --blueprint springHATEOAS
```

Please consider this responses from my blueprint test to generate a new project.
At this moment only Monolithic/JWT/SQL/Maven config work with Spring HATEOAS.
 
```
? Which *type* of application would you like to create? Monolithic application (recommended for simple projects)
? What is the base name of your application? test_blueprint_HATEOAS
Trying to use blueprint generator-jhipster-springHATEOAS
? What is your default Java package name? fr.avd.com
? Do you want to use the JHipster Registry to configure, monitor and scale your application? No
? Which *type* of authentication would you like to use? JWT authentication (stateless, with a token)
? Which *type* of database would you like to use? SQL (H2, MySQL, MariaDB, PostgreSQL, Oracle, MSSQL)
? Which *production* database would you like to use? MySQL
? Which *development* database would you like to use? H2 with disk-based persistence
? Do you want to use the Spring cache abstraction? Yes, with the Ehcache implementation (local cache, for a single node)
? Do you want to use Hibernate 2nd level cache? Yes
? Would you like to use Maven or Gradle for building the backend? Maven
? Which other technologies would you like to use?
? Would you like to enable internationalization support? Yes
? Please choose the native language of the application English
? Please choose additional languages to install
? Besides JUnit and Jest, which testing frameworks would you like to use?
? Would you like to install other generators from the JHipster Marketplace? No

```
 
## During development of this blueprint

1. On blueprint folder `yarn link`
2. On blueprint folder `yarn link generator-jhipster`
2. On the project created `yarn link generator-jhipster`
4. On the project created `yarn link generator-jhipster-springHATEOAS`


# License

Apache-2.0 © [Anthony Viard](https://twitter.com/avdev4j)


[npm-image]: https://img.shields.io/npm/v/generator-jhipster-springHATEOAS.svg
[npm-url]: https://npmjs.org/package/generator-jhipster-springHATEOAS
[travis-image]: https://travis-ci.org/avdev4j/generator-jhipster-springHATEOAS.svg?branch=master
[travis-url]: https://travis-ci.org/avdev4j/generator-jhipster-springHATEOAS
[daviddm-image]: https://david-dm.org/avdev4j/generator-jhipster-springHATEOAS.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/avdev4j/generator-jhipster-springHATEOAS
