FROM node:14-alpine AS BUILD_IMAGE

# Create app directory
WORKDIR /usr/src/app


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# this is for npm
# COPY package*.json ./
# but we use yarn
COPY ["package.json", "yarn.lock", "./"]

# npm comes with node
# RUN npm install
# if we use yarn, we need firstly install it
# RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# equivalent for `npm ci`, see https://stackoverflow.com/a/58525708/1553656
# If you are building your code for production
# RUN npm ci --only=production
RUN yarn config set registry https://registry.npm.taobao.org/

RUN yarn install --frozen-lockfile

# Bundle app source
COPY . .

RUN yarn build

######## step 2 ########

# FROM node:14-alpine

# WORKDIR /usr/src/app

# COPY --from=BUILD_IMAGE /usr/src/app/build ./build
# COPY --from=BUILD_IMAGE /usr/src/app/node_modules ./node_modules

EXPOSE 3000
CMD [ "npm", "run", "serve"]