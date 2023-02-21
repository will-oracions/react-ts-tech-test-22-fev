FROM node:19-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . /app
RUN yarn build
EXPOSE 34000
CMD ["yarn", "start"]