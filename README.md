# Basch
[![Build Status](https://travis-ci.org/LinuCC/basch.svg?branch=master)](https://travis-ci.org/LinuCC/basch)

Stuff here

## Webpack stuff

Many processes watching many files in dev-mode... increase inotify-limit if
somethings awkward.

## Upgrade node-packages

The `npm-check-updates` package is helpful in upgrading all the dependencies.

## Onboarding

Who doesnt love surfing?

Install `postgresql`, `ruby`, `node` & `npm`.
In this projects directory, run `gem install bundle`, then `bundle install`.

Also, just to be sure, run `npm upgrade node-sass` if you have already used
`node-sass`on the machine previously.

Configure `postgresql`:

Start `postgresql`, switch to the privileged user (`sudo su - postgres`), run
`psql`.

Execute:
`CREATE ROLE basch WITH LOGIN;`
`CREATE DATABASE basch_development OWNER basch;`
`CREATE DATABASE basch_test OWNER basch;`
`\q`

run `rake db:setup`.
