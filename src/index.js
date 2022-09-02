import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createServer, Model } from "miragejs";

  createServer({
    models: {
      employee: Model,
    },

    seeds(server) {
      server.create("employee",        {
        id: 1,
        name: "José Ferreira",
        document: "111.111.111-00",
        email: "jose@email.com",
        phone: "(11)9.8765-4321",
        birth_date: "21/01/2000",
        salary: "1000",
        create_at: new Date()
      })
    },

    routes() {
      this.get("/api/employees", (schema) => {
        return schema.employees.all()
      })

      this.post("/api/employees", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)

        return schema.employees.create(attrs)
      })
    },
  })


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
