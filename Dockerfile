# building phase
FROM node:10 as builder

LABEL description="Landingpage for 'the lab website'"
LABEL project="lab-opendatacam-v2"
LABEL maintainer="florian.porada@moovel.com"

# Define working directory
WORKDIR /usr/src/app

# Copy everything for building phase
COPY . /usr/src/app

# Install Node modules
RUN npm install --unsafe-perm

# Run assets build (CSS,JS)
RUN npm run build

# Production phase
FROM node:10

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/.next /usr/src/app/.next
COPY --from=builder /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=builder /usr/src/app/package.json /usr/src/app/

EXPOSE 3000

CMD [ "npm", "run", "start" ]