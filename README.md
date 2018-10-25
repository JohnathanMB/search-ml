# mercado react
Frontend React que consume API de búsqueda de mercadolibre. \
\
Contendor docker: https://hub.docker.com/r/julianmunozm/mla-react/ \
Aplicación en heroku: https://search-ml.herokuapp.com/ \

Para correr la aplicación y editar en caliente:
``` bash
$ docker run --rm -it -p 3000:3000/tcp -p 35729:35729/tcp -v $(pwd):/app julianmunozm/mla-react:category
```
O utilizar la extensión de docker para vscode y agregar ```-v $(pwd):/app```
