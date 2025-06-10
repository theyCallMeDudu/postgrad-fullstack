from neo4jrestclient.client import GraphDatabase

db = GraphDatabase("http://localhost:7474", username="neo4j", password="neo4j")

# Create some nodes with labels
user = db.labels.create("Usuario")
u1 = db.nodes.create(name="Bob")
u1 = db.nodes.create(name="Alice")
u1 = db.nodes.create(name="Lea")
u1 = db.nodes.create(name="Ana")
u1 = db.nodes.create(name="Pedro")

user.add(u1, u2, u3, u4, u5)

u1.relationships.create("follows", u2)
u4.relationships.create("follows", u1)
u2.relationships.create("follows", u3)
u2.relationships.create("follows", u5)
