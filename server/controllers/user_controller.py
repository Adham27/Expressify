from flask import jsonify, request
from flask_jwt_extended import get_jwt_identity, jwt_required
from flask_restx import Namespace ,Resource
from models.base_model import baseModel
from models.users import User

# Create a Namespace for user operations
user = Namespace('User', description='User operations', path='/')

# admin 
@user.route('/users')
class get_all_users(Resource):
    @jwt_required()
    def get(self):
        try:
            current_user = baseModel.get_one(User,get_jwt_identity())
            if current_user['role'] != 'admin':
                return jsonify({'message': 'You are not authorized to access this resource'})
            users = baseModel.get_all(User)
            return users
        except Exception as e:
            return {'msg':e}

@user.route('/user/<int:user_id>')
class get_one_user(Resource):
    @jwt_required
    def get(self,user_id):
        try:
            user=baseModel.get_one(User,user_id)
            return user
        except Exception as e:
            return {'msg':e}

@user.route('/user/update/<int:user_id>')
class update_user(Resource):
    @jwt_required()
    def patch(self,user_id):
        try:
            data = request.json
            current_user_id = get_jwt_identity()
            current_user=baseModel.get_one(User,current_user_id)
            if current_user['role'] !='admin':
                if user_id != current_user_id:
                    return jsonify({"message": "Unauthorized"})
                else:
                    updated_user = baseModel.update(User, current_user_id,data)
            else:
                updated_user = baseModel.update(User, user_id,data)
            return updated_user
        except Exception as e:
            return {'msg':e}

@user.route('/user/delete/<int:user_id>')
class delete_user(Resource):
    @jwt_required()
    def delete(self,user_id):
        try:
            current_user_id = get_jwt_identity()
            current_user=baseModel.get_one(User,current_user_id)
            if current_user['role'] !='admin':
                if user_id != current_user_id:
                    return jsonify({"message": "Unauthorized"})
                else:
                    deleted_user = baseModel.delete(User, current_user_id)
            else:
                deleted_user=baseModel.delete(User,user_id)
            return deleted_user
        except Exception as e:
                return {'msg':e}
    
