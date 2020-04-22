import { serve } from "https://deno.land/std@v0.36.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}

//console.log("Hello vendor API")
//const listener = Deno.listen({ port: 3000 })

//console.log("listen port 3000")

//for await (const conn of listener) {
//  console.log(conn)
//  Deno.copy(conn, conn)
//}
