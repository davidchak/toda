FROM node:lts-alpine

# делаем каталог 'app' текущим рабочим каталогом
WORKDIR /app

# копируем оба 'package.json' и 'package-lock.json' (если есть)
COPY ./code/client/package*.json ./

# устанавливаем зависимости проекта
RUN yarn install

# копируем файлы и каталоги проекта в текущий рабочий каталог (т.е. в каталог 'app')
COPY ./code/client/ .

# собираем приложение для production с минификацией
RUN yarn run build

CMD [ "yarn", "run", "start" ]
