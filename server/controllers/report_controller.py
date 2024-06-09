import uuid
from flask import jsonify, request
from flask_jwt_extended import get_jwt_identity, jwt_required
from flask_restx import Namespace ,Resource
from models.base_model import baseModel
from models.users import User
from models.reports import Reports
# Create a Namespace for user operations
report = Namespace('Report', description='Report operations', path='/users')

@report.route('/<string:user_id>/report')
class GetAllReport(Resource):
    @jwt_required()
    def get(self,user_id):
        try:
            current_user = get_jwt_identity()
            if user_id == current_user:
                filter_condition = {"created_by": current_user}
                reports = baseModel.get_all(Reports, filter_condition)
                return reports
            else:
                return {"message": "Unauthorized"},401
        except Exception as e:
            return {'msg': e}

# @report.route('<int:user_id>/update/')
# class update_report(Resource):
#     @jwt_required()
#     def patch(self,user_id):
#         try:
#             data = request.json
#             current_user_id = get_jwt_identity()
#             current_user=baseModel.get_one(User,current_user_id)
#             if current_user['role'] !='admin':
#                 if user_id != current_user_id:
#                     return jsonify({"message": "Unauthorized"})
#                 else:
#                     updated_user = baseModel.update(User, current_user_id,data)
#             else:
#                 updated_user = baseModel.update(User, user_id,data)
#             return updated_user
#         except Exception as e:
#             return {'msg':e}

# @report.route('/user/delete/<int:user_id>')
# class delete_report(Resource):
#     @jwt_required()
#     def delete(self,user_id):
#         try:
#             current_user_id = get_jwt_identity()
#             current_user=baseModel.get_one(User,current_user_id)
#             if current_user['role'] !='admin':
#                 if user_id != current_user_id:
#                     return jsonify({"message": "Unauthorized"})
#                 else:
#                     deleted_user = baseModel.delete(User, current_user_id)
#             else:
#                 deleted_user=baseModel.delete(User,user_id)
#             return deleted_user
#         except Exception as e:
#                 return {'msg':e}
    
