db.createCollection("students", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["fullname", "email", "number", "angi", "nas"],
            properties: {
                fullname: {
                    bsonType: "string",
                    description: 'fullname must be included'
                },
                email: {
                    bsonType: "string",
                    description: 'email must be included'
                },
                number: {
                    bsonType: "number",
                    description: 'number must be included'
                },
                angi: {
                    bsonType: "string",
                    description: 'angi must be included'
                },
                nas: {
                    bsonType: "number",
                    description: 'nas must be included'
                },

            }
        }
    }
})


db.createCollection("students", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["yahoo", "email", "icloud"],
            properties: {
                yahoo: {
                    bsonType: "string",
                    description: 'yahoo must be included'
                },
                email: {
                    bsonType: "string",
                    description: 'email must be included'
                },
                icloud: {
                    bsonType: "string",
                    description: 'icloud must be included'
                },
            }
        }
    }
})