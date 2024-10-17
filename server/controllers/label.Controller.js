import Label from '../models/label.js'
import Product from '../models/product.js'
import Market from '../models/market.js'



export const getLabel = async (req, res) => {

  const userId = req.params.userId

  try {
    const labels = await Label.findAll({
      where: {userId: userId},
      attributes:['id','name','emoji']
    }); 

    const labelDataLabels = labels.map(label => label.dataValues)

    res.status(200).json(labelDataLabels)
    
  } catch (error) {
    console.error(error)

    res.status(500).json({ message: 'Error retrieving markets', error: error.message })

  }

}

export const getLabelElement = async (req, res) =>{

  const labelId = req.params.labelId

  try {
    
    const products = await Product.findAll({
      where: {
        labelId: labelId 
      },
      include: [
        {
          model: Market,
          as: 'market',
          attributes: ['id', 'name', 'color'], 
        }
      ],
      attributes: ['id', 'price', 'quantity', 'brand'], 
    });

    //console.log(products);
    
    //res.status(200).json({products})

  } catch (error) {
    console.error(error)

    res.status(500).json({ message: 'Error retrieving markets', error: error.message })

  }
}


export const createLabel = async (req, res) => {

  const {labelName, emoji, userId} = req.body

  if (!labelName || !emoji || !userId) return res.status(400).json({message: "Label data is required"})

  const labelNameLower = labelName.toLowerCase()

  try {

    const existingLabel = await Label.findOne({
      where:{
        name: labelNameLower,
        userId: userId
      }
    })

    if (existingLabel) return res.status(400).json({message: "Label with this name already exits"})

    await Label.create({
      name: labelNameLower,
      emoji: emoji,
      userId: userId
    })


    return res.status(201).json({ message: "Label created"})

  } catch (error) {


    console.error(error);
    
  }


}

export const deleteLabel = async (req, res) => {
  
  const { labelId } = req.params
  
  try {
    
    const label = await Label.findByPk(labelId)

    if (!label) return res.status(404).json({message: "Label not found"})

    await label.destroy()

    res.status(200).json({message: "Label deleted"})
    
  } catch (error) { 
    res.status(500).json({ message: "Internal server error" })
  }
}