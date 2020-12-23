const { body, validationResult } = require("express-validator");

const categoryRules = () => [
  body("name", "Name is Required").notEmpty(),
  body("name", "password must contain at least 6 charachters").isLength({
    min: 6,
    max: 20,
  }),
];



const validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array().map((el) => ({
        msg: el.msg,
      })),
    });
  }
  next();
};

module.exports = {
  validator,
  categoryRules,
};
