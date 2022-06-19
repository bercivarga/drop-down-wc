# drop-down web component, made with [lit](https://lit.dev)

to run the project, first clone the repo and then run the following commands:
```shell
cd drop-down-wc
npm i
npm start
```

and see the demo site on [http://localhost:1234](http://localhost:1234)

## tech used

- web components
- the lit library to help me keep my sanity while working with web components
- parcel to bundle everything

### disclaimer

this is an experimental project I made in a couple hours just to test out web components

so far they seem really promising, however I noticed some issues with implementing dynamic styling changes or styling changes when initialising the components, which you'd get in other framework pretty easily

referencing elements is also weird if you want to get their height for example in order to define a different element's styles

on the other hand, these components feel really versatile since you can use them in any project, no matter the framework. it's basically making you an html god

for further info on wcs, check out [this repo by the legendary dave rupert](https://github.com/davatron5000/awesome-standalones)
