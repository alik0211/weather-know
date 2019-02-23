#!/bin/bash
set -e

CLEAN_BRANCH_NAME=${CIRCLE_BRANCH//\//-};

JSON=$(cat <<-EOF
{
  "name": "$CIRCLE_PROJECT_REPONAME-$CLEAN_BRANCH_NAME",
  "alias": [
    "$CIRCLE_PROJECT_REPONAME-$CLEAN_BRANCH_NAME.now.sh"
  ]
}
EOF
)

echo $JSON > .now/now.pull.json