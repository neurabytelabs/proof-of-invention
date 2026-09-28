# Serves site/ as a static site. Build from the repository root:
#   docker build -f deploy/Dockerfile .
FROM nginx:alpine
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY site/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
