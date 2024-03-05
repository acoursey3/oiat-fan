FROM node:18

WORKDIR /src

COPY package*.json ./

COPY entrypoint.sh .

RUN chmod +x entrypoint.sh

RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 3000

ENTRYPOINT [ "./entrypoint.sh" ]
