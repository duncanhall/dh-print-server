#################################
# PRINTATRON SERVER
#################################

FROM dockerfile/nodejs

MAINTAINER Duncan Hall <himsel@duncanhall.net>

COPY app                /data/app
COPY public             /data/public
COPY ./server.js        /data/
COPY ./package.json     /data/

RUN npm install

WORKDIR /data

EXPOSE 1985

CMD ["node", "server.js"]