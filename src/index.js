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
        document: "123.456.789-00",
        email: "jose@email.com",
        phone: "(11) 9.8765-4321",
        birth_date: "21/01/2000",
        salary: "RS 1.000,00",
        create_at: "21/01/2019"
      })
    },

    routes() {
      this.get("/api/employees", (schema) => {
        return schema.employees.all('employee')
      })

      this.post("/api/employees", (schema, request) => {
        let data = JSON.parse(request.requestBody)

        return schema.create('employee', data)
      })
    },
  })


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
