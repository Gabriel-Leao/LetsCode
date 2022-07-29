const dns = require('dns')

dns.promises.resolve('google.com.br').then(ip => console.log(ip))
dns.promises.lookup('google.com.br').then(ip => console.log(ip))
dns.promises.resolveAny('facebook.com').then(ip => console.log(ip)).catch(err => console.log(err))