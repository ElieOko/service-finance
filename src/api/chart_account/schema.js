const joi = require("joi");
const schema = joi.object({
    numero_compte : joi.string().min(1).required(),
    libelle : joi.string(),
    nature : joi.string(),
});

module.exports = {
    joi,
    schema
}