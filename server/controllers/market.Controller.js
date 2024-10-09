
import Market from '../models/market.js'


export const createMarket = async (req, res) => {
  const {marketName, color, userId} = req.body
  
  if (!marketName || !color || !userId) return res.status(400).json({ message: "Market name and color, User are required" });
  
  const marketNameLower = marketName.toLowerCase();

  const modifiedColor = color.slice(1);


  try {

    const existingMarket = await Market.findOne({ where: { name: marketNameLower } });

    if (existingMarket) return res.status(400).json({ message: "Market with this name already exists." });
    

    await Market.create({
      name: marketNameLower,
      color: modifiedColor,
      userId: userId,
    });
    

    return res.status(201).json({ message: 'Market created successfully'});

  } catch (error) {
    console.error("Error creating market:", error);

    return res.status(500).json({ message: "Error creating market" });
  }

}

export const getMarket = async (req,res) => {

  const userId = req.params.userId;
  
  
  try {
    const markets = await Market.findAll({
      where: {userId: userId},
      attributes:['id','name','color']
    }); 
    
    const marketDataValues = markets.map(market => market.dataValues);
    
    res.status(200).json(marketDataValues);
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: 'Error retrieving markets', error: error.message });
  }
}