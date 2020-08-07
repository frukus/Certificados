#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://daykore.github.io
# git push -f git@github.com:daykore/daykore.github.io.git master

# if you are deploying to https://daykore.github.io/<REPO>
git push -f git@github.com:frukus/Certificados.git master:gh-pages

cd -
