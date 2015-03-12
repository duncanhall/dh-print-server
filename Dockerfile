#################################
# PRINTATRON SERVER
#################################

FROM dockerfile/nodejs

MAINTAINER Duncan Hall <himsel@duncanhall.net>

COPY app                /data/app
COPY public             /data/public
COPY ./server.js        /data/
COPY ./package.json     /data/

RUN sudo apt-get update && apt-get install -y libcups2-dev

RUN npm install

WORKDIR /data

EXPOSE 1985

CMD ["bash"]