# ts-rest fastify multipart validation proof

This request shouldn't go through since `requiredField` is not present:

```bash
$ curl -v -F file=@test1.txt  http://localhost:3000/test-multipart
*   Trying [::1]:3000...
* Connected to localhost (::1) port 3000
> POST /test-multipart HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/8.4.0
> Accept: */*
> Content-Length: 320
> Content-Type: multipart/form-data; boundary=------------------------3q4U6WyuPkdGV5zlMcYwW8
>
* We are completely uploaded and fine
< HTTP/1.1 201 Created
< content-type: application/json; charset=utf-8
< content-length: 15
< Date: Wed, 01 May 2024 15:39:26 GMT
< Connection: keep-alive
< Keep-Alive: timeout=72
<
* Connection #0 to host localhost left intact
{"status":"OK"}%
```
