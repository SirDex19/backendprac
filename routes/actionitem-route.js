const express = require("express");
const router = express.Router();
// const { getTicket } = require("../controllers/tickets-table-controller");

const actionitemController = require("../controllers/actionitems-controller");

// router.get("/saveTsaveTicketicket", getTicket);
router.post("/saveActionItem", actionitemController.addActionItem);
router.get("/getActionItems", actionitemController.getActionItems);
router.patch("/editActionItem/:id", actionitemController.updateActionItem);
router.delete("/deleteActionItem/:id", actionitemController.deleteActionItem);
// router.get("/getOpenTickets", ticketsController.getOpenTickets);
// router.get("/getCompletedTickets", ticketsController.getCompletedTickets);
// router.get("/getClosedTickets", ticketsController.getClosedTickets);

// router.get("/getOpenTickets/:status", ticketsController.getOpenTickets);
// router.get("/getTicketsByStatus/:status", ticketsController.getTicketsByStatus);
// router.get('/:entityId', actionItemsController.get_action_items_by_entityId);

module.exports = router;