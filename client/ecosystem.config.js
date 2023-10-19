module.exports = {
  apps: [
    {
      name: 'mercados', // Puedes cambiar esto al nombre de tu aplicación
      script: 'npx serve -s build',
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
