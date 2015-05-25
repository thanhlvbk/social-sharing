Package.describe({
  name: 'lethanh:social-sharing',
  version: '1.0.0',
  summary: 'The plugin manages share text, a file, or a URL (or all three) via the native sharing widget',
  git: '',
  documentation: 'README.md'
});

Cordova.depends({
    "nl.x-services.plugins.socialsharing": "4.3.18"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('particle4dev:rsvpjs@3.0.18', 'client');
  api.addFiles('social-sharing.js', 'web.cordova');
  if (api.export)
        api.export('SOCIAL_SHARING', 'web.cordova');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lethanh:social-sharing');
  api.addFiles('social-sharing-tests.js');
});