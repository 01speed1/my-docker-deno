
FROM maxmcd/deno:slim
RUN mkdir -p /vendorApi
WORKDIR /vendorApi
COPY . .
EXPOSE 3000