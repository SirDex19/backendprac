// const NewTicket = require("../models/new-ticket-model");
const ActionItem = require("../models/new-actionitem-model");

exports.addActionItem = async(req, res) => {
    console.log('req body')
    console.log(req.body);
    const newActionItem = new ActionItem({
        id: req.body.id,
        ActionItemID: req.body.ActionItemID,
        EntityID: req.body.EntityID,
        EntityName: req.body.EntityName,
        DeliveryLead: req.body.DeliveryLead,
        DeliveryManager: req.body.DeliveryManager,
        Category: req.body.Category,
        SubCategory: req.body.SubCategory,
        ActionItemType: req.body.ActionItemType,
        Severity: req.body.Severity,
        CompletionStatus: req.body.CompletionStatus,
        UpdateEntry: req.body.UpdateEntry,
    });
    newActionItem.save((err, doc) => {
        err
            ?
            res.status(500).send(err) :
            res.status(201).json({
                message: "Action Item created successfully",
                // activityId: doc._id,
                // documents: doc,
            });
    });
};

exports.getActionItems = async(req, res) => {
    console.log(req.body);

    queryObject = {};
    query = req.query["status"] !== undefined ? queryObject.status = req.query["status"] : '';
    console.log(queryObject);

    ActionItem.find(queryObject, function(err, action_item) {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            console.log(action_item.count);
            res.status(200).type("json").send(JSON.stringify(action_item, null, 4));

            // res.send(tickets)
        }
    })
};


exports.updateActionItem = async function(req, res) {
    console.log("update action item");
    console.log(req.params.objectId)
    console.log(req.body);
    ActionItem.findOneAndUpdate({ id: req.params.id }, req.body, { new: true, useFindAndModify: false }, function(err, action_item) {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            console.log(action_item)
            res.status(200).type("json").send(JSON.stringify(action_item, null, 4));
        }
    });
};

exports.deleteActionItem = async(req, res) => {
    ActionItem.deleteOne({ id: req.params.id }, (err, action_item) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).type("json").send(JSON.stringify(action_item, null, 4));
        }
    });
};




// exports.getTicketsByStatus = async (req, res) => {
//   console.log(req.body);

//   queryObject = {};
//   // query = req.query["status"] == "New" || req.query["status"] == "In progress" || req.query["status"] == "Additional Information Needed" || req.query["status"] == "Additional Information Provided" ? queryObject.status = req.query["status"] : '';
//   // console.log(queryObject);

//   // queryObject = {};
//   // var query = req.params.status
//   // queryObject.status = query;

//   query = req.query["status"] == "Closed" ? queryObject.status = req.query["status"] : '';
//   console.log(queryObject);

//   status = req.params.status;
//   console.log('backend status')
//   console.log(status)
//   if(status === 'Open'){
//     statusQuery = {status : ['New', 'In Progress', 'AIN']}
//     Ticket.find(statusQuery, function(err, tickets){
//       if (err) {
//         res.status(500).json({ error: err });
//       } else {
//         console.log(tickets);
//         res.status(200).type("json").send(JSON.stringify(tickets, null, 4));

//         // res.send(tickets)
//       }
//     })
//     // statusQuery = {status : 'New', status : 'In Progress', status: 'AIN'}
//   }else if(status === 'Completed'){
//     statusQuery = {status : 'Completed'}
//     Ticket.find(statusQuery, function(err, tickets){
//       if (err) {
//         res.status(500).json({ error: err });
//       } else {
//         console.log(tickets);
//         res.status(200).type("json").send(JSON.stringify(tickets, null, 4));

//         // res.send(tickets)
//       }
//     })
//   }else if(status === 'Cancelled'){
//     statusQuery = {status : 'Cancelled'}
//     Ticket.find(statusQuery, function(err, tickets){
//       if (err) {
//         res.status(500).json({ error: err });
//       } else {
//         console.log(tickets);
//         res.status(200).type("json").send(JSON.stringify(tickets, null, 4));

//         // res.send(tickets)
//       }
//     })
//   }


// };

// exports.getOpenTickets = async (req, res) => {
//   console.log(req.body);

//   queryObject = {};
//   // query = req.query["status"] == "New" || req.query["status"] == "In progress" || req.query["status"] == "Additional Information Needed" || req.query["status"] == "Additional Information Provided" ? queryObject.status = req.query["status"] : '';
//   // console.log(queryObject);

//   // queryObject = {};
//   // var query = req.params.status
//   // queryObject.status = query;

//   query = req.query["status"] == "Closed" ? queryObject.status = req.query["status"] : '';
//   console.log(queryObject);

//   status = req.params.status;
//   console.log('backend status')
//   console.log(status)
//   if(status == 'open'){
//     statusQuery = {status : ['New', 'In Progress', 'AIN']}
//     // statusQuery = {status : 'New', status : 'In Progress', status: 'AIN'}
//   }else if(status == 'completed'){
//     statusQuery = {status : 'Completed'}
//   }else if(status == 'Cancelled'){
//     statusQuery = {status : 'Cancelled'}
//   }

//   Ticket.find(statusQuery, function(err, tickets){
//     if (err) {
//       res.status(500).json({ error: err });
//     } else {
//       console.log(tickets);
//       res.status(200).type("json").send(JSON.stringify(tickets, null, 4));

//       // res.send(tickets)
//     }
//   })
// };

// exports.getCompletedTickets = async (req, res) => {
//   console.log(req.body);

//   queryObject = {};
//   // query = req.query["status"] == "New" || req.query["status"] == "In progress" || req.query["status"] == "Additional Information Needed" || req.query["status"] == "Additional Information Provided" ? queryObject.status = req.query["status"] : '';
//   // console.log(queryObject);


//   query = req.query["status"] == "Closed" ? queryObject.status = req.query["status"] : '';
//   console.log(queryObject);

//   Ticket.find(queryObject,function(err, tickets){
//     if (err) {
//       res.status(500).json({ error: err });
//     } else {
//       console.log(tickets);
//       res.status(200).type("json").send(JSON.stringify(tickets, null, 4));

//       // res.send(tickets)
//     }
//   })
// };

// exports.getClosedTickets = async (req, res) => {
//   console.log(req.body);

//   queryObject = {};
//   // query = req.query["status"] == "New" || req.query["status"] == "In progress" || req.query["status"] == "Additional Information Needed" || req.query["status"] == "Additional Information Provided" ? queryObject.status = req.query["status"] : '';
//   // console.log(queryObject);

//   query = req.query["status"] == "Closed" ? queryObject.status = req.query["status"] : '';
//   console.log(queryObject);

//   Ticket.find(queryObject,function(err, tickets){
//     if (err) {
//       res.status(500).json({ error: err });
//     } else {
//       console.log(tickets);
//       res.status(200).type("json").send(JSON.stringify(tickets, null, 4));

//       // res.send(tickets)
//     }
//   })
// };



// exports.getTicketById = async (req, res) => {
//   const id = req.query.activityId;
//   activity.findById(id, (err, doc) => {
//     err ? res.status(500).send(err) : res.status(200).json({ activity: doc });
//   });
// };