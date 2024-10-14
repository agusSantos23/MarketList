
import Market from '../models/market.js'


export const createMarket = async (req, res) => {
  const {marketName, color, userId} = req.body
  
  if (!marketName || !color || !userId) return res.status(400).json({ message: "Market name and color, User are required" });
  
  const marketNameLower = marketName.toLowerCase()

  const modifiedColor = color.slice(1)


  try {

    const existingMarket = await Market.findOne({ 
      where: { 
        name: marketNameLower, 
        userId: userId
      } 
    })

    if (existingMarket) return res.status(400).json({ message: "Market with this name already exists." })
    

    await Market.create({
      name: marketNameLower,
      color: modifiedColor,
      userId: userId,
    });
    

    return res.status(201).json({ message: 'Market created successfully'})

  } catch (error) {
    console.error("Error creating market:", error)

    return res.status(500).json({ message: "Error creating market" })
  }

}

export const getMarket = async (req,res) => {

  const userId = req.params.userId
  
  
  try {
    const markets = await Market.findAll({
      where: {userId: userId},
      attributes:['id','name','color']
    }); 
    
    const marketDataValues = markets.map(market => market.dataValues)
    
    res.status(200).json(marketDataValues)
  } catch (error) {
    console.log(error)
    
    res.status(500).json({ message: 'Error retrieving markets', error: error.message })
  }
}

export const deleteMarket = async (req,res) => {

  const { marketId } = req.params

  try {
    
    const market = await Market.findByPk(marketId)

    if(!market) return res.status(404).json({message: "Market not found"})
    

    await market.destroy()

    res.status(200).json({ message: 'Market deleted successfully' })

  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}