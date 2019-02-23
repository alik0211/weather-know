#!/bin/bash
set -e

PULL_NUM=${CI_PULL_REQUEST#"https://github.com/$CIRCLE_PROJECT_USERNAME/$CIRCLE_PROJECT_REPONAME/pull/"}

JSON=$(cat <<-EOF
{
  "version": 2,
  "name": "$CIRCLE_PROJECT_REPONAME-pull-$PULL_NUM",
  "alias": ["$CIRCLE_PROJECT_REPONAME-pull-$PULL_NUM.now.sh"],
  "routes": [
    {
      "src": "^/static/(.*)",
      "headers": { "cache-control": "s-maxage=31536000,immutable" },
      "dest": "/static/$1"
    },
    { "src": "^/favicon.ico", "dest": "/favicon.ico" },
    { "src": "^/asset-manifest.json", "dest": "/asset-manifest.json" },
    { "src": "^/manifest.json", "dest": "/manifest.json" },
    { "src": "^/precache-manifest.(.*)", "dest": "/precache-manifest.$1" },
    {
      "src": "^/service-worker.js",
      "headers": { "cache-control": "s-maxage=0" },
      "dest": "/service-worker.js"
    },
    {
      "src": "^/(.*)",
      "headers": { "cache-control": "s-maxage=0" },
      "dest": "/index.html"
    }
  ]
}
EOF
)

echo $JSON > .now/now.pull.json
