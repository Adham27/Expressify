from sqlalchemy import and_
from models.db import db
from flask import jsonify


class baseModel:

    @classmethod
    def find_by_field(cls, model, field, value):
        return model.query.filter(getattr(model, field) == value).first()

    @classmethod
    def find_by_id(cls, model, id):
        return model.query.get(id)

    @classmethod
    def get_all(cls, model, filter_condition=None):
        query = model.query
        if filter_condition:
            filter_expr = and_(*[getattr(model, key) == value for key, value in filter_condition.items()])
            query = query.filter(filter_expr)

        items = query.all()
        item_list = [item.serialize() for item in items]
        return jsonify(item_list)

    @classmethod
    def get_one(cls, model, id, filter_condition=None):
        query = model.query
        if filter_condition:
            query = query.filter(filter_condition)
        item = query.get(id)
        if item:
            return item.serialize()
        else:
            return jsonify({"message": f"{model.__name__} not found"})
       

    @classmethod
    def update(cls, model, id, new_data):
            item = cls.find_by_id(model, id)
            if item:
                for key, value in new_data.items():
                    setattr(item, key, value)
                db.session.commit()
                return jsonify({"message": f"{model.__name__} updated successfully"})
            else:
                return jsonify({"message": f"{model.__name__} not found"})

    @classmethod
    def delete(cls, model, id):
        item = cls.find_by_id(model, id)
        if item:
            db.session.delete(item)
            db.session.commit()
            return jsonify({"message": f"{model.__name__} deleted successfully"})
        else:
            return jsonify({"message": f"{model.__name__} not found"})
        

    @classmethod
    def search(cls, model, field, value):
            item = cls.find_by_field(model, field, value)
            if item:
                return jsonify(item.serialize())
            else:
                return jsonify({"message": f"{model.__name__} not found"})
       