var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReqTypeSchema = new Schema({
    reqType: String,
})

var NewActionItemSchema = new Schema({
    id: Number,
    ActionItemID: String,
    EntityID: String,
    EntityName: String,
    DeliveryLead: String,
    DeliveryManager: String,
    Category: String,
    SubCategory: String,
    ActionItemType: String,
    Severity: String,
    CompletionStatus: String,
    UpdateEntry: String,
    requestType: ReqTypeSchema,
    ccnab: String
}, { timestamps: true });

module.exports = mongoose.model("action_item", NewActionItemSchema);