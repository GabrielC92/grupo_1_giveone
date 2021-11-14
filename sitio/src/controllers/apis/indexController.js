const db = require('../../database/models');
const {Op} = require('sequelize');

module.exports = {
    search: async (req, res) => {
        console.log(req.query)
        let products;
        try {
            if (+req.query.filter !== 0) {
                products = await db.Product.findAll({
                    where: {
                        categoryId: req.query.filter,
                        name: {
                            [Op.substring]: req.query.search
                        }
                    },
                    /* order: [
                        [req.query.order || 'id']
                    ], */
                    //limit: +req.query.limit,
                    include: ['images', 'category'],
                })
            } else {
                products = await db.Product.findAll({
                    include: ['category', 'images'],
                    where: {
                        [Op.or]: [
                            {
                                name: {
                                    [Op.substring]: req.query.search
                                }
                            },
                            {
                                description: {
                                    [Op.substring]: req.query.search
                                }
                            }
                        ]
                    },
                    limit: req.query.limit,
                    /* order: [
                        [req.query.order || 'id']
                    ], */
                })
            }
            let response = {
                status: 200,
                meta: {
                    total: products.length,
                    link: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                },
                data: products
            }
            return res.status(200).json(response)
        } catch (error) {
            console.log()
            return res.status(500).json({ response: error })
        }
    }
}