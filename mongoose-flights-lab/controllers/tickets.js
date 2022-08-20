const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

module.exports = {
  new: newTicket,
  create,
};

function create(req, res) {
  var ticket = {seat: req.body.seat, price: parseInt(req.body.price), flight: req.body.flightId};
  Ticket.create(ticket, function (err, performer) {
    res.redirect("/flights/" + req.body.flightId);
  });
}

function newTicket(req, res) {
  Flight.find({}, function (err, flights) {
    res.render("tickets/new", {
      title: "New Ticket",
      flightId: req.params.id
    });
  });
}
