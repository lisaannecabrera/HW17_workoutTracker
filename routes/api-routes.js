"use strict";

const Workout = require("../models/Workout.js");

module.exports = app => {
  app.post("/api/workouts", ({ body }, res) => {
    workout
      .create(body)
      .then(dbExercise => res.json(dbExercise))
      .catch(err => res.status(400).json(err));
  });

  app.put(`/api/workouts/:id`, ({ body, params }, res) => {
    console.log(body);
    workout
      .findOneAndUpdate({ _id: params.id }, { $push: { exercises: body } })
      .then(dbExercise => {
        console.log(err);
      });
  });

  app.get(`/api/workouts`, (req, res) => {
    Workout.find({})
      .then(dbExercise => res.json(dbExercise))
      .catch(err => res.status(400).json(err));
  });
};
