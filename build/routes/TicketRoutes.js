"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TicketController_1 = require("../controllers/TicketController");
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.status(200).send({
        message: "Tickets!",
    });
});
router.post("/post-ticket", TicketController_1.postTicket);
module.exports = router;
