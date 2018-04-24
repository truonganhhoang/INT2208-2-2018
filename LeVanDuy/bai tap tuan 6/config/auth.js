// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {
    'twitterAuth' : {
        'consumerKey'        : 'nmbk1uqKB0rbWjBxrPv9iksEf',
        'consumerSecret'     : 'QeBlJHanPy232ZbOhyPisfI8hLLUVMujXjuI7Sz0Ym4o6m7eGF',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '310888892418-vtum0im1angbkhe5i4t0ns3o9mhi926o.apps.googleusercontent.com',
        'clientSecret'     : '-SS3ylFup2-E4ZJD3TNM_iNF',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
