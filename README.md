#pifm-node
 
A Node.js software to play musics on a __FM radio__ in command line.  
Only on Raspberry Pi.

[![Build Status](https://travis-ci.org/cedced19/pifm-node.svg)](https://travis-ci.org/cedced19/pifm-node)

![](https://raw.githubusercontent.com/cedced19/pifm-node/master/demo.png)

##What say laws ?
You do not have the right to broadcast radio in most countries.  
I am __not__ at all responsible for your actions.  

##Installation

```bash
$ git clone --depth=1 --branch=master https://github.com/cedced19/pifm-node 
$ cd ./pifm-node/
$ npm install
$ chmod 777 pifm
$ node pifm-node.js
```

You can place your musics anywhere in the folder.


##Configuration

You can change the frequency, rate or port on `config.json`

See default options:

```json
{
    "freq": 108.5,
    "rate": 22050
}
```