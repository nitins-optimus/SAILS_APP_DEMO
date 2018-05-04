/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    add: function(req, res) {
        console.log("adding product")
        console.log(req.body)
        Product.add(req.body).then((product) => {
            return res.json({
                err: null,
                status: true,
        data: product
            })
        }).catch((error) => {
            return res.json({
                err: error,
                status: false
            });
        })
    }

};