/**
 * Assignment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      assignment_id: {
        type: "integer",
        primaryKey: true,
        autoIncrement: true
      },
      student_id: {
        type: "integer",
        maxLength: 10,
        model: 'student'
      },
      assignment_nbr: {
        type: "integer",
        maxLength: 10
      },
      grade_id: {
        type: "integer",
        maxLength: 10,
        model: 'grade'
      },
      class_id: {
        type: "integer",
        maxLength: 10,
        model: 'class'
      }
    },
    autoPK: false
  };
