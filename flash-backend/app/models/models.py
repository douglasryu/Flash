from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(20), nullable=False)
    last_name = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(100), nullable = False, unique=True)
    hashed_password = db.Column(db.String(128), nullable=False)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.hashed_password, password)

    def to_dict(self):
        return { "id": self.id, "firstName": self.first_name, "lastName": self.last_name }


class Product(db.Model):
    __tablename__ = 'products'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(1000), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String, nullable=True)
    imgurl = db.Column(db.String, nullable=False)
    brand = db.Column(db.String(50), nullable = False)
    category = db.Column(db.Integer, nullable = False)

    def to_dict(self):
        return { 
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "description": self.description,
            "imgUrl": self.imgurl,
            "brand": self.brand,
            "category": self.category,
        }


class Transaction(db.Model):
    __tablename__ = 'transactions'

    id = db.Column(db.Integer, primary_key=True)
    products = db.Column(db.ARRAY(db.Integer))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    total = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        return { 
            "id": self.id,
            "products": self.products,
            "userId": self.user_id,
            "total": self.total
        }


class Review(db.Model):
    __tablename__ = 'reviews'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    first_name = db.Column(db.String(20), nullable=False)
    last_name = db.Column(db.String(20), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    review_body = db.Column(db.String(1000), nullable=False)

    def to_dict(self):
        return { 
            "id": self.id,
            "userId": self.user_id,
            "firstName": self.first_name,
            "lastName": self.last_name,
            "productId": self.product_id,
            "reviewBody": self.review_body,
        }