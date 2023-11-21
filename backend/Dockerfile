FROM python:3.11-slim-buster

WORKDIR /backend

COPY requirements.txt ./

RUN pip3 install -r requirements.txt

COPY . .

ENV PORT=5000

EXPOSE 5000

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]