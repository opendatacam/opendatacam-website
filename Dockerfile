# building phase
FROM node:10 as builder

LABEL description="Landingpage for 'opendatacam website v2'"
LABEL project="lab-opendatacam-v2"
LABEL maintainer="florian.porada@free-now.com"

# Define working directory
WORKDIR /usr/src/app

# Copy everything for building phase
COPY . /usr/src/app

# Install Node modules
RUN npm install --unsafe-perm

# Run assets build (CSS,JS)
RUN npm run export

# production phase
FROM nginx

EXPOSE 80

COPY --from=builder /usr/src/app/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/out /usr/share/nginx/html
