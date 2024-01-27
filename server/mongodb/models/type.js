import mongoose from "mongoose"

const PropertyTypeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    property_count: {type: Number, required: true},
    created_at: { type: Date, default: Date.now }
})

const PropertyTypeModel = mongoose.model("propertyType", PropertyTypeSchema);

export const getAllPropertyType = () => PropertyTypeModel.find();
export const createPropertyType = (values) => new PropertyTypeModel(values)
.save().then((user) => user.toObject());
export const getPropertyTypeByName = (name) => PropertyTypeModel.findOne({"name": name});


export default PropertyTypeModel;