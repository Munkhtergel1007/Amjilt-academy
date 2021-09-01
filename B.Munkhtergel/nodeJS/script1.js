  db.createCollection("students", {
    validator: {
      bsonType: "object",
      required: ["fullname"],
      properties: {
        fullname: {
          bsonType: "string",
          description: "must be string",
        },
      }
    }
  })