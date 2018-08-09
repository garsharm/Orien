module.exports = {
  apps : [{
    name      : 'API',
    script    : 'index.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      key  : '/c/starserver.pem',
      host : 'ec2-13-58-82-111.us-east-2.compute.amazonaws.com',
      ref  : 'origin/master',
      repo : 'git@github.com:garsharm/Orien.git',
      path : '~/pm2Dir',
      'post-deploy' : 'npm install'
    },
  }
};
